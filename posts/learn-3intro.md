---
title: 3. Emergent Behavior
type: learn
order: 14
cate: CH3
---

### Preface

앞서 챕터 2에서는 MARL이라는 틀 안에서 문제를 정의하는 방법과 MARL이라는 분야에서 해결하고자 하는 문제들을 소개했습니다. 이번챕터에서는 그중 Analysis of emergent behaviors에 집중하여 일반적인 single agent training scheme을 multi-agent snake게임에 적용시킬때 MARL관점에서 고민하고 바꿔볼 수 있는 사항들을 기존에 발표된 다양한 논문들을 통해 소개하겠습니다.

우선 analysis of emergent behaviors는 multi-agent 상황에서 single-agent 학습을 적용했을때 관측할 수 있는 현상에 대한 경험론적 문제 접근법입니다. 하지만 조금 다르게 생각해보면 single-agent DRL에서 이루어 놓은 것들을 multi-agent scheme으로 가지고 오기 위한 분야로 생각할 수 있습니다. 다시말해 multi-agent snake와 같이 free-for-all 이기 때문에 자연스럽게 single-agent algorithm을 바로 적용해 볼 수 있는 상황에서 알고리즘의 어떤 부분에 변화를 주냐에 따라서 multi-agent인 상황에 놓이게 되었을때 기대할 수 있는 행동이 무엇일지 예상해 보는 분야이기도 합니다. 그래서 multi-agent algorithm을 살펴보기 전 single-agent algorithm을 이용하여 multi-snake 문제는 접근하는 방법의 한가지로 emergent behaviors를 다뤘던 여러 논문을 살펴보면서 실제로 single-sagent algorithm을 학습시켜서 도전할때 집중해야 할 부분들을 짚어보도록 하겠습니다.