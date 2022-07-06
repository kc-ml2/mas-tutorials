---
title: 3.3 Opponent selection
type: learn
order: 17
cate: CH3
---

## 3.3. Opponent Selection

MARL환경에서의 sparse reward problem은 agent가 어떤 상대와 학습을 하느냐에 따라 치명적으로 작용할 수 있습니다. 기본적으로 RL agent는 randomized action을 취했을 때 주어지는 positive reward를 통해 학습합니다. 때문에 극단적으로 강력한 상대와 학습을 하는 경우 positive reward를 받지 못해 학습이 전혀 되지 않기도 합니다. 바둑을 처음 배우는 아이가 이세돌 9단과 같은 프로 기사와 대결을 한다면 몇판을 두든 이기지 못할 것이고 어떤 전략이 좋은지 학습하지 못할 것입니다. 이와 같이 게임을 연습할 때에는 **실력에 맞는 적절한 상대방**을 고르는 것이 매우 중요합니다. 이런 문제에 대해 self-play가 적절한 학습 curriculum을 제공할 수 있습니다.

### 3.3.1. Autocurriculum

뛰어난 agent는 어떤 상대를 만나든 적절한 대응을 할 수 있는 agent일 것입니다. 때문에 agent를 학습시키는 과정에서 되도록 다양한 전략을 구사하는 상대를 만나봐야 하고 그와의 훈련을 통해 얻은 지식을 잊지 않아야 합니다. 그러나 연구자가 학습 curriculum을 직접 설계하는 것은 쉽지 않습니다. 언제 agent가 대응전략을 학습할 수 있을지, 또 언제 어떤 상대를 마주치는게 빠른 학습에 도움이 될지 알 수 없기 때문입니다. self-play는 **자신의 이전 버전들을 상대**로 학습을 하기 때문에 자연스럽게 적절한 난이도의 challenge가 알맞게 주어지고 이것을 **autocurriculum**이라고 부릅니다. [OpenAI의 Hide-and-Seek](https://arxiv.org/pdf/1909.07528.pdf)의 실험결과를 보면 상대방의 전략을 무력화 시키기 위한 새로운 전략이 등장하는 innovation이 반복적으로 일어나는 것을 확인할 수 있습니다. 이것이 가능한 이유는 현재 agent가 자신의 과거 버전을 이기기 위해 전략을 수정하는 순간 미래의 자신에게는 새로운 challenge를 부여하는 autocurriculum이 생성되기 때문입니다. autocurriculum은 finite한 zero sum game에서는 NE로 수렴하고 보다 open ended 환경에서는 지속적인 innovation을 촉진해 창의적인 전략을 수립하도록 이끕니다. 다양한 전략을 경험해본 agent는 학습환경에서 벗어나 새로운 agent를 만나더라도 robust할 가능성이 높아질 것입니다.

### 3.3.2. Opponent sampling

self-play는 나 자신과의 게임을 의미하지만 현재 상태의 나 자신을 의미하지는 않습니다. 나의 과거 모습들 중 $\text{unif}(\delta v, v)$ 에 따라 opponent sampling을 통해 상대방을 정해줍니다. 여기서 $v$는 사용가능한 최근 agent의 iteration number를 의미하고 $\delta \in [0,1]$는 sampling 범위를 정해주는 threshold입니다. 따라서 $\delta=1$인 경우엔 가장 최근의 상대를 고르는 것이 되고 $\delta=0$인 경우엔 기존 학습된 agent histroy 전체에서 uniform 샘플링하는 것이 됩니다. 가장 최근의 agent가 자신의 history중에선 가장 강력한 agent일테니 실력 향상에 도움이 될 것이라 생각할 수 있습니다. 하지만 [_Bansal et al._](https://arxiv.org/pdf/1710.03748.pdf)의 재미있는 실험 결과 중 하나는 $\delta=1$인 경우가 가장 안좋은 성능으로 이어졌다는 것입니다. 이는 훈련 초기 agent 사이에 imbalance가 생기면 다른 한쪽이 회복을 못하는 경우가 생기기 때문입니다. 최적의 $\delta$값은 env의 성격에 따라 달라집니다. Competitive MARL training을 고안할 때는 opponent sampling 범위에 대한 고찰이 성능향상에 도움이 될 수 있습니다. 작은 $\delta$값을 설정하는 것는 agent가 학습한 내용을 잊지않도록 주기적으로 상기시켜주는 역할을 하기도 합니다. $\delta$값이 너무 큰 경우에는 과거에 이미 학습한 전략의 대응방식을 떠올리지 못하고 생산적이지 않은 strategic loop에 빠질 수 있기 때문에 주의가 필요합니다.
