---
title: 4. More MDRL Algorithm
type: learn
order: 19
cate: CH4
---

## Preface

이전 챕터에서는 single-agent algorithm을 multi-agent환경에 적용할 경우, 변화를 줄 수 있는 다양한 사항들이 어떤 결과를 가지고 오게 되는지 다뤘습니다. 하지만 진정한 multi-agent algorithm이라면 multi-agent인 상황에서 발생할 수 있는 문제들을 직접적으로 해결하는 algorithm이어야 합니다. Multi-snake 와 같이 free-for-all인 상황이고 한 agent가 action을 취할 수 있는 actor가 하나 뿐이라면 credit assignment 나 communication과 같은 문제는 존재하지 않습니다. 오히려 이런 상황에서의 가장 큰 문제는 상대방에 대한 정보의 부재입니다. 이는 챕터 2에서 다룬것과 같이 POMDP 문제를 만들게 될 수도 있으며 때로는 상대방에 대한 modeling을 요구할 수도 있습니다.

이번챕터에서는 단순히 single-agent scheme을 넘어서 알고리즘 자체에 multi-agent스러운 특성을 추가하기 위해 도움이 될만한 두가지 논문을 소개하고 있습니다. 우선 소개할 논문으로는 single-agent RL에서 state-action value function의 조건을 joint-action으로 확장하여 학습시 더욱 deterministic한 Q function을 학습하는 MADDPG가 있습니다. 하지만 MADDPG는 snake에서와 같이 discrete한 action space를 다룰 수 없다는 단점이 있기에 이를 보완할 수 있는 해결책을 간접적으로 제시하는 COMA를 함께 리뷰해 보겠습니다.
