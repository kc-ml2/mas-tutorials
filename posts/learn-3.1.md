---
title: 3.1  Complexity via Competition
type: learn
order: 15
---

## 3.1. Complexity via Competition

고도의 agent를 학습시키기 위해서는 그만큼 복잡한 환경이 필요합니다. Multi-agent game의 경우 자신 이외의 플레이어가 존재하는 것 만으로 환경의 복잡도를 올리는 것이 가능합니다. 게임에 상대방이 있다는 것은 게임을 어렵게 만드는 중요한 요소 중 하나입니다. 게임의 룰이 간단하거나 action space가 작더라도 어떤 상대방과 대결하느냐에 따라 매 게임마다 선택해야 하는 전술이 달라지기 때문입니다. 바둑과 같은 게임을 생각해보면, 격자 판 위 적절한 위치에 돌을 놓는 간단한 환경에서도 전략을 알 수 없는 상대가 존재함으로써 게임의 복잡도가 무궁무진하게 올라가는 것을 떠올릴 수 있습니다. [*Bansal et al.* 의 *Emergent Complexity via Multi-Agent Competition*](https://arxiv.org/pdf/1710.03748.pdf)에서는 간단한 게임 세팅에서도 opponent를 설정함에 따라 환경의 복잡도가 높아지고 이에 따라 agent들이 고도의 전략을 학습하는 것을 보여주었습니다. 이 논문은 2018년 ICLR에 발표된 논문으로 Mujoco를 기반의 다양한 multi-agent continuous control task들에서 PPO의 학습 성향을 관찰하는 것을 주된 내용으로 하고 있습니다. 4가지 competitive 환경에서 agent들은 Run to Goal, You Shall Not Pass등 env에 따라 다른 task를 학습합니다. 각 게임은 목표선에 먼저 도달하는것, 상대방을 막는것, 링 밖으로 상대방을 밀어내는 것, 그리고 축구의 페널티 킥과 같이 간단한 룰의 게임 형태를 띄고있습니다. 실험이 진행된 환경은 모두 3차원 평면에 게임을 위한 한두개의 구조물, 또는 영역이 표시되었을 뿐 게임 자체는 매우 간단합니다.