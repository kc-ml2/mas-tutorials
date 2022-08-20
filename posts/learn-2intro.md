---
title: 2. Problems in MARL
type: learn
order: 10
cate: CH2
---

## Preface

챕터 1 에서는 multi-agent 문제를 굉장히 게임이론적인 시각에서 바라보며 기본적인 내용들과 함께 임의의 게임 (환경) 을 어떻게 구분지을 수 있는지 이야기해 보았습니다. 이렇게 다양한 종류의 게임이 있는 이유는 단순히 agent와 environment로 구분되는 single-agent의 문제와는 달리 multi-agent 문제는 여러 agent들이 얻을 수 있는 정보, 공유할 수 있는 정보, action을 선택할 수 있는 타이밍, 얻은 reward에 대한 기여도등 agent들 사이의 상호작용이 굉장히 다양한 형태로 나타날 수 있기 때문입니다. 따라서 이번 챕터에서는 그런 다양성을 MARL스럽게 나누고 정의하는 방법과 실제 MARL에서 직면하는 문제들의 종류를 알아보도록 하겠습니다.
