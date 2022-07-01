---
title: 1.3 MARLENV
type: game
order: 3
cate: part1
---

## 1.3 marlenv 소개

marlenv는 ML2에서 개발한 오픈소스 강화학습 환경으로 멀티에이전트 뱀 게임이 구현되어 있습니다.
marlenv는 OpenAI gym의 컨벤션을 따르고 있습니다. ~다만 멀티에이전트 환경을 기본적으로 고려하고 있기 때문에 reset, step 등 환경의 메서드가 n개 agent에 해당하는 return 값들(각 agent의 observation, reward, done 등)을 리스트로 묶어서 반환합니다.~

### 기본 Snake game 환경

기본 `Snake-v1` 환경은 4마리의 뱀이 사과를 먹으며 몸을 키우고 점수를 얻으며 경쟁하는 게임입니다. 뱀 게임에 대한 소개는 이 [tutorial page](https://tutorials.kc-ml2.com/posts/game-1intro)를 참고해주세요. 환경의 기본설정값은 다음과 같습니다.
map size: 20 $\times$ 20
number of snakes: 4
initial body length of snakes: 3
vision range of snakes: None(= Full observability)
number of frames to stack: 1
observer: “snake”

|||
|:-:|:-:|
|![eighty](https://user-images.githubusercontent.com/103443013/176834875-7b770b79-36d7-4e58-bdb8-fbe5500c61be.png)|![sixty](https://user-images.githubusercontent.com/103443013/176836239-317bb3f5-8c30-405b-a64b-ed102845968e.png)|  

![](https://user-images.githubusercontent.com/103443013/176857957-e2636b7e-da4e-4865-8691-9253ac5f86e0.png)

### Snake game 변형하기

marlenv는 연구자들이 훈련 환경의 구성요소를 필요에 따라 쉽고 자유롭게 변형할 수 있도록 만들어져 있습니다.

#### arguments for gym.make()

`gym.make()`에 다음과 같은 argument들을 전달해 게임을 변형할 수 있습니다.
1. map size → `heigth / width`

2. number of snakes → `num_snakes`

3. initial body length of snakes → `snake_length`

4. vision range of snakes → `vision_range`
    뱀의 머리를 중심으로 상하좌우 vision_range만큼의 정사각형 grid 영역을 partial observation으로 반환합니다.  
    e.g.) vision_range가 5인 경우 observation shape는 (11, 11, 8)이 됩니다. 보다 자세한 내용은 이 [tutorial page](https://tutorials.kc-ml2.com/posts/game-1.1#113-cropped-image-with-dqn)를 참조하세요.
    <!-- [https://tutorials.kc-ml2.com/posts/game-1.1#113-cropped-image-with-dqn]ㅋ(https://tutorials.kc-ml2.com/posts/game-1.1#113-cropped-image-with-dqn) -->

5. number of frames to stack → `frame_stack`
    지정된 프레임 수 만큼의 과거 observation을 묶어서 반환합니다.
    
6. action space → `observer`
    observer 인자를 통해 action space를 변경할 수 있습니다.
    |snake|human|
    |:-:|:-:|
    |![snake](https://user-images.githubusercontent.com/103443013/176870599-40af961d-8f6f-41f8-8cbe-183c6085ba5f.png)|![human](https://user-images.githubusercontent.com/103443013/176870592-081b4b76-870e-442a-ade0-a00136d9743f.png)|

    `"snake"`의 경우 (전진, 좌회전, 우회전) 3가지의 action을 갖고
    `"human"`의 경우 (아무 행동 안하기, 상, 하, 좌, 우) 5가지의 action을 갖습니다.
    
    
7. reward function → `reward_dict`
    매 step마다 agent가 받게 될 reward 또한 reward dictionary를 전달해 변경할 수 있습니다. 사과를 먹는 것과 상대방을 죽이는 것 이외에도 게임이 끝났을 때의 승패에 따라 보상을 주거나(`win`, `lose`) 매 step마다 일정한 패널티를 주는 것(`time`)도 가능합니다.
    
    ```python
    default_reward_dict = {
    		'fruit': 1.0,
    		'kill': 0.0,
    		'lose': 0.0,
    		'win': 0.0,
    		'time': 0.0,
    }
    ```
    
8. number of fruits on the map → `num_fruits`
    
    맵 위에 존재하는 사과의 갯수를 조절할 수도 있습니다. num_fruits만큼의 사과가 항상 맵 위에 존재하도록 사과가 생성됩니다. 기본값으로는 `(num_snakes * 0.8)`을 반올림한 만큼의 사과를 생성합니다. 
    

### Wrappers

필요에 맞게 적절한 wrapper를 사용할 수 있습니다. 트레이닝에 어떤 wrapper가 필요한지 잘 모르겠다면 `marlenv.wrappers.make_snake()` 함수를 이용해 적절한 wrapper를 자동으로 선택할 수 있습니다.

#### SingleAgent

`num_snakes=1` 로 지정할 경우 싱글플레이어 snake game을 학습할 수 있습니다. 이 경우 더이상 여러 agent들에 맞게 list로 묶어줄 필요가 없기 때문에 SingleAgent wrapper를 이용해 list로 묶여있는 obs, reward, done, info를 풀어줍니다. 

```python
import gym
import marlenv

env = gym.make('snake-v1', num_snakes=1)
env = marlenv.wrappers.SingleAgent(env)
```

#### SingleMultiAgent

SingleMultiAgent wrapper는 multi-agent 환경을 하나의 모델만을 이용하여 자기 자신을 상대로 플레이(selfplay)하기 위한 wrapper입니다. SingleAgent wrapper와 비슷하게 `env.step()`메서드의 반환 값을 변형해 줍니다. SingleMultiAgent wrapper는 `(num_agents,  *shape)`의 형태로 반환 값들을 묶어줍니다. 동일한 모델을 사용하는 경우 observation을 이용해 그대로 model forward에 사용할 경우 batch operation과 같이 작동해 agent 수 만큼의 action을 반환할 것이고 이를 그대로 `env.step()`에 사용할 수 있습니다. 
보다 자세한 내용은 이 [tutorial page](https://tutorials.kc-ml2.com/posts/game-1.2)에서 확인할 수 있습니다.

<!-- [https://tutorials.kc-ml2.com/posts/game-1.2](https://tutorials.kc-ml2.com/posts/game-1.2) -->

```python
import gym
import marlenv

env = gym.make('snake-v1', num_snakes=4)
env = marlenv.wrappers.SingleMultiAgent(env)
```

#### AsyncVectorMultiEnv

동일한 여러개의 환경을 띄워 병렬적으로 학습할 때 사용하는 wrapper입니다. Vectorized env에서도 훈련 중인 뱀들의 모습을 부모의 마음으로 지켜볼 수 있도록 render 기능이 구현되어 있습니다.

### 훈련중인 뱀 관찰하기

`env.render()`를 통해 게임을 모니터링하는 방식은 총 3가지가 있습니다. terminal을 통해 렌더링을하는 `ascii` 모드, 게임의 렌더링된 영상을 gif 파일로 저장하는 `gif` 모드, 마지막으로 numpy array를 반환하는 `rgb_array` 모드가 있습니다. 아래와 같이 render 모드를 필요에 따라 지정해 사용할 수 있습니다.

```python
import gym
import marlenv

env = gym.make('snake-v1', num_snakes=4)
env = marlenv.wrappers.SingleMultiAgent(env)
env.render(mode="ascii")
```

### 다른 환경 살펴보기

#### SnakeCoop-v1

SnakeCoop env는 기존의 경쟁 게임 구조에서 협력적 행동을 보이도록 변형한 환경입니다. 모든 뱀이 죽어야 끝나는 episode의 done condition을 게임에 참여하는 뱀 중 하나의 뱀이라도 죽으면 끝나도록 변형하여 모든 뱀들이 각자의 total reward를 최대화 하기 위해서는 서로의 경로를 방해하지 않고 모든 맵을 자신들의 몸으로 꽉 채워야 합니다. 

![[forty](https://user-images.githubusercontent.com/48481523/159942581-ad638691-d4ac-472f-bbd3-3e32db57d434.gif)](https://user-images.githubusercontent.com/48481523/159942581-ad638691-d4ac-472f-bbd3-3e32db57d434.gif)

#### SnakeGraph-v1

SnakeGraph env는 coop과 동일한 게임 규칙 하에서 각 agent의 observation이 graph representation으로 주어지는 환경입니다. 머리를 중심으로 정사각형 모양으로 잘린 grid observation을 partial observation으로 사용하듯 머리를 기준으로 5개 방향의 선분 위의 정보들을 5개의 node feature로 압축한 graph data로 반환합니다.

![sixty](https://diya-blogpost.s3.amazonaws.com/imgs_2021RL/RL/158995655-472a21ab-bf2d-4f22-b415-0e1c7f2122d2.png)

위 환경들에 대해 더 알고 싶다면 인공지능 동아리 DIYA의 [블로그 포스트](https://blog.diyaml.com/teampost/MARL/)를 확인해 보세요!

<!-- [https://blog.diyaml.com/teampost/MARL/](https://blog.diyaml.com/teampost/MARL/) -->
