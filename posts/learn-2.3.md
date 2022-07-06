---
title: 2.3 Types of MARL Problems
type: learn
order: 13
cate: CH2
---

## 2.3. Types of MARL problems

앞서 MARL에서 문제정의를 하기 위해 필요한 용어 및 개념을 정리해 보았는데 이번 섹션에서는 실질적으로 MARL에서 직면하고 있는 문제들의 형태에 대해서 이야기해 보도록 하겠습니다. DRL과는 다르게 MARL의 가장 큰 특징은 다수의 agent들이 서로 interaction을 한다는 것이고 대부분의 문제들은 여기서 부터 발생합니다. Agent 간의 interaction 이라는 특성을 고려하여 _Hernamndez-Leal (2018)_ 에서는 multi-agent deep reinforcement learning 관련 연구들을 크게 다음의 4가지의 성격으로 나누어 분류하였습니다.

- **Analysis of emergent behaviors**

  해당 연구에서는 새로운 성격의 알고리즘이나 모델들을 개발하는것을 목표로 하는 대신 기존에 있었던 알고리즘들 중 single-agent 알고리즘들이 multi-agent인 상황에서 어떤 행동을 보일지 분석하는데에 초점을 두고 있습니다.

- **Learning communication**

  해당 연구에서는 여러 agent들 사이에 정보들이 오고 갈 수 있다는 가정하에 각 agent들이 정보를 전달하는 방식 자체를 학습하는데에 초점을 맞추고 있습니다. 다른 분야들에 비해 비교적 짧은 역사를 가지고 있지만 근래에 많이 확장되고 있는 연구분야입니다.

- **Learning cooperation**

  위의 의사전달(정보전달)에 비해 더 긴 연구역사를 가지고 있는 분야입니다. Agent사이에 협업을 더욱 권장하고 competition/cooperation이 섞인 mixed상황에서도 협업을 잘 이용하는것을 연구의 목표로 잡고 있습니다.

- **Agents modeling agents**

  여러 agent들이 상호작용을 하고 있는 상황에서 다른 agent들의 행동을 예측할 수 있다면 행동결정을 하는데 큰 이득을 취할 수 있습니다. 해당 연구분야에서는 이것을 다른 agent들의 모델을 직접 만들어가면서 접근하는것을 큰 줄기로 삼고 있습니다.

앞서 MARL에서 문제를 잘 정의해 보았지만 이렇게 위에 나열한 4가지의 분야 말고도 MAL에는 굉장히 다양한 시각에서 연구가 진행되고 있고 MDRL이 되어 딥러닝까지 추가가 되면은 그 스펙트럼은 더욱더 큰 범위로 늘어나게 됩니다. 따라서 MDRL의 소개가 목적인 본 튜토리얼에서는 위의 모든 분야를 자세하게 들여다 보기 보단 4가지중 이후 multi-agent snake game처럼 free-for-all인 상황에서 단순하게 single-agent알고리즘을 multi-agent인 상황으로 옮겼을 때를 탐구하는 "Analysis of Emergent Behavior"에 조금 더 집중하여 다음 챕터에서 다루도록 하겠습니다.

### Reference

1. Weber et al. Imagination-Augmented Agents for Deep Reinforcement Learning. Neurips, 2017. [https://arxiv.org/pdf/1707.06203.pdf](https://arxiv.org/pdf/1707.06203.pdf)
2. Hansen et al. Dynamic Programming for Partially Observable Stochastic Games. AAAI, 2004. [https://www.aaai.org/Papers/Workshops/2004/WS-04-08/WS04-08-005.pdf](https://www.aaai.org/Papers/Workshops/2004/WS-04-08/WS04-08-005.pdf)
3. Silver. Lecture 2 on Reinforcement Learning. 2015. [https://www.davidsilver.uk/wp-content/uploads/2020/03/MDP.pdf](https://www.davidsilver.uk/wp-content/uploads/2020/03/MDP.pdf)
4. OpenAI Gym. [https://gym.openai.com/envs/#classic_control](https://gym.openai.com/envs/#classic_control)
5. A survey and Critique of Multiagent Deep Reinforcement Learning. [https://arxiv.org/pdf/1810.05587.pdf](https://arxiv.org/pdf/1810.05587.pdf)
6. OpenAI Gym. [https://gym.openai.com/](https://gym.openai.com/)
