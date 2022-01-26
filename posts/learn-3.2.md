---
title: 3.2 Sparse reward problem
type: learn
order: 16
---

## 3.2. Sparse Reward Problem

### 3.2.1. Reward manipulation

다음으로 소개할 논문은 2015년 발표된 [*Tampuu et al.* 의 *Multiagent Cooperation and Competition with Deep Reinforcement Learning*](https://arxiv.org/pdf/1511.08779.pdf) 입니다. 이 논문은 ALE (Arcade Learning Environment)의 Pong이라는 게임의 reward function을 바꿈으로서 competitive 한 상황과 cooperative한 상황, 복합적인 상황등을 모사하였을때 DQN이 어떤 반응을 보이는지를 서술한 논문입니다. 2015년, 거의 DRL의 시초라고도 볼 수 있는 DQN이 나오고 거의 직후에 발표된 논문으로  MDRL에서의 **emergent behavior analysis**로는 거의 최초라고 볼 수 있습니다. 본 논문에서는 게임이 끝날때 주어지는 reward 구조를 간단하게 변경하는 것만으로 agent가 그에 따라 competitive하거나 cooperative한 전략을 학습하는 것을 확인했습니다.


### 3.2.2. Exploration reward vs Competition reward

복잡한 게임일수록 전략을 학습시키기 위해 사람이 직접 reward를 설계하는 것이 어렵습니다. reward engineering 단계에서 연구자의 의도가 들어가더라도 그 의도를 학습에 제대로 반영하는 것이 까다롭고, 사람의 개입없이 agent끼리 학습을 하는 과정에서 agent가 창의적인 전략을 찾아내는 경우도 있기 때문에 대전형 게임은 주로 게임이 끝난뒤 승패에 따라 reward를 제공합니다. Agent의 학습 episode에서 단 한번의 reward만이 주어지기 때문에 앞서 설명한 **sparse reward problem**이 존재합니다. self-play를 하는 경우에는 competition reward의 신빙성도 고려할 필요가 있습니다. 제대로 게임을 하지 못하는 상대를 이겼을 때 주어지는 reward가 전략을 학습하는데 도움이 되지 않을 수 있기 때문입니다. 이와 같은 문제를 해결하고 competitive reward의 질을 높이기 위해 학습 초기엔 dense reward를 정의해주는 접근방식을 선택할 수 있습니다. [*Bansal et al.*](https://arxiv.org/pdf/1710.03748.pdf)에서는 exploration reward를 통해 학습 초기에 **dense reward**를 제공하였습니다. agent들이 정상적으로 게임을 진행할 수 있을 때까지 dense reward를 통해 기본동작을 학습하고 이후에는 sparse reward만을 이용해 전략을 학습합니다. 논문의 경우 ant agent는 8개의 관절을, humanoid는 17개의 관절을 제어해야 하기 때문에 몸을 제대로 다루는 것 조차 쉽지 않은 task입니다. humanoid의 경우에는 제대로 서있거나, 걷고 뛰지 못하는 agent끼리의 competition은 큰 의미가 없고 그에 따른 competitive reward 또한 학습에 도움이 되지 않습니다. 이를 해결하기 위해 기본적인 동작은 학습 초기(beginning phase)에 exploration reward를 통해 학습합니다. exploration reward를 정의해 줌으로서 dense reward를 만들어주고 안정적인 학습을 보장할 수 있습니다. 논문의 실험에서 사용된 reward는 다음 식으로 표현됩니다.

$$r_t = \alpha_ts_t + (1-\alpha_t)\mathbb{I}[t=T]R$$

여기서 $s_t$는 각 timestep t 마다 주어지는 dense reward로 exploration reward에 해당합니다. 게임이 종료된 이후 승패에 따라 결정되는 reward R은 competition reward로 timestep이 T에 도달해 게임이 종료되었을 때만 주어집니다. dense reward의 앞에 붙는 $\alpha$는 linear annealing factor로써 훈련이 진행됨에 따라 0으로 수렴합니다. 전체 훈련 epochs 중 10~15% 동안만 dense reward가 주어지기 때문에 emergent behavior들은 reward engineering으로 얻어진 것이 아님을 알 수 있습니다.