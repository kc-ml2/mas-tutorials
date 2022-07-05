---
title: 2.2 Information in MARL
type: learn
order: 12
cate: CH2
---

## 2.2. Information in MARL

일반적인 RL에서 MARL로 넘어가는 과정을 조금 다르게 생각해보면 단순히 하나 이상의 agent를 다루는 것을 넘어서 강화학습 자체를 조금 더 일반화 시킨 learning framework 이라고 생각할 수 있습니다. 실제로 우리가 현실에서 접하는 대부분의 문제는 agent가 다수인 경우가 더 보편적이기 때문입니다. 그래서 MARL문제를 정의하는 것도 agent의 수를 넘어서 조금 더 다각적인 시각으로 바라 볼 필요가 있습니다.

이전 챕터에서 여러 기존 snake 게임 학습의 접근법들에 대해 이야기할때 state와 observation 사이 관계에 관해 짧게 언급했습니다. 강화학습 관련 literature들을 보다보면 state와 observation이라는 단어를 아주 흔하게 볼 수 있습니다. 그리고 이 두 단어가 사용되는 context를 비교해보면 거의 동일한 의미로 사용된다는 것 또한 알 수 있습니다. 하지만 몇몇 논문들을 보면 ([_Weber et al. 2017_](https://arxiv.org/abs/1707.06203)) 이 두 단어를 확연히 구분지어 사용하는 것 또한 알 수 있습니다. 여기서는 MARL에서 다루는 다양한 정보들의 개념에 대해 이야기하기위해 이 두 단어의 의미에 대해 조금 더 명확하게 짚고 넘어가도록 하겠습니다.

통상 같은 의미로 쓰이기도 하는 상태(state)와 관측(observation)은 엄밀하게 따지면 observation은 관측면에서의, state는 정보면에서의 특성을 띄고 있습니다. 간단히 풀어 쓰면 observation은 관측할 수 있는 것 자체를 의미하며 state는 (일반적으로는) Markov property를 가지기 위한 충분한 정보를 포함하고 있는 상태표현을 의미합니다. 상태라는것을 여러 정보들의 집합이라고 생각하면 흔하게 강화학습의 예시로 등장하는 toy task들의 경우 일반적으로 observation $\subseteq$ state의 관계로 생각할 수 있습니다.

[![inline](https://mas-tutorials.s3.ap-northeast-2.amazonaws.com/ex1.png)](https://gym.openai.com/videos/2019-10-21--mqt8Qj1mwo/CartPole-v1/thumbnail.mp4) [![inline](https://mas-tutorials.s3.ap-northeast-2.amazonaws.com/ex2.png)](https://gym.openai.com/videos/2019-10-21--mqt8Qj1mwo/Ant-v2/thumbnail.mp4) [![inline](https://mas-tutorials.s3.ap-northeast-2.amazonaws.com/ex3.png)](https://gym.openai.com/videos/2019-10-21--mqt8Qj1mwo/Breakout-v0/thumbnail.mp4)

###### Figure 4. Videos from OpenAI gym: [https://gym.openai.com/envs/#classic_control](https://gym.openai.com/envs/#classic_control)

예를들어 강화학습의 대표 toy task인 openai gym의 cartpole같은 경우 {cart position, cart velocity, pole angle, pole velocity at tip} [[https://github.com/openai/gym/wiki/CartPole-v0](https://github.com/openai/gym/wiki/CartPole-v0)] 이렇게 4가지의 scalar 값이 observation으로 주어집니다. 그리고 강화학습을 통해 cartpole을 학습시키는 예제를 보면 이 observation을 state와 동일하게 생각하여 network의 input으로 받아 학습시키는 것을 볼 수 있습니다. 다르게 해석하면 observation으로 주어지는 4개의 값들만으로도 충분하게 Markov property를 가진다고 볼 수 있기 때문에 state도 동일하게 사용할 수 있다 라고 해석할 수 있습니다. 반대인 경우로는 강화학습 논문에서 흔하게 쓰이는 Atari를 생각해볼 수 있습니다. Atari 의 경우 observation으로 주어지는 것은 현재 게임의 frame을 나타내는 image 한장입니다. 여기서 발생하는 문제는 하나의 frame만으로는 action을 정할 정보가 부족하다는 것입니다. 대표적인 missing info로는 motion에 대한 정보가 있습니다. Breakout을 예시로 들자면 벽돌과 paddle 사이에 공이 위치해 있는 frame을 observation으로 받았다고 가정했을때 현재 공이 어느방향으로 움직이는지 알 수 없기 때문에 당장 paddle을 움직일지, 어느방향으로 움직일지 결정을 할 수 없는 상황이 발생합니다. 이를 해결하기 위해서 다양한 강화학습 논문을 보면 frame stack이라는 개념을 도입해 4개의 연속적인 frame들을 쌓아서 motion에 대한 정보를 담도록 하였습니다. 이렇게 Atari 의 경우 (almost) Markov한 상태를 만들기 위해 observation은 하나의 frame, state는 4개의 frame으로 구성됩니다.

위의 경우는 observation과 state가 같거나 다를 수 있지만 observation에서 주어지는 정보들로 충분히 Markov property를 만족하는 state를 구성할 수 있는 경우들을 예시로 든 것이였습니다. 하지만 이와는 다르게 observation에서 주어지는 정보들로 Markov한 state를 만드는 것이 충분하지 않은 경우도 다분히 존재합니다 ($I(\text{observation}) \le I(\text{state})$). 대표적인 예시로 포커나 Black Jack등 흔하게 알려진 카드게임들에는 대부분 상대방의 (혹은 딜러의) 카드중 현재 게임이 끝날때까지 볼 수 없는 카드가 존재하기때문에 관측할 수 있는 정보만으로는 현재 게임의 상태인 state를 알 수가 없습니다. (테이블위에 카드들이 순차적으로 등장하고 최종적으로 모든 카드가 공개되었을때 승패가 결정되면서 reward가 주어지기때문에 테이블 위 모든 카드들의 정보를 state로 볼 수 있고 이는 Markov합니다.) 이렇듯 observation이라는 개념은 순수하게 관측가능한 정보를 이야기하고 이를 잘 가공하여 Markov한 관계가 형성된다고 가정하는 것이 state이며 이 둘 사이에는 정보량의 갭이 존재합니다. 그리고 위의 예시에서 보았듯 state의 모든 정보를 관측할 수 있는지 여부를 게임이론에서는 (챕터 1 에서도 잠깐 언급되었던) Perfect/imperfect information이라고 부릅니다. 그리고 강화학습에서는 imperfect information인 상황에서 문제정의를 앞서 이야기한 POMDP를 통해서 하고 있습니다. POMDP를 tuple형식으로 정의하면 다음과 같습니다: $(\mathcal{X}, \mathcal{A}, R, P,\mathcal{O}, Z, \gamma)$.

POMDP를 구성하는 튜플의 7가지 원소 중 $(\mathcal{X}, \mathcal{A}, R, P, \gamma)$는 MDP의 원소와 동일합니다. 추가된 $\mathcal{O}, Z$는 다음과 같습니다.

- $\mathcal{O}$: observation space, agent가 관측값이 정의되는 공간
- $Z(o' | x, a)$: observation probability, 현 상태와 행동이 주어졌을때 agent가 받게될 관측값의 확률

이제 자연스럽게 POMDP와 Markov game을 합쳐서 imperfect information인 상황에서의 Markov game 또한 상상해볼 수 있습니다. 이것을 이미 정리된 개념으로는 Partially observable stochastic games (POSG) 라고 부릅니다. 그리고 tuple형식으로 쓰면 $$({\mathcal{N}, \mathcal{X}, b_0, \{\mathcal{A^i}\}_{i\in\mathcal{N}}, \{R^i\}_{i\in\mathcal{N}}, P, O, Z, \gamma})$$으로 표현할 수 있습니다.

추가된 $\mathcal{N},b_0$ 는 다음과 같습니다.

- $$\mathcal{N}=\{1, \dots, N\}$$: set of players, Game에 참가하는 player들의 집합
- $b_0$: initial state distribution, state의 초기값이 따르는 확률 분포

위에서 언급되었던 Markov모델들과 이들의 관계를 그림으로 표현하면 다음과 같습니다.

![eighty](https://mas-tutorials.s3.ap-northeast-2.amazonaws.com/MD_diagram_tuple.png)

###### Figure 5. Markov proccesses diagram
