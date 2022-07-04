---
title: 1.2 Single-Agent Algorithm in Multi-Snake
type: game
order: 2
cate: part1
---

## 1.2. Single-Agent Algorithm in Multi-Snake

우선 이미 학습이 된 다른 agent나 human player의 개입 또는 expert data가 주어지지 않은 상황에서 학습을 시작해야하는 상황을 고려해 보겠습니다. 단순하게 생각을 해 보았을때 가장 쉽게 떠올릴 수 있는 방법은 크게 3가지가 있습니다.

1. Single-agent 환경에서 학습된 agent를 multi-agent환경으로 옮기기.
2. 동일한 알고리즘이지만 독립적으로 학습되는 agent들의 동시다발적 학습.
3. 동일한 알고리즘, 동일한 모델을 가진 하나의 agent의 복사본을 통한 학습.

![forty](https://mas-tutorials.s3.ap-northeast-2.amazonaws.com/4_6.gif)

###### Figure 6. Single-agent로 학습된 model을 불러온 경우

![forty](https://mas-tutorials.s3.ap-northeast-2.amazonaws.com/4_7.gif)

###### Figure 7. Multi-agent 환경에서 독립적인 모델로 학습된 agent들

![forty](https://mas-tutorials.s3.ap-northeast-2.amazonaws.com/4_8.gif)

###### Figure 8. Multi-agent 환경에서 공유되는 모델로 학습된 agent들

위의 그림을 보면 Single-agent 로 학습된 agent들을 multi-agent환경으로 옮겼을 경우 서로 충돌이라는 개념을 사전에 학습한 적이 없기 때문에 같은 fruit을 향해 가거나 할때 거리낌없이 충돌하여 뱀들이 죽는것을 쉽게 볼 수 있습니다. 하지만 최후에 남은 뱀은 그래도 나름 괜찮은 성능을 보이는 것 또한 알 수 있습니다.

Multi-agent 환경에서 각각의 뱀들이 독립적으로 학습이 된 두번째 경우를 보면 뱀들의 경험이 하나의 특정 agent에게 집중되어 있기 때문에 학습에서 발생하는 bias등으로 인해 앞서 본 single-agent에서 넘어온 경우보다 서로의 충돌은 조금 피하지만 아직은 조금 모자란 결과를 보여줍니다.

마지막으로 하나의 agent로 모든 뱀들의 경험을 모아서 학습을 시키는 경우 훨씬더 데이터 양이 많을 뿐만 아니라 하나의 agent로 부터 발생할 수 있는 bias의 영향또한 약해져서 이전보다 조금 더 향상된 성능을 확인할 수 있습니다.

이렇듯 single-agent learning algorithm을 이용하더라도 multi-agent setting에서 이를 어떻게 적용하느냐에 따라 상당히 다른 결과를 얻을 수 있다는 점을 이번 섹션을 통해 강조하고자합니다.

### Reference

1. The AILearner. Snake Game with Deep Learning. [https://theailearner.com/2018/04/19/snake-game-with-deep-learning/](https://theailearner.com/2018/04/19/snake-game-with-deep-learning/)
2. Italo Lelis. LearnSnake: Teaching an AI to play Snake using Reinforcement Learning (Q-Learning). 2018. [https://italolelis.com/snake](https://italolelis.com/snake)
3. Hennie de Harder. Snake Played by a Deep Reinforcement Learning Agent. 2020. [https://towardsdatascience.com/snake-played-by-a-deep-reinforcement-learning-agent-53f2c4331d36](https://towardsdatascience.com/snake-played-by-a-deep-reinforcement-learning-agent-53f2c4331d36)
4. KC-ML2. MARLenv. [https://github.com/kc-ml2/MARLenv](https://github.com/kc-ml2/MARLenv)
