---
title: 1. Introduction
type: learn
order: 6
cate: CH1
---

### Preface

이 튜토리얼은 **Multi-agent** 문제를 **Deep Reinforcement Learning (DRL)** 의 관점으로 바라보며 Snake Leaderboard를 사용함에 있어 multi-agent문제의 접근법을 더욱 확장시키고 싶은 분들을 위한 정보를 제공합니다. 특히나 강화학습의 측면에서의 multi-agent 문제를 다루기 위해서는 아주 많은 이론적 배경지식을 요구하지만 이 튜토리얼에서는 최대한 힘을 빼고 조금 더 개념적으로 접근하려합니다. 만약 튜토리얼 전체를 하나의 개념으로 요약한다면 free-for-all 한 상황에서의 Multi-agent Deep Reinforcement Learning (MDRL)으로 요약할 수 있을텐데 본론으로 들어가기에 앞서 이 MDRL을 한 단어씩 떼어서 살펴보는 것으로 시작하겠습니다. 

우선 MDRL은 크게 3가지의 개념으로 나눌 수 있습니다 → (Multi-agent) (Deep) (Reinforcement Learning). 나열된 순서대로 설명을 하면, 

1) **Multi-agent**는 경제학과 행동과학, 특히 **game theory**에서 오랫동안 다뤄진 multi-agent problem이고,

2) deep 은 요즘 매우 활발하게 연구되고 있는 분야인 **deep learning**이며, 마지막으로

3) **reinforcement learning**, 강화학습이 있습니다. 즉 많은 학자들이 오래동안 다루던 multi-agent 문제들을 deep neural network가 첨가된 강화학습의 기법들로 접근해보겠다 라는 이야기 정도로 해석하시면 될듯합니다. 

MDRL은 위에서 나누어 봤던 것처럼 상당히 다양한 분야에서 다양한 배경을 기반으로 한 학문들이 합쳐져 있습니다. 각각이 같은 선상에 있지도 않으며 세부적으로 보면 하나하나가 아주 광범위하게 쓰일 수 있으면서도 깊은 학문들입니다. 그런만큼 비슷하거나 같은 컨셉을 설명할 수 있는 용어들도 많이 있을테지만 본 튜토리얼은 궁극적으로 강화학습에서 시작해서 MDRL로 넘어가거나 혹은 강화학습적인 측면에서 바라보고자 하는 관점에 집중할 예정이기에 용어들과 예시들을 대체적으로 강화학습에서 친숙한 형태로 사용하겠습니다. 따라서 직접 이번 튜토리얼에서 강화학습의 내용들을 다루지는 않겠지만 기본 용어나 개념들을 한번 리뷰하시고 진행하시는 것을 추천드립니다. 최대한 내용을 풀어서 쓰는것을 목표로 하고 있어 이미 이론적으로 강화학습과 게임이론에 강하신 분들께는 다소 지루하실 수 있으니 이를 감안하여 읽어주시면 감사하겠습니다. 

**이 튜토리얼은 궁극적으로 다음의 내용들을 다루고 있습니다.**

1. **게임이론부터 multi-agent문제까지의 역사와 공통 개념**
2. **Single-agent RL 에서 multi-agent RL 까지의 연결고리**
3. **Multi-agent deep RL에서 다루는 기본 개념들과 문제정의**
4. **더 나아가 조금더 광범위한 상황에서 쓰일 수 있는 MADDPG와 COMA에 대한 review**