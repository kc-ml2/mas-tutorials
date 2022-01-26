---
title: 2. 학습된 Snake로 Leaderboard 참여하기
type: game
order: 3
---

### Preface

[배우기](https://tutorials.kc-ml2.com/v2/1/1intro)의 챕터 1~3은 MARL관련된 이야기를, 챕터 4에서는 snake게임의 소개와 함께 single/multi agent인 상황에서 기존의 single-agent algorithm을 학습시켰을때 일어나는 일을 설명했습니다. 

그리고 챕터 5에서는 이를 더 확장하여 multi-agent RL을 직접 다루는 algorithm으로 접근하는 방법에 관하여 간단하게 이전 논문들을 소개하는 시간을 가졌습니다. 이후 떠오르는 다양한 다양한 아이디어들을 실험해보기 위해 ML2의 [Marlenv](https://github.com/kc-ml2/marlenv) 를 받아서 self-play 등을 통해 학습을 해 보는것도 재미 있겠지만 더 큰 재미를 위해 Snake Leaderboard 라는것을 준비했습니다. 대부분의 게임이 혼자하는것보단 남들과 함께할때 더 즐거운 듯 내가 디자인하고 학습시킨 agent들이 남들과 multi-agent snake game에서 경쟁을 해본다면 더 재미있지 않을까 하는 생각에서 출발한 프로젝트 입니다. 

이번챕터에서는 이 Snake Leaderboard에 대한 소개와함께 참여하는 방법에 대해 소개하는 시간을 가져보도록 하겠습니다. 