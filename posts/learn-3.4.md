---
title: 3.4 Randomizing environments
type: learn
order: 18
cate: CH3
---

## 3.4. Randomizing environments

앞서 언급한 Hide-and-seek으로도 많이 알려져있는 Baker et al. 의 Emergent Tool Use from Multi-Agent Autocurricula에서는 hider와 seeker가 팀을 이뤄 숨박꼭질을 하는 환경에서 agent들은 맵 내의 구조물을 활용하여 적절한 전략을 구사하고 시뮬레이션 환경의 버그를 찾아내 이용하는것을 관측했습니다. 이것이 가능했던 원인으로 본 논문에서는 autocurricula와 randomized env를 들었습니다. 맵 내 구조물의 갯수와 위치, 벽의 구성, agent들의 시작지점등 env내에 radomize하는 요소가 많을수록 agent들은 빠르게 전략을 습득했습니다.

---

### Application to Multi-agent Snake

이처럼 multi-agent 환경의 특성들을 고려하지 않은 채 single-agent algorithm을 바로 적용하여도 학습과정에서 상대와 환경에 어떤 변화를 주느냐에 따라서 agent가 가지게 되는 특성이 달라질 수 있습니다. Multi-agent snake 와 같은 게임을 마주했을때 강화학습에 이미 경험이 있는 분이라면 가장 쉽게 그리고 빠르게 적용해볼 수 있는 방법으로는 이미 잘 알려진 single-agent algorithm의 적용일 것입니다. 하지만 정말 여러 agent가 있는 상황에서는 opponent 설정을 고민할 수 밖에 없기때문에 우선 단일 agent인 상황에서 학습을 시켜본 후 여러 agent인 상황으로 옮여보는 방법 또한 생각해 볼 수 있습니다. 그리고 이때 reward의 형태를 바꾸거나 (e.g. [Reward Manipulation](https://tutorials.kc-ml2.com/posts/learn-3.2#321-reward-manipulation)) 하는 등의 행위로 multi-agent 상황으로 옮겨졌을때 나오는 효과를 관측하는 것 또한 Emergent behavior적인 접근으로 볼 수 있으며 single-agent를 통한 문제 접근방법의 첫 걸음이 될 수 있습니다.
여기서 조금만 더 나아간다면 상대 뱀들을 나와 같은 종류의 algorithm으로 동시다발적으로 학습시키거나 나와 동일한 네트워크를 복사해서 사용하는 방법또한 쉽게 생각해볼 수 있습니다.
이런 single-agent algorithm을 이용한 적용법을 [~MARLenv~](https://github.com/kc-ml2/MARLenv)를 통해 구현한 몇가지 예시를 [응용하기](https://tutorials.kc-ml2.com/posts/game-1.1)에서 찾아보실 수 있습니다.

지금까지는 multi-agent인 상황을 문제로서 정의하고 이를 익숙한 single-agent RL algorithm으로 접근할때 주의할 점들에 대해서 다뤘습니다. 하지만 multi-agent에 대한 tutorial 인 만큼 다음 챕터에서는 실제 multi-agent deep RL 문제를 해결하고자 했던 논문들 중 multi-snake 를 접근하는데 도움이 될 만한 논문 두가지를 소개하겠습니다.

### Reference

1. Tampuu et al. Multiagent Cooperation and Competition with Deep Reinforcement Learning. [https://arxiv.org/pdf/1511.08779.pdf](https://arxiv.org/pdf/1511.08779.pdf)
2. Bansal et al. Emergent Complexity via Multi-Agent Competition. [https://arxiv.org/pdf/1710.03748.pdf](https://arxiv.org/pdf/1710.03748.pdf)
3. Baker et al. Emergent Tool Use from Multi-Agent Autocurricula. [https://arxiv.org/pdf/1909.07528.pdf](https://arxiv.org/pdf/1909.07528.pdf)
4. Leibo et al. Autocurricula and the Emergence of Innovation from Social Interaction: A Manifesto for Multi-Agent Intelligence Research. [https://arxiv.org/pdf/1903.00742.pdf](https://arxiv.org/pdf/1903.00742.pdf)
5. Jaderberg et al. Human-level performance in 3D multiplayer games with population based reinforcement learning. [https://science.sciencemag.org/content/sci/364/6443/859.full.pdf](https://science.sciencemag.org/content/sci/364/6443/859.full.pdf)
