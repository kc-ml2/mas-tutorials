---
title: 4.1 MADDPG
type: learn
order: 20
cate: CH4
---

## 4.1. MADDPG

Multi-Agent Deep Deterministic Policy Gradient(MADDPG)는 2017년 발표된 _Lowe et al._ 의 [Multi-Agent Actor-Critic for Mixed Cooperative-Competitive Environments](https://arxiv.org/abs/1706.02275)에서 소개된 알고리즘으로 기존 DDPG 알고리즘을 Multi-Agent의 영역으로 확장하였습니다. MA 세팅은 이론적인 면에서나 실용적인 측면에서나 매력적이지만 여러 Agent가 게임 내에 존재함으로 생기는 env의 non-stationarity 때문에 기존 single-agent의 접근방식으로는 학습이 어려웠습니다. MADDPG는 **Centralized training과 Decentralized execution**을 이용해 이 문제를 해결하였고 여러 multi-agent 환경에서 다양한 task를 수행하며 agent간의 competition과 cooperation, 그리고 이 둘의 mixed strategy까지 학습하는 데 성공했습니다. 뿐만아니라 explicit한 communication 구조 없이도 여러 agent간의 **communication 통한 coordination**이 가능함을 보여주었습니다.

Multi-Agent 환경에서 **non-stationarity**의 원인은 env의 역학이 **한 agent의 action에만 의존하지 않는다**는데 있습니다. 이는 action에 따른 reward 및 state transition이 여러 agent의 joint action에 따라 달라지기 때문입니다. 단순히 다른 agent의 존재 또는 action을 모른채 observation을 받아 state-action-value 혹은 policy 네트워크를 학습시키면, 독립적인 학습을 하는 single agent의 입장에서는 환경의 변화가 오로지 자신의 action에 따른 것인지 아니면 다른 agent들의 action이나 policy 변화에 따른것인지 구별하기 어렵게 됩니다.

$$
\begin{aligned}
P(s'|s,a_i) &\neq P(s'|s,a_i,a_{-i})
\end{aligned}
$$

이러한 환경의 non-stationarity는 joint action을 알고있는 경우 비교적 간단한 아이디어를 통해 해결하는 것이 가능합니다. State transition이 일어나는 매 step마다 여러 agent의 policy 변화에 관계 없이 state의 stationarity를 유지할 수 있기 때문입니다. 이는 환경 자체의 stochasticity를 제외하면 state의 transition이 **agent들의 현재 state와 joint action에만** 의존하기 때문입니다. 그리고 MADDPG의 핵심은 이 아이디어에 기반을 두고 있습니다.

$$
\begin{aligned}
P(s'|s,a_1,...,a_N) &= P(s'|s,a_1,...,a_N, \pi_1, ...,\pi_N) \\ &= P(s'|s,a_1,...,a_N, \pi'_1, ...,\pi'_N) \end{aligned}
\\ \text{for any}\ \pi_i \neq \pi_i'
$$

그런데 말입니다, 여기서 joint action을 모두 아는것은 너무 강한 가정이 아닌가 하는 의구심을 가질 수 있습니다. Snake game과 같이 agent간의 simultaneous한 action choice가 이루어지는 게임의 경우 이러한 가정이 충분히 가능하지만 POMDP를 고려한다면 multiplayer game에서 한 agent가 다른 모든 agent들의 joint action을 모두 알고있는 것은 비현실적인 경우가 많습니다. 하지만 actor와 critic을 별도의 network로 학습시키는 Actor-Critic Framework을 고려한다면 훈련과정에서 critic만 모든 agent의 joint action을 알게하고 actor는 자신의 local observation을 사용하도록 제한하는 것이 가능합니다. 이후 실제 test에서는 actor만을 사용하여 test 상황에서 발생할 수 있는 정보부족의 문제를 해결 할 수 있습니다. 또한, 훈련과정에서 critic이 모든 joint action을 알 수 있다는 가정은 필요에 따라 다른 agent의 action를 직접 추론하는 것으로 가정을 완화할 수 있습니다.

실제 경기를 뛰는 N명의 선수(actor)와 이들을 **1대1**로 훈련시키는 N명의 코치(critic)들을 상상해 봅시다. 선수들은 자신이 보고 듣는 영역의 정보만 알 수 있지만 코치들은 경기장 전체를 내려다보며 다른 선수들을 관찰할 수 있습니다. 또한, 코치들은 다른 코치들과 선수의 전략에 대한 정보를 공유하며 자신의 선수를 훈련시킵니다. 코치들간의 공유되는 정보를 이용해 자신의 선수들에게 적절한 피드백을 줄 수 있으며 자신이 생각하는 훈련방식을 개별 선수에 맞게 적용 가능하기 때문에 각 선수들이 경기에 나갔을 때 자신의 포지션에 맞는 역할을 잘 수행하도록 이끌 수 있습니다.

![sixty](https://mas-tutorials.s3.ap-northeast-2.amazonaws.com/5_0.png)

###### Fig 1. Overview of MA-AC approach. (Image source: Lowe, et al., 2017)

그러면 multi-agent policy gradient의 수식을 통해 MADDPG의 아이디어를 조금 더 깊이 들여다 보겠습니다.

N명의 player가 있는 게임을 고려합니다.

$$
\begin{aligned}
\nabla_{\theta_i}J(\theta_i) = \mathbb{E}_{s\sim p^{\boldsymbol{\pi}}, a_i\sim \pi_i}[\nabla_{\theta_i} \log \pi_i(a_i|o_i)Q_i^{\boldsymbol{\pi}}(\mathbf{x}, a_1, ..., a_N)]
\end{aligned}
$$

- $\pi_i: \mathcal{S}\mapsto \mathcal{\mathcal{P}(A)}$
- $\boldsymbol{\pi} = \{\pi_1, ..., \pi_N\}$: set of all agent policies
- $\boldsymbol{\theta} = \{\theta_1, ..., \theta_N\}$: policy parameters
- $p^{\boldsymbol{\pi}}$: state distribution under $\boldsymbol{\pi}$
- $$J(\theta_i) = \mathbb{E}_{s\sim p^{\boldsymbol{\pi}}, a_i\sim \boldsymbol{\pi}_i}[R_i]$$: expected return for agent $i$
- $\mathbf{x} = (o_1, ..., o_N)$: state information; obs of all agents(can include additional state info)
- $Q_i^{\boldsymbol{\pi}}(\mathbf{x}, a_1, ..., a_N)$: centralized action-value function learned separately for each agent $i$

MADDPG를 이해하기 위해서는 **Centralized-Decentralized Scheme**을 알아야합니다. 동일한 수의 policy $$\pi_i$$ (actor) 와 action-value function $$Q_i^\pi$$ (critic)은 정보의 공유가 없는 decentralized actor들과 모든 agent들의 observation 및 action에 access 할 수 있는 centralized critic들로 이루어져 있습니다. 즉, decentralized actor는 local information인 $$o_i$$만을 이용해 $$a_i$$를 고르게 됩니다. 하지만 centralized critic은 모든 agent의 joint action과 joint observation을 이용해 state-value를 추정합니다. 이 과정에서 centralized critic $$Q_i^{\boldsymbol{\pi}}$$를 계산하기 위해서는 모든 agent의 policy profile $$\boldsymbol{\pi}$$를 알아야 하지만 하나의 critic이 모든 actor의 학습에 관여하는 것은 아닙니다. 총 N개의 critic $$Q_i^{\boldsymbol{\pi}}$$는 각 agent $i$마다 별도로 각자의 리워드 구조를 따라 학습합니다. 이는 reward engineering을 통해 각 agent의 behavior를 유도하는데 용이하게 사용될 수 있으며 asymmetric agent끼리의 학습도 가능하게 해줍니다. 즉 서로 다른 역할을 수행해야하는 team play의 협업이나 소통을 가능하게 만들 수 있습니다.

위 구조를 Deterministic policy로 옮기면 다음 수식으로 표현할 수 있습니다.

$$
\begin{aligned}
\nabla_{\theta_i} J(\mu_i) = \mathbb{E}_{\mathbf{x}, a\sim \mathcal{D}}[\nabla_{\theta_i} \mu_i(a_i \vert o_i)\nabla_{a_i} Q_i^{\boldsymbol{\mu}} (\mathbf{x}, a_1, ..., a_N)\vert_{a_i=\mu_i(o_i)}]
\end{aligned}
$$

- $\mu_\theta:\mathcal{S}\mapsto \mathcal{A}$
- $$\mu_{\theta_i} = \mu_{i}$$: continuous policy w.r.t. parameters $\theta_i$
- $$\boldsymbol{\mu} = \{\mu_{\theta_1},..., \mu_{\theta_N}\}$$ : set of continuous polices
- $\mathcal{D}$: experience replay buffer contains the tuples $(\mathbf{x, x'}, a_1, ..., a_N, r_1, ..., r_N)$
- $Q_i^{\boldsymbol{\mu}}$ : centralized action-value function updated as:

$$
\begin{aligned}
\mathcal L(\theta_i) = \mathbb{E}_{\mathbf{x},a,r,\mathbf{x'}}[(Q_i^{\boldsymbol{\mu}}(\mathbf{x}, a_1,...,a_N)-y)^2]
\end{aligned}
$$

$$
\begin{aligned}
y = r_i + \gamma Q_i^{\boldsymbol{\mu'}}(\mathbf{x'},a_1', ...,a_N')|_{a_j'=\boldsymbol{\mu'}(o_j)}
\end{aligned}
$$

먼저 달라진 점을 살펴보겠습니다. 위의 vanilla PG와 달리 policy $\pi$가 deterministic policy $\mu$로 바뀌었고 on-policy에서 experience buffer $\mathcal{D}$를 사용하는 off-policy방식으로 바뀌었습니다. state와 probability distribution을 mapping하는 stochastic policy $\pi$와 달리 deterministic policy $\mu$는 한가지 action을 바로 고르게 됩니다. 이 policy $\mu$를 continuous한 것으로 두고 parameter $\theta$를 조정함으로써 policy gradient에 따라 학습할 수 있습니다. DQN을 공부해보신 분이라면 replay buffer를 이용해 학습의 stability를 높이는 테크닉을 기억하고 계실겁니다. DDPG 알고리즘은 discrete action space에서만 가능했던 DQN의 학습 방식을 actor-critic framework로 가져와 continuous한 action에 대해서도 가능하게 해주었습니다. MADDPG는 DDPG의 학습을 N player에 대해 generalize한 것으로 Q network의 input으로 N명의 action이 모두 들어가는 것을 확인할 수 있습니다. Centralized critic은 모든 agent의 행동을 관찰하여 현재 state와 joint action의 value를 계산하기 때문에 state transition의 non-stationarity문제를 해결할 수 있습니다. 이와 다르게 $\mu$는 오로지 agent $i$의 local observation $o_i$만을 이용해 action을 고릅니다. Decentralized action selection은 training이 끝난 뒤 실제 application에 적용할 때 multi-agent를 모두 분리하여 deploy할 수 있게 만들어 줍니다. Centralized critic과 decentralized actor는 단순히 Actor와 Critic network를 분리한 것을 넘어 Centralized training과 decentralized execution의 맥락에서 해석할 수 있습니다. 이러한 학습 방식은 training과정에서 사용가능한 extra information을 이용해 학습을 용이하게 하고 test time에는 사용하지 않음으로써 multi-agent 본연의 task를 수월하게 수행하도록 해줍니다.

Mulit-Agent Actor Critic Framework는 model에 대한 가정과 communication 방식의 제한 없이 localized agent와 centralized critic만을 이용해 다양한 multi-agent task에서 agent간의 경쟁적, 협동적, 혼합적 행동을 학습시키는데 성공했습니다. 단순히 agent간의 물리적 action으로 인한 상호작용 이외에도 agent간의 signaling을 통한 역할 수행도 가능함을 보여주었습니다. Multi-Agent Snake Game에서 이와 같은 communication을 다룰 기회는 없지만 agent간의 복잡한 competitive strategy를 이끌어내기에 적합한 알고리즘입니다. 원 논문에서는 초기에 설명한 가정을 완화하기 위해 타 agent의 action을 추정하는 방식이나 ensemble policy를 통해 stability를 보완하는 테크닉들을 보여주기도 했습니다.

![eighty](https://mas-tutorials.s3.ap-northeast-2.amazonaws.com/5_1.png)

###### Fig 2. MADDPG Algorithm. (Image source: Lowe, et al., 2017)
