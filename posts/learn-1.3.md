---
title: 1.3 Known Environments in MARL
type: learn
order: 9
cate: CH1
---

## 1.3. Known Environments in MARL

이전 섹션에서는 게임이론에 대한 얕은 소개와 함께 어떻게 MARL로 이어지는지에 대해 간단히 이야기해보았습니다. 하지만 MARL 문제를 접근하기 위해 게임이론에서 빌려와야하는 개념들 중에는 실제 우리가 문제를 풀고있는 환경, 즉 게임 자체에 대한 분류와 묘사가 있습니다. 이는 존 내쉬가 제로섬 게임에서 균형점을 찾는 것을 포괄적인 게임에서도 찾을 수 있다는 것을 보임으로 노벨상까지 타게 된 것처럼 실제 문제들을 풀기 위해서는 그 상황을 정확하게 묘사할 수 있는 것이 좋은 솔루션을 찾는데 매우 중요하기 때문입니다. 따라서 이 섹션에서는 게임이론에서 정의하는 여러 "게임"들의 분류와 함께 대표적으로 알려져있는 MARL 환경에 대해 다뤄보도록 하겠습니다. 

Ann Nowé (2012)는 게임이론에서 다루는 게임에 대해 다음과 같이 정의하였습니다. 

> "A game is a mathematical object, which describes the consequences
of interactions between player strategies in terms of individual payoffs."

다시말해 게임은 앞서 이야기한 게임이론의 정의와같이 agent들 사이의 전략적 상호작용의 결과물을 각각의 "payoff"를 통해 수학적으로 모델링한것 이라고 보시면 됩니다. 위의 내쉬균형을 설명하는 식에서 사용된 $R(\sigma)$함수가 여기에 해당되며 utility 또는 reward와 비슷한 개념으로 보시면 됩니다. 

게임이라는 것이 payoff에 의거한 수학적모델 이라는 말 처럼 게임이론에서의 다양한 구분은 대체적으로 payoff를 중심으로 나누어지게 됩니다. 

게임의 종류를 크게 나누는 대표적인 방법들로 다음과 같은 분류들이 있습니다. 

---

**게임의 종류**

- Simultaneous / Sequential
- Cooperative / Non-cooperative
- Symmetric / Asymmetric
- Zero-sum / Non-zero-sum
- Perfect information / Imperfect information
- Combinatorial games, infinitely long games, discrete and continuous games, differential games, ... etc.

---

### Simultaneous / Sequential

이 분류는 게임의 진행 방식에 대한 분류입니다. 모든 agent가 동시에 자신의 action을 결정하고 움직이거나 각각 따로 결정하되 서로의 결정을 모른채 동시에 action을 적용하게 되는 경우를 동시진행, simultaneous라고 합니다. 반대로 각각 순차적으로 action을 결정하고 그것을 현재 상황에 적용을 하게 되는 경우를 순차적진행, sequential 이라 부릅니다. 흔히 이 두가지 방식에 따라 게임을 나타내는 방식도 달라지는데 simultaneous의 경우 흔히 normal

<center><figure>
	<img src="/images/NG.png" width="300">
	<figcaption>Figure 5. Normal form game의 예시. Image source: <a href="https://en.wikipedia.org/wiki/Extensive-form_game">https://en.wikipedia.org/wiki/Extensive-form_game</a></figcaption>
</figure></center>

<center><figure>
	<img src="/images/EG.png" width="300">
	<figcaption>Figure 6. Extensive game의 예시. Image source: <a href="https://en.wikipedia.org/wiki/Extensive-form_game">https://en.wikipedia.org/wiki/Extensive-form_game</a></figcaption>
</figure></center>


### Cooperative / Noncooperative

이 구분은 플레이어들 사이에 협력과 비협력 관계성에 대한 구분입니다. 다르게 말하면 현재 게임에 참여중인 플레이어들 사이에 외부적인 협력적 관계가 형성이 될 수 있는지 아니면 모든 결정이 각 플레이어의 독단으로 이루어지는지에 대한 구분입니다. 추가적으로 협력/비협력에 따라 보상이 플레이어들 전체에 대해 하나만 주어지거나 각각에게 따로 주어지는 상황이 생길 수 있습니다.

### Symmetric / Asymmetric

게임이 대칭이라는 표현은 플레이어가 얻을 수 있는 payoff의 값이 특정 agent의 identity와는 상관이 없이 어떤 상황에서 어떤 전략을 택하였는가에만 의존하는 경우를 말합니다. 모든 agent의 action space가 동일하며 joint action pair에 따른 동일한 payoff function을 공유합니다.
예를들어 Fig. 5 에서 볼 수 있는 normal form game의 경우 두명의 플레이어가 모두 down이라는 action을 선택 할 경우 받는 reward가 각각 (3,1)으로 서로 다른 reward를 받기때문에 assymetric한 게임이라고 볼 수 있습니다. 

FYI: Symmetric Game은 Symmetric equilibrium과의 혼동에 주의해야합니다. Symmetric equilibrium은 게임의 플레이어들이 같은 strategy를 선택하는 것이 equilibrium이 되는 경우를 말합니다. Finite symmetric game은 symmetric equilibrium을 갖고있다는 성질이 있지만 이 equilibrium이 유일한 균형이란 보장은 없습니다.

### Zero-sum / Non-zero-sum

이 분류는 직접적으로 어떤 전략이 정해졌을때 모든 플레이어들이 얻게되는 payoff 들의 총 합이 0이 되느냐에 대한 구분입니다. 

### Perfect information / Imperfect information

정보의 완벽성에 대하여 이야기 할때 현재의 상태와 현상태까지 오게된 경로, 그리고 시작점을 포함한 정보를 모두 알 수 있는 게임을 perfect information game이라고 합니다. 즉 현재의 게임상태를 모두 파악할 수 있는지에 대한 여부라고 생각하시면 됩니다. 반대는 그렇지 못한 상황을 이야기 하지요. 이와 아주 헷갈리기 쉬운 개념으로는 complete information이 있는데 이 경우 common knowledge라고도 하는 다른 플레이어들의 전략이나 utility function, 그리고 게임에 대한 규칙들을 알고있는 경우를 이야기합니다. 간단하게 말해 게임의 모든상황을 관찰하고 있지만 상대가 maximize하고자 하는 utility function을 파악하기 어렵다면 "perfect but incomplete", 상대가 무엇을 목표로 어떤 전략을 가질지 알겠지만 현재 게임의 상태를 정확하게 파악하지 못할경우를 "complete but imperfect"라고 생각할 수 있습니다. 

---

그럼 실제 흔하게 알려져있는 MARL 환경들이 위에서 이야기한 분류를 통해서 어떤 게임종류에 해당하는지 알아보겠습니다. 우선 가장 classical 하면서도 유명한 MARL 게임인 **체스**로 시작해보자면, 체스는 두명의 플레이어가 서로 한번씩 보드위에 자신의 말을 움직이기때문에 sequential 합니다. 그리고 둘이 끝까지 이기기위한 경쟁을 하기때문에 non-cooperative 게임에 속합니다. 만약 승패 여부에따라 payoff 를 매긴다면 zero-sum 이면서 symmetric한 게임으로 볼 수 있습니다. 마지막으로 시작부터 끝날때까지 서로 같은 체스판을 보기 때문에 **perfect information 게임**입니다. 최근에 강화학습을 활용한 알파고를 통해 더 널리알려진 **바둑**도 여기에 해당됩니다.

최근 또 강화학습에서 주목을 받았던 **스타크래프트 (StarCraftII)** 나 **도타 (Dota2)**의 경우 플레이어간에 볼 수 있는 게임의 상태가 한정적이라는 것과 동시에 지속적으로 행동을 하면서 진행하기때문에 simultaneous 하고 **imperfect information**인 게임으로 볼 수 있습니다. 사실 simultaneous한 진행을 하는 순간 플레이어는 자신의 행동을 선택할때 상대가 어떤 행동을 할지 모르는 상황에서 결정을 하기때문에 이미 imperfect information 게임이 됩니다.

![https://lh3.googleusercontent.com/ckm-3GlBQJ4zbNzfiW97yPqj5PVC0qIbRg42FL35EbDkhWoCNxyNZMMJN-f6VZmLMRbyBk2PArLQ-jDxlHbsE3_YaDUmcxUvMf8M=w2048-rw-v1](https://lh3.googleusercontent.com/ckm-3GlBQJ4zbNzfiW97yPqj5PVC0qIbRg42FL35EbDkhWoCNxyNZMMJN-f6VZmLMRbyBk2PArLQ-jDxlHbsE3_YaDUmcxUvMf8M=w2048-rw-v1)

Image from Deepmind blog:[https://deepmind.com/blog/article/alphastar-mastering-real-time-strategy-game-starcraft-ii](https://deepmind.com/blog/article/alphastar-mastering-real-time-strategy-game-starcraft-ii)

![https://openai.com/content/images/2019/04/Dota-Matrix.png](https://openai.com/content/images/2019/04/Dota-Matrix.png)

Image from OpenAI blog: [https://openai.com/content/images/2019/04/Dota-Matrix.png](https://openai.com/content/images/2019/04/Dota-Matrix.png)

아마 MARL에 관심이 있는 분이라면 스타크래프트를 하는 AlphaStar나 OpenAI Five에 대해 찾아보셨을거라 생각합니다. 그리고 해당 프로젝트들을 자세하게 들여다보면 딥러닝과 엔지니어링의 집합체라는 것을 알수있습니다. 그렇기때문에 MARL자체에 대해 탐구하고 싶은 개인이라면 더더욱 다루기 어려운 환경입니다. 그래서 MARL의 연구를 위해, 그리고 MARL을 가지고 다양한 것을 해보고 싶은 사람들을 위해 최근에 customizing이 가능한 MARL환경들이 몇가지 발표되었습니다. MARL의 탐구라는 목적을 가지고 논문과 함께 발표된 두가지를 소개하자면 MA particle Env와 Emergent Complexity via Multi-agent Competition논문의 "Hide-and-seek"가 있습니다. 하지만 Hide-and-seek 또한 유료 라이센스를 필요로 하는 Mujoco를 기반으로 만들어져있고 상당히 높은 complexity를 가지고 있기때문에 일반적인 computational resource를 가지고 다양한 실험을 하기에는 무리가 있습니다. 그래서 toy-task로 간단하게 Proof of concept을 해볼 수 있는 가벼운 MARL 학습 환경을 만들어보고자 하는 목적으로 아주 classical한 게임중 하나인 Snake게임을 접목시켜보게 되었습니다.

### Reference

1. Myerson, Roger B. (1991). Game Theory: Analysis of Conflict, Harvard University Press, p. 1. Chapter-preview links, pp. vii–xi.
2. Holt, Charles A. and Roth, Alvin E. (2004). The Nash equilibrium: A perspective, PNAS March 23, 2004 101 (12) 3999-4002; [https://doi.org/10.1073/pnas.0308738101](https://doi.org/10.1073/pnas.0308738101). [https://www.pnas.org/content/101/12/3999](https://www.pnas.org/content/101/12/3999)
3. Nowé, A., Vrancx, P., and Hauwere, Y. Reinforcement Learning, ALO 12, pp. 441–470. [https://perso.liris.cnrs.fr/laetitia.matignon/index/14. Game_Theory_and_Multi-agent_Reinforcemen.pdf](https://perso.liris.cnrs.fr/laetitia.matignon/index/14.%20Game_Theory_and_Multi-agent_Reinforcemen.pdf)
4. Sutton, R. S., & Barto, A. G. (2018). Reinforcement learning: An introduction. MIT press, pp. 3-4.
5. Zhang, K., Yang, Z., & Başar, T. (2019). Multi-agent reinforcement learning: A selective overview of theories and algorithms. arXiv preprint arXiv:1911.10635. pp. 4-6.
6. Vinyals et al. Grandmaster Level in Starcraft II using Multi-Agent Reinforcement Learning. Nature. 2019. 
7. OpenAI. OpenAI Five. 2018; [https://blog.openai.com/openai-five/](https://blog.openai.com/openai-five/)
8. Bansal et al. Emergent Complexity through Multi-agent Competition. ICLR, 2018.