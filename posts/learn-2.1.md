---
title: 2.1 Problem definition in MARL
type: learn
order: 11
---

## 2.1. Problem Definitions in MARL

강화학습 관련 논문들을 보다 보면 **MDP (Markov Decision Process)**를 통해 문제를 정의하는것으로 시작하는것을 흔히 볼 수 있습니다. 여기서 가장 중요한 단어는 Markov입니다. MDP에 Markov가 들어가는 이유는 MDP라는 과정 자체가 Markov property에 기반을 두고 있기 때문인데 Markov property는 간단하게 이야기해 상태 A 에서 상태 B 로 넘어가는 상황에서 B로 넘어가는 과정을 설명하는데 필요한 모든 정보는 상태 A에만 의존하고 그 이전 상태를 포함한 모든 다른 상태에는 의존하지 않는다 정도로 정의해 볼 수 있습니다. 그리고 이러한 상태변환을 통한 과정을 표현할때 Markov Process (MP) 라는 이름을 사용하고 $(\mathcal{X}, P)$ 이렇게 두개의 tuple 로 표현합니다. (각 변수의 대한 설명은 뒤에 MDP를 통해 자세하게 하겠습니다.)

<center><figure>
	<img src="/images/MP.png" width="400">
	<figcaption>Figure 1. Markov Process. Image from David Silver: <a href="https://www.davidsilver.uk/wp-content/uploads/2020/03/MDP.pdf">https://www.davidsilver.uk/wp-content/uploads/2020/03/MDP.pdf</a></figcaption>
</figure></center>

MP에서 상태변환이 일어날때 그 변환에 따라 어떠한 보상이 주어진다는 전재를 추가하면 Markov Reward Process (MRP)라고 하며 tuple로는 $(\mathcal{X}, \mathcal{R}, P, \gamma)$로 표현할 수 있습니다.

<center><figure>
	<img src="/images/MRP.png" width="400">
	<figcaption>Figure 2. Markov Reward Process. Image from David Silver: <a href="https://www.davidsilver.uk/wp-content/uploads/2020/03/MDP.pdf">https://www.davidsilver.uk/wp-content/uploads/2020/03/MDP.pdf</a></figcaption>
</figure></center>

그리고 드디어 상태변환이 agent의 행동에 의해서 발생한다는 조건까지 추가하면 single-agent RL문제를 정의했던 Markov Decision Process (MDP)가 완성이 됩니다. MDP를 이용해 문제를 정의할때는 흔히 $(\mathcal{X}, \mathcal{A}, \mathcal{R}, P, \gamma)$, 이렇게 5개의 tuple 형태로 정의가 됩니다. 각각으로 가볍게 설명하면 다음과 같습니다.

<center><figure>
	<img src="/images/MDP.png" width="400">
	<figcaption>Figure 3. Markov Decision Process. Image from David Silver: <a href="https://www.davidsilver.uk/wp-content/uploads/2020/03/MDP.pdf">https://www.davidsilver.uk/wp-content/uploads/2020/03/MDP.pdf</a></figcaption>
</figure></center>

- $\mathcal{X}$: state space, 현재 상태를 설명하는 x들이 살고있는 공간
- $\mathcal{A}$: action space, 가능한 모든 행동 $a$가 정의되는 공간
- $R(x, a, x')$: reward function, 특정 행동을 통해 어떤 상태로 전환이 되었을때 받는 보상을 정의하는 함수
- $P(x' \vert x, a)$: transition probability, 현 상태와 행동이 주어졌을때 특정 상태로 변환이 될 확률
- $\gamma$: discount factor

위의 정의된 것들 중 $\mathcal{X}$와 $R$, $P$ 등은 agent보다는 환경 자체의 특성을 설명하는 값들입니다. MP에서 MRP를 거쳐 MDP로 오기까지 추가된 것들을 살펴보면 강화학습에서 핵심이 되는 부분은 어떠한 행동 $a$를 통해 상태변화에 영향을 줄 수 있다는 사실과 이 $a$를 결정하는 것으로 볼 수 있습니다.

시야를 조금 더 넓혀 우리의 본 topic 으로 돌아와 MARL에서 문제 정의를 하는것도 앞서 보았던 Markov Process와 Markov Decision  Process와 비슷하게 할 수 있습니다. Markov process에 행동결정을 더하여 MDP가 되었던 것처럼 MP에 Markov property를 만족하는 state를 직접 관측할 수 없다는 조건을 추가하면 [Hidden Markov Model (HMM)](https://en.wikipedia.org/wiki/Hidden_Markov_model)으로 변경할 수 있습니다. HMM에 행동결정까지 추가가 되면 Partially observable Markov decision process (POMDP) 문제가 정의됩니다. 이런 흐름을 염두에 두고 MARL의 문제정의 중 대표적인  Markov Game과 이것의 partial observability를 추가한 POSG을 이번 섹션에서 다루도록 하겠습니다. 

### 2.1.1. Markov Games

우선 Markov Game (MG)으로 이야기를 시작해 보겠습니다. Markov Game은 이름만 봐도 앞서 소개한 MP, MDP등과 관련이 있으면서 게임이론에서 계속 다뤘던 Game과도 밀접한 관계가 있다는 것을 알 수 있습니다. 우선 MG를 tuple 방식으로 정의하자면 다음과 같습니다: $$(\mathcal{N}, \mathcal{X}, \{\mathcal{A}\}_{i \in \mathcal{N}}, P, \{R^i\}_{i \in \mathcal{N}}, \gamma)$$. 

MG와 MDP와의 가장 큰 차이점은 새로운 변수 $\mathcal{N}$의 등장입니다. 여기서 $$\mathcal{N}=\{1, \dots, N\}$$은 문제를 multi-agent로 확장하면서 추가된 agent들의 집합을 나타냅니다. 또한 $$\{\mathcal{A^i}\}_{i \in \mathcal{N}}$$와 $$\{R^i\}_{i \in \mathcal{N}}$$를 각 agent의 action space와 reward function을 집합으로 나타내어 각 agent에 대해 따로 존재할 수 있음을 나타내었습니다.