---
title: 1.1 Quick review of Single-Agent RL
type: learn
order: 7
cate: CH1
---

## 1.1. Quick review of Single-Agent RL

강화학습은 agent가 환경과의 상호작용을 통해 얻을 수 있는 보상을 최대화 하기 위해 어떤 행동을 해야하는지 배우는 것을 말합니다. 이때 agent는 어떤 행동을 취해야 하는지 모르는 상태로 학습을 시작해 시행착오를 겪으며 가장 이상적인 행동을 찾아갑니다. 그리고 지금의 행동이 즉각적인 보상 뿐만아니라 미래의 보상에도 영향을 줄 수 있다는 것을 인지하는 점에서 강화학습과 다른 기계학습 알고리즘들과의 차별점이 생기게 됩니다. 이 두가지 특징을 흔히 **_trial-and-error_** 와 **_delayed reward_** 라고 표현합니다.

강화학습에서 가장 보편적으로 사용되는 **Markov Decision Process(MDP)** 를 통해 강화학습에 대해 간단히 복기해 보겠습니다.

MDP는 다음과 같이 다섯개의 원소를 가진 튜플 $(\mathcal{S},\mathcal{A},P,R,\gamma)$ 로 정의할 수 있습니다.

MDP의 구성요소에 대해 간단히 짚고 넘어가자면 다음과 같이 설명할 수 있습니다.

- $\mathcal{S}$ - state space, 가능한 모든 env의 상태가 정의되는 공간
- $\mathcal{A}$ - action space, 가능한 모든 행동 $a$가 정의되는 공간
- $P:\mathcal{S}\times\mathcal{A} \rightarrow \mathcal{P}(\mathcal{S})$ - transition probability, 현 상태와 행동이 주어졌을때 특정 상태로 변이 될 확률
- $R:\mathcal{S}\times\mathcal{A}\times\mathcal{S} \rightarrow \mathbb{R}$ - reward function, 특정 행동을 통해 어떤 상태로 전환이 되었을때 받는 보상을 정의하는 함수
- $\gamma \in [0,1]$ - discount factor, 미래의 보상을 어느정도로 할인하여 고려할 것인지 결정

위 MDP에서 agent는 action과 reward를 통해 env와 상호작용하고 discount factor를 이용하여 delayed reward를 고려한다는 것을 알 수 있습니다.

매 시점 t마다 agent는 state $$s_t$$를 직면하고 시행할 행동 $$a_t$$를 골라야합니다. agent가 고른 행동 $$a_t$$에 따라 환경은 $$s_{t+1}\sim P(\cdot|s_t, a_t)$$로 확률적으로 변하며 그에 따른 즉각적인 보상 $$R(s_t,a_t,s_{t+1})$$을 받게됩니다. **Agent의 목표는 매 시점마다 받는 보상의 discounted sum을 최대화하는 정책 $\pi$를 찾는 것입니다.** 여기서 등장한 정책 (policy) $$\pi(\cdot \vert s_t)$$는 어느 시점 $$t$$에서 주어진 state $$s_t$$에서 agent의 action space $$\mathcal{A}$$ 위에서 정의되는 분포를 나타냅니다. 다시말해 모든 가능한 action $$a_t \in \mathcal{A}$$ 가 선택될 확률을 나타내는 함수입니다. 그리고 주어진 정책으로부터 얻을 수 있는 모든 (discounted) 보상의 기댓값은 다음과 같이 정의할 수 있습니다.

$$
\begin{aligned}
\mathbb{E}[\sum_{t}\gamma^tR(s_t,a_t,s_{t+1})|a_t\sim {\pi}(\cdot|s_t), s_0]
\end{aligned}
$$

이에 따라 적절한 state-action function (Q) 또는 value function (V)를 정의할 수 있습니다.

$$
\begin{aligned}
Q_{\pi}(s,a) = \mathbb{E}[\sum_{t}\gamma^tR(s_t,a_t,s_{t+1})|a_t\sim {\pi}(\cdot|s_t), a_0=a, s_0=s]
\end{aligned}
$$

$$
\begin{aligned}
V_{\pi}(s) = \mathbb{E}[\sum_{t}\gamma^tR(s_t,a_t,s_{t+1})|a_t\sim {\pi}(\cdot|s_t), s_0=s]
\end{aligned}
$$

![fifty](https://mas-tutorials.s3.ap-northeast-2.amazonaws.com/SA.png)

###### Figure 1. 일반적인 single-agent RL의 problem setting

위에서 한번 정리한것처럼 강화학습의 기본 세팅은 Figure 1. 에서와 같이 하나의 agent와 환경사이의 상호작용으로부터 발생하는 reward를 최대화 하는데에 있습니다. 여기서 일반적으로는 reward가 가장 중요하기때문에 앞서 정리한것처럼 $Q(s)$ 혹은 $V(s)$와 이를 최대화하는 $\pi$를 학습시키는데에 초점이 맞추어져 있습니다. 하지만 본 튜토리얼에서는 multi-agent에 대한 이야기를 하고 있기 때문에 초점을 "agent와 환경사이의 상호작용"으로 옮기도록 하겠습니다.

![fifty](https://mas-tutorials.s3.ap-northeast-2.amazonaws.com/MA.png)

###### Figure 2. Multi-agent에서의 problem setting

Multi-agent문제라고 하면 이름 그대로 Figure 1. 의 일반적인 강화학습에서처럼 하나의 agent가 아닌 Figure 2. 와 같이 다수의 agent가 환경과 상호작용하는 상태를 설명합니다. 즉 위의 MDP에서 사용된 $\mathcal{A}$를 agent하나의 action space가 아닌 모든 agent들의 action space의 product space ($\mathcal{A}=\prod_i \mathcal{A}_i$)로 변환하여 생각해 볼 수 있습니다. 하지만 여기서 추가적으로 고려해야 할 사항들이 생겨납니다. 원래 $\mathcal{A}$에 의존하던 다음 state에 대한 결정이 모든 agent들의 행동에 영향을 받는 것 뿐만 아니라 각 agent도 서로의 행동에 영향으로 받고 각 agent들이 서로의 행동에 의존하는 서로 다른 reward함수를 가질 수 있기 때문입니다. 즉 환경과 agent"들" 사이의 상호작용 뿐만 아니라 서로의 상호작용까지 고려하여 행동을 결정해야하는 복잡한 상황이 오게 됩니다. Multi-agent 문제의 예시들은 사실 일반적인 사회의 모습안에서 다양한 형태로 찾아볼 수 있습니다. 그리고 그것에 대해 수학적으로 정리한 대표적인 학문으로 **게임이론 (Game Theory)** 이 있습니다.
