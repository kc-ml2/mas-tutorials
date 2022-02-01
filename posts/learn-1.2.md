---
title: 1.2 Multi-agent and Game Theory
type: learn
order: 8
cate: CH1
---

## 1.2. Multi-agent and Game Theory

![fifty](https://mas-tutorials.s3.ap-northeast-2.amazonaws.com/GT.png)
###### Figure 3. Concept drawing of Game Theory (Rock-Paper-Scissors)


 **Game Theory**    Multi-agent 문제에 대해 이야기 하기 위해서는 우선 Game Theory (게임이론)에서 다루는 개념들에 익숙해지는것이 좋습니다. 하지만 기본적인 개념들의 범위만 해도 매우 광범위하기 때문에 앞으로 이어나갈 이야기들과 밀접한 관계를 가지고 있는 주제들과 MDRL관련 논문을 읽을때 자주 등장하는 용어들 위주로 소개하겠습니다.

경제학은 선택에 관한 학문입니다. 이기적인 개인이 합리적인 사고를 바탕으로 자신의 효용을 극대화 하는 선택을 한다고 가정했을 때, 이 선택이 어떤 사고과정을 거쳐 이루어지는 지 탐구하는 것이 경제학의 가장 근본적인 모습이라고 할 수 있습니다. 이런 주제는 흔히 효용이론에서 **[Utility](https://en.wikipedia.org/wiki/Utility) Maximization** 문제라고 불립니다. 우리들은 대체로 확률적인 불확실성에 기반한 선택을 강제받는 상황이 많습니다. 살면서 우리가 어떤 선택을 내릴 때 그 선택에 따라 벌어질 결과를 정확히 알고있는 상황은 많지 않습니다. 그렇기 때문에 우리는 어떤 선택에 따라 주어질 효용, Utility의 기대값을 고려하여 선택을 내리게 되고 이는 곧 Expected Utility Maximization 문제로 이어집니다. 그렇다면 게임이론과 효용이론을 구분짓는 요소는 무엇일까요? 기대효용이론이 주로 미시적인 관점에서 개인 한명의 선택을 들여다보는 학문이라고 생각한다면 게임이론은 여러명의 개인이 각자 어떤 선택을 했을 때, 그 선택이 다른 사람들의 효용에 영향을 미치는 상황을 고려합니다. 다시말해, 게임이론은 자신의 효용이 다른 사람의 선택에 의해 달라질 수 있다는 사실을 고려하여 상호작용하는 상황을 탐구합니다.

게임이론의 정의를 Myerson (1991)은 다음과 같이 서술하였습니다. 

> "Game theory can be defined as the study of mathematical models of conflict and cooperation between intelligent rational decision-makers."

직역하면 "게임이론이란 이성적이고 합리적으로 행동하는 존재들 사이의 분쟁과 협력을 수학적으로 모델링한 것" 정도로 해석할 수 있습니다. 조금 더 일반적인 표현으로 바꿔말한다면, "어떤 목적을 가진 참가자들이 서로를 의식하며 행동하는 상호작용을 수학적으로 분석하는 학문"으로 정리할 수 있습니다. 그럼 다시 원래의 문장으로 돌아가서 각 표현들에 대해 되짚어 보겠습니다.

우선 **decision-makers**라고 하면 "게임"안에서 행동을 취할 수 있는 존재들을 의미합니다. 다른 context에서 흔히 쓰이는 표현으로 "Player", "Person", "Actor" 또는 "Agent" 라고도 합니다. (튜토리얼에서는 주로 플레이어 혹은 agent라 표현하겠습니다.) Game theorist는 주로 이 플레이어들이 **intelligent하며 rational하다**는 것을 가정합니다. 사전적 의미에서 intelligence와 rationallity는 같은 말 처럼 보이지만 게임이론의 context에서는 전혀 다른 의미를 담고있습니다. 이성을 뜻하는 intelligence는 우리가 상황에 대해 알고있는 모든 것을 플레이어도 알고있고 우리가 게임에 대해 만들 수 있는 모든 추론을 플레이어도 할 수 있다는 것을 의미합니다. 합리성을 의미하는 rationality를 게임이론에서는 "현재 상황에서 자신의 목적에 가장 유리한 행동을 취하는 것" 이라고 해석합니다. 일반적으로 게임이론에서 플레이어들의 목적은 자신의 효용을 극대화하는 것이기 때문에 대체로 "각 플레이어가 자신의 기대효용을 극대화 한다"는 것으로 이해합니다.  여기서 "우리"는 게임이론을 연구하는 자, 즉 game theorist를 의미합니다. 이게 무슨 소리인가 의아할 수 있지만 생각해보면 직관은 간단합니다. 게임에 참여하는 플레이어들이 게임을 탐구하는 자만큼 이성적이며, 직접적 이해당사자인 플레이어들이 그 상황을 "우리"만큼 치열하게 분석할 것이라는 전제를 담고있는 것입니다. **Conflict and cooperation**은 플레이어들 간의 interaction을 의미합니다. 여기서 interaction, 상호작용이란 게임의 흐름을 모델로 설명하기 위해 필요한 전제조건으로 플레이어들의 행동이 서로에게 영향을 줄 수 있는 상황을 뜻하고 흔히 논의되는 strategic interaction은 각 플레이어들이 자신들의 행동결정이 서로에게 그리고 환경에게 어떤한 영향을 준다는 것을 충분히 인지한 상태에서 전략적인 상호작용이 발생함을 이야기합니다. 게임이론의 논리적 근간은 Bayesian Decision Theory이기 때문에 n-players를 고려한 Decision Theory의 확장으로도 이해할 수 있습니다.

여러 객체들간의 상호작용을 수학적으로 설명하고자하는 게임이론 개념의 시초는 1928년 발표된 John von Neumann (폰 노이만)의 *On the Theory of Games of Strategy, 1928* 입니다. 이후 Oskar Morgenstern (모겐스턴)과 함께 출간한 *Theory of Games and Economic Behavior, 1944* 에서는 zero-sum game (제로섬 게임)의 균형이 항상 존재한다는 것을 보였고 마지막으로 1950년과 1951년 발표된 John Forbes Nash Jr. (존 내쉬)의 *Equilibrium points in n-person games (1950)* 과 *Non-cooperative Games (1951)* 에서 제로섬이 아닌 더 광범위한 게임에서도 Nash Equilibrium (내쉬균형)이 존재한다는 것을 보이며 그 틀이 완성되었습니다. 

![fifty](https://mas-tutorials.s3.ap-northeast-2.amazonaws.com/NE.png)
###### Figure 4. Nash equilibrium in Rock-Paper-Scissors



**Nash Equilibrium (NE)**    위와같이 게임이론의 발달과정에서 "Equilibrium (균형)"이라는 개념이 지속적으로 등장합니다. 이중 가장 대표적인 내쉬균형의 정의를 Holt (2004)는 다음과 같이 이야기하였습니다:

> "The idea of the Nash equilibrium is that a set of strategies, one for each player, would be stable if nobody has a unilateral incentive to deviate from their own strategy"

간단하게 해석하면 게임에 참여중인 모든 플레이어들이 타 플레이어들의 현재 전략을 고려 하였을때 모든 플레이어가 현재 전략에서 이탈할 유인이 없는 상황을 이야기합니다. 이것을 존 내쉬는 1950년 자신의 아티클을 통해 다음과 같이 정의하였습니다. 

> "Any n-tuple of strategies, one for each player, may be regarded as a point in the product space obtained by multiplying the n strategy spaces of the players. One such n-tuple counters another if the strategy of each player in the countering n-tuple yields the highest obtainable expectation for its player against the n – 1 strategies of the other players in the countered n-tuple. A self-countering n-tuple is called an equilibrium point."

위의 설명은 상당히 수학적인 표현을 많이 담고있는데 여기서 익숙해지면 유용한 것들이 많습니다. 우선 strategy(전략)의 표현방법입니다. 존 내쉬의 글에서와 같이 일반적으로 그리고 MARL의 context 에서도 [tuple](https://en.wikipedia.org/wiki/Tuple#:~:text=In%20mathematics%2C%20a%20tuple%20is,is%20a%20non%2Dnegative%20integer.) 형태의 표현을 자주 사용합니다. 우선 총 $n$명으로 이루어진 플레이어들의 집합을 set $\mathcal{N}$이라 하겠습니다, $$\mathcal{N}=\{1, 2, ..., n\}$$. 총 $n$ 명의 플레이어가 존재하고 어느 한 플레이어를 $i$로 표현할때, $i \in \mathcal{N}$, 해당 플레이어의 strategy를  $$\sigma_i$$라고 표기하겠습니다. 그렇다면 존 내쉬가 언급한 "n-tuple(n개의 요소를 가진 튜플) of strategies"는 $$\boldsymbol{\sigma} = (\sigma_1, \sigma_2, ..., \sigma_n)$$로 표기할 수 있습니다. 이를 한번 더 간단히 하여 플레이어 $i$ 의 strategy $$\sigma_i$$를 제외한 나머지 n-1명 플레이어들의 strategies를 하나로 묶어 $\sigma_{-i}$로 표시할 수 있습니다. 이렇게 묶음으로 표시되는 전략들의 payoff의 기댓값을 $R(\boldsymbol\sigma)$이라는 함수로 표현하고 앞서 말한 내쉬균형을 만족하는 전략을 $\sigma^*$로 표시하면 내쉬균형은 다음과 같이 표기할 수 있습니다. 

$$
\begin{aligned}
\forall i, \: R_i(\sigma^*_i, \sigma^*_{-i}) \ge R_i(\sigma'_i, \sigma^*_{-i}) \: \forall \sigma'
\end{aligned}
$$

여기서 가장 중요한점은 부등호 양변의 유일한 차이점인 $$\sigma_i^*$$과 $$\sigma_i'$$ 입니다. 즉 나 외의 모든 플레이어들이 어떤 전략$$\sigma_{-i}^*$$ 에 따라 행동할 때, 내가 고를 수 있는 전략 중 기대효용(Expected payoff)가 가장 큰 최선의 선택이 $$\sigma_i^*$$라는 것을 의미합니다. 이론적인 측면에서 Nash Equilibrium은 기계학습이 일반적으로 도달하려하는 이상적인 상태(Optimal state), 즉 "나"를 더이상 좋게 만들 수 없는 상태를 의미하지는 않습니다. NE이 unique한 개념이 아니기도 하며 NE가 고려하는 것은 전략적 상황에서 최선의 선택([Best Response](https://en.wikipedia.org/wiki/Best_response#:~:text=In%20game%20theory%2C%20the%20best,29%3B%20Gibbons%201992%2C%20pp.))들이 모여 균형을 찾은 것일 뿐 "나의 이상적인 상태"를 직접적으로 의미하진 않기 때문입니다. 하지만 NE가 unique한 경우에는 모든 플레이어들의 전략을 고려했을 때 취할 수 있는 최선의 전략을 의미하기 때문에 MARL의 목표와 상통하게 됩니다.

실제 MARL환경에서는 균형점을 찾기 위한 충분한 정보가 모두 하나의 agent에게 주어지지 않는 상황이 흔하게 발생합니다. 하지만 NE를 통해 multi-agent 확경에서 학습을 진행했을때 도달할 수 있는 behavior나 실제 학습된 결과를 분석함에 있어 큰 도움이 될 수 있습니다. 또한, 균형이라는 것을 정의하기 위해 multi-agent 문제를 수학적으로 정의하는것 그리고 전략의 좋고 나쁨을 정의했다는 점에서 앞으로 multi-agent 문제의 해결책을 찾을때 필요한 여러 기본 틀을 제공한다는 점에서 상당히 의미있는 개념입니다. 