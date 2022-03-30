---
title: 4.2 COMA
type: learn
order: 21
cate: CH4
---

## 4.2. COMA

[Counterfactual Multi-Agent Policy Optimization (COMA) (*Foerster et al. 2018*)](https://arxiv.org/abs/1705.08926) 는 2018년 *AAAI*에 발표된 논문으로 앞서 다룬 MADDPG와 유사한 접근법을 가지고 있습니다. 우선 둘다 동일하게 centralized critic을 가지지만 COMA는 deterministic policy gradient대신 일반적인 policy gradient algorithm에 기반한다는데에서 차이가 있습니다. 그리고 둘다 centralized critic을 사용하는것은 맞지만 MADDPG에서는 각각의 agent에 해당하는 centralized critic이 하나씩 있어 해당 agent의 reward 함수를 더욱 마르코프한 함수를 통해 학습시키는 것이 목적이였다면 COMA에서는 credit assignment 문제에 더 집중을 한 용도로서 centralized critic을 사용합니다. 따라서 모든 agent가 오직 하나의 critic만을 사용하며 reward함수 또한 모든 agent의 action에 의존하게 됩니다. 

우선 COMA에서 가장 앞에 등장하는 **counterfactual**이라는 단어는 직역하면 **"반사실적"** 이라는 뜻이며 통계학에서 인과적 추론 문제를 다룰때 이미 하나의 이벤트가 일어났기 때문에 다른 이벤트를 관측할 수 없는 경우 이를 반사실적으로 추측하는데에서 등장 하는 개념 이기도 합니다. 그리고 대체로 관측이 되었던 상황의 반대를 상정하기 때문에 "반사실적" 이라는 뜻의 counterfactual이라는 이름이 붙었습니다. 예로 "내가 만약 어제 자기전 라면을 먹지 않았더라면 오늘 얼굴이 붇지 않았을거야" 라는 문장은 "나는 어제 라면을 먹었다"와 
"오늘 얼굴이 부었다" 라는 관측을 내포하며 이에 반대되는 상황을 가정하여 "라면"과 "얼굴의 붓기" 사이의 인과관계를 형성하여 이야기하기 때문에 counterfactual로 볼 수 있습니다.  

그렇다면 다시 COMA로 돌아가서 COMA에서 왜 counterfactual이라는 keyword를 넣게 되었는지에대해 이야기 해 보겠습니다. 우선 COMA의 문제의식은 cooperative 한 상황에서 출발합니다.  Cooperative한 상황에서 한 군에 속해있는 각각의 agent들은 한가지의 공통 목표를 이루기위해 협동을 하게 됩니다. 예를들면 축구라는 경기는 각각의 선수들이 협동을 통해 상대 팀보다 많은 골을 넣어 경기에서 승리하는 것을 목표로 하는것과 같습니다. 하지만 축구경기에서도 마찬가지로 어떠한 팀경기가 끝났을때는 각각의 선수에 대한 평가를 하기 마련입니다. 어떤선수가 가장 기여를 많이 했냐에 따라 그날의 MVP를 뽑기도 하는것처럼 cooperative multi-agent 문제에서는 결과에대한 각 agent의 기여도를 찾는것을 **credit assignment**라고 부릅니다. 하지만 모두가 협동을 하여 이루어낸 결과에서 각 선수의 행동과 결과사이의 인과관계를 계량하는 것이란 결코 쉬운 문제는 아닙니다. 그래서 이를 해결하기위해 COMA에서는 반사실적 상황을 가정하여 관측한 어떤 상황에서 "만약 특정한 agent 하나가 이렇게 행동하면 어땠을까" 라는 질문을 던지는것으로 문제에 접근합니다.

논문에서는 해결책의 제시에 앞서 문제를 정형화 하는것으로 이야기를 시작합니다. COMA에서 풀고자 하는 문제는 앞서 챕터 2 에서 다뤘던 stochastic game으로 정의할 수 있습니다.

Stochastic game $G$ is defined with $(\mathcal{X}, \mathcal{A}, P, R, Z, O, n, \gamma)$

- $\mathcal{X}$: State space
- $\mathcal{A}$: joint action space
- $P$: transition probability
- $R$: reward function
- $Z$: observation in partial observation setting
- $O$: observation function

논문에서 사용한 표기법과 대응하여 비교하면 $S=\mathcal{X}, U=\mathcal{A}, r=R$ 가 되어 $(S, U, P, r, Z, O, n, \gamma)$의 형태로 표기합니다. (나머지는 충분히 비슷하니 넘어가도록 하겠습니다.)

이렇게 문제 자체를 정의하는 과정에서 1차적으로 해결해야할 사항이 발생합니다. Competitive 하거나 fully decentralized system과는 다르게 reward 함수 $r(s, \boldsymbol{u}) : S \times U \rightarrow \mathbb{R}$ 가 joint action 에 대해 정의된다는 점입니다. 덤으로 partial observability 에 의해 각 agent의 observation이 서로 다른경우 이를 하나의 state $s$ 로 묶는것 또한 고민해봐야할 점입니다. 결국 RL에서 흔히 이야기하는 $Q$ 나 $V$ 가 모든 agent의 정보를 알고있어야한다는 점입니다. 고로 각 함수는 다음과 같이 표기합니다: $Q^{\boldsymbol{\pi}}(s_t, \boldsymbol{u}_t), V^{\boldsymbol{\pi}}(s_t)$. 이에대해 COMA는 다음과 같은 architecture 를 제시하였습니다. 

![eighty](https://mas-tutorials.s3.ap-northeast-2.amazonaws.com/5_2.png)
###### Figure 3. Architecture details of COMA (Image source: Foerster et al. 2018)

Figure 3 (b)에서와 같이 각각의 agent는 자신의 observation 과 action의 history를 GRU를 통해 $h_t^a$로 encoding 함으로써 trajectory $\tau$에 대한 정보를 얻습니다. 그리고 조금은 COMA의 단점일 수도 있지만 centralized critic이 각 agent와는 다르게 global state정보를 $s_t$를 통해 따로 받게 됩니다. (애초에 global한 정보가 주어지지 않는 경우에 대한 해결책은 따로 제시하고 있지 않습니다.) 추가적으로 각 agent의 action과 policy정보를 받음으로써 critic은 사실상 모든 정보를 알고있는 존재가 됩니다. 그렇다면 마르코프 성질또한 가정하는데 큰 무리가 없습니다.

여기까지는 주어진 문제의 세팅부터 파생된 문제를 다루는데에 관련된 내용이였습니다. 지금부터는 COMA의 진짜 핵심인 *counterfactual baseline*에 대해 이야기해 보도록 하겠습니다. 논문에서는 COMA의 특징을 다음의 세가지로 직접 명시하고 있습니다. 

**1) centralisation of the critic,** 

**2) use of a counterfactual baseline, and** 

**3) use of a critic representation that allows efficient evaluation of the baseline.**

이중 1)의 경우 위에서 알고리즘의 구조를 통해 해결을 하였고 2) 와 3)은 사실상 비슷한 이야기라 생각됩니다. 우선 counterfactual baseline에 대해 이야기하기 위해서는 **difference reward** 라는 개념으로 거슬러 올라가야합니다. 특정 action의 기여도를 측정하기 위해 $R(s,a)$ 에서 $R(s, \langle a^{-i}, c^i \rangle)$ 을 뺌으로서 agent $i$ 의 action $a^i$ 의 기여도를 정의할 수 있습니다. 여기서  $c^i$ 는 default action이라고 불리며 어떤 임의의 기준점이라고 해석하시면 됩니다. 이렇게 agent $i$ 와는 독립적인 default action을 설정하는 방법 외에 Wolpert & Tumer (2002)에서 제시한 *aristocrat utility* 에서는 agent $i$ 에 대한 의존성을 없애기위한 방법으로 agent $i$ 의 action을 marginalize out하여 $R(s, a) - \mathbb{E}_{b^i \sim \pi^i}(R(s, \langle a^{-i}, b^i \rangle))$ 로 나타낼 수 있습니다. 그리고 COMA에서는 이를 $Q$로 확장하여 다음과 같이 advantage를 정의 합니다.

$$
\begin{aligned} 
A(s,a) = Q(s,a) - \sum \pi(b^i \vert s)Q(s, \langle a^{-i}, b^i \rangle)
\end{aligned} 
$$

사실 이 식은 single-agent인 상황을 가정하고 대입하여 생각해보면 흔히 사용하는 advantage $A= Q-V$ 의 형태와 동일합니다. 다만 multi-agent인 상황에서 하나를 제외한 나머지 agent들을 환경의 일부로 생각한 뒤 고정시키고 그 하나의 agent관점에서 joint-action에 대해 expectation을 취하는 것과 비교했을때 baseline 부분을 counterfactual이라고 해석하는 접근법이 재미있는 부분이였습니다. 그리고 이를 사용하여 논문에서 제시하는 최종적인 COMA의 gradient함수는 다음과 같습니다.

$$
\begin{aligned} 
g = \mathbb{E}_{\boldsymbol{\pi}} \left[ \sum\limits_a \nabla_\theta \log \pi^a(u^a\vert\tau^a)A^a(s,\boldsymbol{u})\right]
\end{aligned} 
$$

여기서 추가로 위의 gradient를 joint policy $\boldsymbol{\pi}(\boldsymbol{u}\vert s) = \prod\limits_a \pi^a(u^a \vert s)$ 에 대해 정리하면 원래 single-agent에서 사용한 policy gradient의 형태와 동일해 진다는 것 또한 보였습니다. 

---

### MADDPG와 COMA

요약하자면, MADDPG나 COMA 둘다 multi-agent인 상황에서는 다른 agent의 action을 관찰할 수 없기 때문에 각 agent의 critic이 single-agent 일때와 같이 state와 해당 agent의 action을 받으면 Markov하지 않는 문제를 centralized critic을 사용했다는 점에서 공통점을 가지고 있습니다. 여기서 MADDPG는 각각의 agent가 다른 reward 함수를 가지고 있다는 가정을 하기에 이에 해당되는 centralized critic이 각 agent마다 존재할 수 있습니다. 그렇기 때문에 competitive한 setting 뿐만 아니라 cooperative하거나 (reward 가 따로 주어질 수 있는경우) mixed 인 상황에서도 사용이 가능해집니다. 반대로 COMA는 reward 함수가 모든 agent에 대해 공통적으로 하나만 주어지는 상황을 가정하고 있고 여기서 파생되는 credit assignment 문제를 해결하고자 하였기 때문에 centralized critic은 오직 하나만 존재하게 되고 cooperative한 세팅에 더욱 적합합니다. 

둘의 구조적인 차이를 보면 MADDPG는 DPG의 구조를 따르고 있기 때문에 (gumbel-softmax에 대한 논의를 제외하면) continuous 한 action space에 대해서만 사용이 가능합니다. 반대로 COMA는 counterfactual baseline을 구하기 위해 action에 대해서 marginalize out 하는 과정때문에 discrete finite action space에 대해서만 사용이 가능합니다. 따라서 multi-snake에서 사용할 수 있는 multi-agent algorithm을 만들기 위해서는 둘의 장점들을 적절하게 잘 섞어줄 필요가 있어보입니다. 예를들면 적절한 opponent sampling과 reward function들을 이용하여 MADDPG와 같이 train때는 다양한 형태의 agent들의 joint-action을 받는 centralized critic들과 decentralized actors를 이용하되 discrete 한 action 공간을 다룰 수 있게 COMA에서와 같은 형태로 각 actor를 학습 시키는 방법을 생각해 볼 수 있을 것입니다.

<br>



챕터 1 부터 시작하여 4까지 다룬내용을 정리하면

- MARL논문들을 읽기 앞서 알면 좋을 게임이론과 관련된 용어/개념들
- 주어진 MARL 문제를 정보량의 관점에서 강화학습스럽게 정의하기
- Multi-agent 문제 안에서 single-agent algorithm 적용하고 분석하기
- single-agent algorithm에서 더 나아가 multi-agent algorithm을 통해 문제 접근하기

로 정리할 수 있습니다. 

그러면 지금까지 나왔던 내용들을 바탕으로 Snake Leaderboard에서 새로운 아이디어를 직접 적용해보고 탐구해보시길 적극 권장해 드립니다!

[▶**리더보드 참여하기**](https://tutorials.kc-ml2.com/v3/2/2intro)

### Reference

1. Lowe et al. Multi-Agent Actor-Critic for Mixed Cooperative-Competitive Environments [https://arxiv.org/pdf/1706.02275.pdf](https://arxiv.org/pdf/1706.02275.pdf)
2. Foerster et al. Counterfactual Multi-Agent Policy Gradient. AAAI 2018. [https://arxiv.org/pdf/1705.08926.pdf](https://arxiv.org/pdf/1705.08926.pdf)