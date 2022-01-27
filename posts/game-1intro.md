---
title: 1.  강화학습을 통한 Snake 학습시키기
type: game
order: 0
cate: part1
---

### Preface

![forty](https://mas-tutorials.s3.ap-northeast-2.amazonaws.com/4_0.gif)


본 튜토리얼의 목적은 아주 고전적인 게임이면서 지금도 종종 접할 수 있는 게임인 snake 게임을 multi-player 로 확장하여 RL과 MARL의 관점에서 분석해보고 학습된 모델을 Snake-leaderboard에 업로드하는 방법에 대한 가이드라인을 제공하는 것입니다.

[▶모델 학습 및 업로드로 스킵하기](https://tutorials.kc-ml2.com/v3/2/2intro)

이 챕터에서는 기존에 다른 사람들이 자신들 만의 snake게임을 학습시키기 위해서 선택했던 전략과 접근법들에 대한 review와 함께 Marlenv를 이용해 실제로 돌린 실험의 결과들에 대한 분석을 주로 다루겠습니다. 기존의 접근법을 참고하여 재미난 아이디어들을 되돌아보면서 "Snake게임 인공지능 만들기" 라는 목표를 위해 가장 기본적으로 고민해볼 사항들은 어떤 것이 있는지 짚어보겠습니다. 
하지만 실제 이론적인 내용이나 강화학습 자체에 대한 이야기보다는 아이디어 위주의 이야기가 될 것이기 때문에 **강화학습에 대한 리뷰와 조금은 더 이론적인 이야기들, 그리고 Multi-agent Reinforcement Learning에 대해서 우선 탐구해보고 싶으신 분들은 아래 링크를 클릭해 주세요!**

[▶MARL에 대해서 배우고오기](https://tutorials.kc-ml2.com/v2/1/1intro)

그리고 이후 챕터에서는 실제로 내가 학습시킨 Agent와 다른 사람들이 학습시킨 agent들을 multi-snake 환경에서 경쟁해 볼 수 있는 **Snake Leaderboard**의 사용법에 대해 다루겠습니다. 

우선 Snake Game은 구글에서 검색하시면, 구글에서 직접 만든 [게임](https://www.google.com/search?sxsrf=ALeKk027Xv_mZG1rtfmS6t6NW5RSVPA9ag%3A1604573720040&ei=GNqjX4H2AcKImAX82Zgg&q=snake+game&oq=snake+game&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIECCMQJzIFCAAQywEyBwgAEBQQhwIyAggAMgIIADICCAAyBQgAEMsBMgUIABDLATIFCAAQywFQAFgAYI_2DWgAcAB4AIABYYgBYZIBATGYAQCqAQdnd3Mtd2l6wAEB&sclient=psy-ab&ved=0ahUKEwiB4uT0nuvsAhVCBKYKHfwsBgQQ4dUDCA0&uact=5)도 바로 플레이 해 볼 수 있습니다. 게임의 규칙은 아주 간단합니다. 플레이어가 조종할 수 있는 뱀은 grid형태로 구성되어있는 맵 위를 뱀 기준 {앞, 좌, 우}로 움질일 수 있으며 맵의 모서리나 자신의 몸에 머리가 닿으면 죽습니다. 또한 맵에 랜덤으로 생성되는 사과를 먹으면 한칸씩 길이가 길어지게 됩니다. 이렇게 계속해서 몸길이를 늘려나가면서 최종적으로 죽기전까지 먹은 사과의 갯수로 점수를 매기게 됩니다.