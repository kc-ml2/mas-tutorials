---
title: 1.1 Previous Approaches
type: game
order: 1
---

## 1.1.  Previous Approaches

구글에 "snake game rl" 이라고만 검색을 해 봐도 강화학습용 환경 git repo들이 나오고 강화학습을 통해 snake를 학습시킨 사례들에 대한 블로그들이 있습니다. 심지어 Youtube에도 학습시키기위해 게임을 만드는것부터 시도했던 방법들을 담은 비디오까지 찾아볼 수 있습니다. Snake game은 이렇게 다수의 사람들에게 굉장히 익숙한 문제이며 단순 rule-based heuristic을 사용해서 문제를 푸는것을 넘어 이미 머신러닝을 통한 다양한 방법들이 공유되고 있을 정도로 많이 다루어진 문제입니다. 해당 섹션에서는 인공지능 또는 머신러닝을 이용해 snake문제를 풀었던 예시들을 살펴보면서 게임을 풀기위해 사용했던 방법론과 어떤 직관을 가지고 접근을 했는지 살펴보도록 하겠습니다.

자세한 사례들의 예시를 살펴보기에 앞서 모든 기존 방식들이 공통적으로 가지고 있을 snake game의 메커니즘에 대해 잠시 이야기 하도록 하겠습니다. Preface에서 가볍게 설명했듯 snake게임의 목표는 사과를 먹고 점수를 올리는 것입니다. 직접 게임을 플레이 해 보신 분들은 공감하실텐데 snake게임을 잘 하기 위해서 1차적으로 필요한 것은 **사과가 있는 방향으로 뱀의 머리가 향하도록** 타이밍을 맞추어 방향전환을 잘 하는 것입니다. 타이밍을 놓치게 되는 경우 사과를 지나쳐서 돌아서 다시 오는 만큼 더 많은 시간은 소요하게 되거나 벽 혹은 자신의 몸통에 충돌하여 게임오버가 됩니다. 

효율적으로 사과를 먹는것에 익숙해지면 2차적인 고민이 시작됩니다. Snake game의 가장 큰 특징은 단순히 사과를 먹는데 있지 않고 사과를 먹게될 경우 몸집이 커진다는 점 입니다. Snake game의 map크기는 한정적이여서 몸집이 커질경우 머리가 자유롭게 돌아다닐 수 있는 공간또한 줄어들게 되어 게임의 난이도가 점점 올라가게 됩니다. 예를들어 충분히 길이가 길어진 상황에서 맵 중앙에 위치한 사과를 먹기위해 map을 가로지르는 상황이 발생하였을 경우 스스로 한쪽에 갇혀서 굉장히 탈출하기가 어려운 상황에 처하게 될 수 있습니다. 즉 몸통이 길어지면 길어질 수록 사과로 가는 최단거리가 아닌 사과를 먹은 이후에도 뱀이 충분히 활동할 수 있는 공간을 만들도록 **long-term planning**을 요구하게 됩니다. 대표적인 이 두가지의 메커니즘을 포함하여 효율적인 학습을 위한 여러 사람들의 고민이 녹아있는 중요 포인트들을 정리하는 것으로 이번 챕터 내용을 구성하였습니다.

### 1.1.1. Vectorized Observation and DL

임의의 agent가 스스로 학습하여 문제를 푸는 상황에 앞서 단순하고 직관적으로 heuristic하게 snake문제를 푸는 방법으로 이야기를 시작해 보겠습니다. 우선 뱀의 입장이 되어 어떠한 상황에서 행동을 취하기 위해서는 상황을 잘 정의해 주어야 합니다. 그리고 그 정의 안에는 게임을 이기기 위해 필요한 중요요소들이 당연히 포함되어야 합니다. 예를 들면 사과의 위치나 전진방향에 위치한 장애물(e.g. 벽, 몸통)의 유무 등이 중요 정보에 포함이 됩니다. 

**Reference:** [https://theailearner.com/2018/04/19/snake-game-with-deep-learning/](https://theailearner.com/2018/04/19/snake-game-with-deep-learning/)

위의 블로그를 보면 snake게임 풀기위한 방법의 설명 중 상당 부분이 어떤 정보들을 어떻게 가공하여 input으로 사용할지에 대한 설명으로 구성되어 있습니다. 요약해보자면 input은 다음의 7가지 정보들로 이루어져 있습니다. 

- 왼쪽이 막혀있는가 (1 or 0)
- 앞이 막혀있는가 (1 or 0)
- 오른쪽이 막혀있는가 (1 or 0)
- 사과 위치의 벡터값 (X)
- 사과 위치의 벡터값 (Y)
- 뱀의 이동방향 (X)
- 뱀의 이동방향 (Y)

구성을 보면 당장 이동방향을 결정하기 위해 가능/불가능 한 방향을 구분하기 위한 정보들과 조금은 더 미래에 먹어야할 사과의 위치와 나의 현재 상태를 설명하는 정보들로 이루어져있습니다. 이 7개의 숫자만 보고도 당장 선택해야할 action을 결정할 수 있을만큼 굉장히 정제가 되어있는 정보입니다. 따라서 아주 효율적인 학습이 가능하게 됩니다. 하지만 위의 정보들을 계산하는데에서 그리고 어떤 종류에 정보를 어떻게 선택하냐에서 이미 상당한 부분 사람의 개입이 되어 있는 상태이기도 합니다. 직관적으로는 사과위치를 벡터로 표시하는것이 단순하면서 충분해보이지만 환경이 grid에서의 움직임을 따르고 있다는 점에서 실제 벡터의 방향으로는 움직일 수 없다거나 막혀있는 것을 판별하기 위해 장애물을 미리 인식하여 collision check을 해야하는 등 생각보다 많은 부분들에 이미 domain knowledge가 포함 되어 있습니다. 그리고 해당 정보들이 가장 최적의 답을 찾는데에 충분한 정보라는 보장 또한 없습니다. 예를들어 뱀의 이동방향 기준 전좌우 3면이 모두 막혀있는 칸 너머에 사과가 위치한 경우 뱀은 그 칸안에 들어가기 전까지는 위의 정보만 가지고는 문제가 있다는것을 알 수가 없습니다. 즉 조금더 멀리 내다보며 planning을 하기 위해서는 위의 정보보다 더 많은 정보를 요구합니다.

### 1.1.2. Onehot pixel encoding with DQN

**Onehot Reference:** [https://www.secmem.org/blog/2020/02/08/snake-dqn/](https://www.secmem.org/blog/2020/02/08/snake-dqn/)

**Convolution Reference:** [https://medium.com/@hugo.sjoberg88/using-reinforcement-learning-and-q-learning-to-play-snake-28423dd49e9b](https://medium.com/@hugo.sjoberg88/using-reinforcement-learning-and-q-learning-to-play-snake-28423dd49e9b)

앞서 이야기한 다양한 heuristic 한 방법으로 만들어낸 vectorized input은 가장 명확한 정보를 가지고 있지만 반대로 전체 게임에 대한 상태에 대해서는 아주 소량의 정제된 정보만 가지게 되는 경우가 대부분입니다. 반대로 현재 관측할 수 있는 게임화면 전체를 RGB이미지로서 받는 경우에 뱀과 벽, 그리고 사과등을 구분하는 원초적인 문제부터 해결해야하기 때문에 모델이 학습하는 과정이 매우 어려워질 수있습니다. 그래서 이에대한 적절한 해결법으로 위의 블로그에서는 각 grid cell에 어떤 entity가 들어있는지를 onehot vector를 이용하는 방법을 사용하였습니다. Onehot vector를 사용할 경우 아래 그림과 같이 input matrix의 특정 채널이 한가지 종류의 entity의 위치를 나타내는 binary matrix 로도 해석이 될 수 있습니다.

<center><figure>
	<img src="/images/onehot.png" width="600">
	<figcaption>Figure 1. Onehot encoding of entities per pixel</figcaption>
</figure></center>

<center><figure>
	<img src="/images/channel.png" width="600">
	<figcaption>Figure 2. Channel-wise entities</figcaption>
</figure></center>

Onehot의 가장 큰 장점은 RGB와는 달리 비슷한 색 이라는 개념이 없기때문에 모든 entity를 orthogonal하게 만들 수 있습니다. 따라서 CNN등을 이용하여 학습시킬때 네트워크가 학습해야하는 정보가 줄어들어 문제를 더 쉽게 만든다는 점입니다. 또한 deep learning 을 사용하지 않고 접근하고자 하는 사용자의 입장에서도 정보를 처리하기가 훨씬 쉽다라는 장점이 있습니다. 그러면 원하는 entity 사이의 거리를 계산하여 다시 vectorized input으로 돌아가는것도 훨씬 쉬워집니다.

### 1.1.3. Cropped Image with DQN

**Reference:** [https://www.youtube.com/watch?v=-NJ9frfAWRo](https://www.youtube.com/watch?v=-NJ9frfAWRo)

Snake 게임을 강화학습을 이용해서 학습을 시킨 사례들을 찾아보면 상당수 DQN을 베이스로 하는 모델을 사용하는 것을 볼 수 있습니다. (ER을 이용한 효율성 증가, discrete action을 다루기 적합함, 그리고 유명함.) 그리고 보다 쉬운 generalization을 위해 observation 을 살짝 바꾸어 일반적으로 사람이 보는것과 같이 맵 전체를 보는것이 아닌 뱀의 머리를 기준으로 특정 영역을 잘라 항상 observation의 중심에는 뱀의 머리가 위치하도록 하였습니다. 이렇게 학습을 시킬경우 더 작은 맵에서 학습시킨 모델을 더 큰 맵이나 아예 다른 맵으로 옮기기에도 용이하고 또한 한번에 봐야하는 정보량이 다르다는 것과 외적으로 등장할 수 있는 벽이나 사과등이 뱀의 머리에 상대적인 위치에 표시됨으로서 맵상에서 현재 플레이어의 절대적인 위치에 구애받지 않게 됩니다. 즉 게임을 훨씬 더 쉽게 만들었다는 이야기가 됩니다. 하지만 반대로 단점도 있습니다. 맵 전체가 주어짐에도 불과하고 뱀의 머리를 중심으로 오려서 사용할 경우 일부 보이지않는 구간이 생길 수 있으며 이는 문제자체를 Partially Observable Markov Decision Process (POMDP)로 만들어버릴 수 있다는 것입니다. 이렇게 될 경우 우리가 학습시키고자 하는 agent는 굉장히 reactive 한 agent가 될 가능성이 있으며 이는 미래에 MARL세팅을 고려했을때 전략을 짜기가 힘들어질 수 있다는 이야기가 됩니다. POMDP에 대해 더 자세한 내용은 [여기](https://tutorials.kc-ml2.com/v2/2/2intro)를 참고해 주세요.

<center><figure>
	<img src="/images/4_1.png" width="300">
	<figcaption>Figure 3. Full observation</figcaption>
</figure></center>

<center><figure>
	<img src="/images/4_2.png" width="300">
	<figcaption>Figure 4. Partial observation with centered around head with vision range of 5</figcaption>
</figure></center>

### 1.1.4. Playing with the Rewards

**Reference:** [https://towardsdatascience.com/snake-played-by-a-deep-reinforcement-learning-agent-53f2c4331d36](https://towardsdatascience.com/snake-played-by-a-deep-reinforcement-learning-agent-53f2c4331d36)

단순하게 학습을 시키는 것을 넘어서 조금더 흥미로운 실험을 한 블로그도 있습니다. (위 링크) 이 블로그에서는 동일하게 DQN을 바탕으로 학습을 시키면서 observation은 단순 cropping 에서 더 나아가 사과와 벽 등의 상대적 위치를 직접 binary code 로 vectorize 하여 넣어주는 방식을 택함으로써 훨씬 더 적은 정보로 narrow down 하여 실험을 진행하였습니다. State에 들어가야할 정보들의 종류도 바꾸어보고 Experience Replay Buffer의 세팅값도 바꿔보는등 다양한 component를 바꿨을때 결과가 어떻게 달라지는지를 비교하는 방식으로 실험을 진행해서 매우 흥미로웠는데 그중에서도 이목을 끄는 실험은 reward function 을 바꾸면서 결과를 비교한 실험입니다. 이 블로그에서 사용한 snake 게임에는 reward를 받을 수 있는 방법이 총 4가지 있습니다. 

- 사과 획득: 10
- 사과에 가까이 감: 1
- 사과에서 멀어짐: -1
- 죽음: -100

위에 적힌 숫자들이 기본 세팅에서의 reward 값입니다. 사과를 획득했을 경우 뿐만아니라 다가갈때도 + 점수를 줌으로서 더욱 학습이 잘 되도록 유도하였습니다. 그런데 여기서 만약 점수들을 조금 바꾸어 사과에서 멀어지는 경우도 +1 점을 주도록 바꾼다면 어떻게 될까요? 다르게 말해 멀어지는경우도, 가까워지는 경우로 +1 점을 받는 상태가 되어 오랜시간 생존할 수록 많은 점수를 받도록 바꾼 것입니다. 블로그의 게시된 결과를 보면 사과를 먹지않고 벽을따라 맵을 빙빙 도는 agent 를 확인할 수 있습니다. 즉 생존만 해도 + 점수를 받기에 우선 생존에 특화된 agent가 만들어 진 것이죠. 사과획득이 10배나 더 많은 점수를 주지만 생존은 매 시간마다 받기때문에 이런 현상이 생긴 것입니다. 또 반대로 사과를 획들했을때의 점수를 100점으로올리되 가까이 다가갈 수록 -1점을 주는 실험또한 볼 수 있습니다. 즉 시간에 대한 패널티때문에 최단거리라 사과를 먹도록 유도한 것인데 예상과는 다르게 사과가 아닌 벽으로의 최 단거리를 선택하여 최대한 게임을 빠르게 끝내는 쪽으로 agent 가 학습되었습니다. 게임을 아예 끝내버리면 더이상 시간에 대한 패널티를 받을 일이 없기 때문이죠. 

이렇듯 리워드의 상대적인 값에 따라서 같은 강화학습 알고리즘을 사용하더라도 사람이 생각하는 최적의 솔루션과는 사뭇 다른 결과를 얻을 수 있다는 것을 보았습니다. 비슷하게 단순히 사과를 먹는데서 점수를 얻는것과 더불어 시간에 대한 reward를 줄 경우 다음과 같은 행동도 관측 할 수 있습니다. 이것을 ML2의 Marlenv의 'Snake-v1'를 통해 구현해 보았습니다.

![4_3.gif](https://mas-tutorials.s3.ap-northeast-2.amazonaws.com/4_3.gif)
<i>Figure 5. Reward 1.0 only when fruit eatten</i>

![4_4.gif](https://mas-tutorials.s3.ap-northeast-2.amazonaws.com/4_4.gif)
<i>Figure 6. Reward = {fruit:1.0, time: 0.01}</i>

![4_5.gif](https://mas-tutorials.s3.ap-northeast-2.amazonaws.com/4_5.gif)
<i>Figure 7. Reward = {fruit: 1.0, time: 0.1}</i>


오직 사과를 먹는데에만 보상을 부여했을 경우 거의 최단거리에 가까운 길로 사과를 먹는데 집중을 하게 됩니다. 반대로 시간에 대한 보상을 아주 조금 부여할 경우 초반에 조금더 빨리 생존하는 법을 배우며 학습이 완료된 시점에서는 사과를 먹는데 집중을 하지만 중간중간 조금 더 다양한 움직임을 보여줍니다. 더 나아가 생존시간에 대한 보상을 더 키워주면 마지막 그림과 같이 사과도 먹을 수 있지만 그저 조금더 생존에 집중된 단순한 패턴의 움직임으로 수렴하는 것을 볼 수 있습니다.

이렇듯 하나의 agent를 학습시키는 single-agent setting에서 reward function을 어떻게 설계하느냐에 따라 다양한 형태의 행동패턴을 관측할 수 있습니다. 비슷하게 multi-agent인 상황에서 새로운 agent를 학습시키는 방법에 있어도 어떤것들을 바꿔볼 수 있을까 하는 것도 고민해볼 만한 내용입니다. Reward function에 변화를 주는것 외에도 multi-agent인 상황에서는 autocurricula, opponent sampling, 그리고 map randomization등 다양한 방법이 이미 여러 논문들을 통해 소개된 바가 있습니다. 이에대해 자세한 내용은 [여기](https://tutorials.kc-ml2.com/v2/3/3intro)를 참고해 주시기 바랍니다.