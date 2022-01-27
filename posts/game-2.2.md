---
title: 2.2 Snake Leaderboard 참여 방법
type: game
order: 5
cate: part2
---
## SNL 참여 방법 

Snake Leaderboard (SNL) 에 참여하기 위해서는 자신의 agent가 준비되어 있어야 합니다.
이번 챕터에서는 SNL에 참여하기 위해 <b>agent를 구현</b>하고 <b>업로드</b>하는 방법을 다루겠습니다.
### Video Tutorial
SNL에 참여하기 위한 모든 준비 과정을 [Video Tutorial](https://www.youtube.com/embed/7P9OYAgnK2M)에 담아보았습니다.
Video Tutorial과 아래 설명들을 함께 보시면 쉽고 재밌게 SNL을 이용하실 수 있습니다!
<iframe src="https://www.youtube.com/embed/7P9OYAgnK2M" width="560" height="315" frameborder="0">
</iframe>

### 사전 준비사항

- `SNL 계정`
    - Snkae Leaderboard 페이지에서 간단하게 e-mail 회원가입을 해주세요. 
- `docker engine`
    - 학습된 에이전트는 도커 컨테이너화 되어 에피소드를 진행하게 되기때문에 docker engine이 필요합니다.
    - 도커 사용법을 모르셔도 괜찮습니다. 
    - [설치 하는 법](https://docs.docker.com/engine/install/)

### SNL 참여 방법 순서

1. **알고리즘 구현**
    - `snl-starter-kit/notebook` 혹은 `snl-starter-kit/src`에 자신의 알고리즘 구현합니다.
    - 자세한 내용은 아래 [알고리즘 구현 방법](#quick)를 확인해 주세요.
2. **학습**
    - 로컬 환경 및 colab등 원하는 환경에서 학습 후 학습된 모델을 저장하시면 됩니다. 
     예) torch인 경우, saved_model.pt
3. **에이전트 업로드**
    - dockerhub를 이용하여 업로드합니다. 
    - 자세한 내용은 아래 [에이전트 업로드 방법](#upload)을 확인해 주세요.
4. **에이전트 활성화**
    - SNL의 `프로필` 페이지에서 편하게 toggle을 움직여 agent를 활성화/비활성화 시킬 수 있습니다. 
       <img src="/images/img.png" width="400">
    - agent가 업로드 되면 기본값으로 activated 되어있는데요, 이렇게 activated된 agent만 매칭 페이지에서 선택가능하고 백그라운드에서 자동으로 선택되어 리더보드에 반영됩니다.

## <a name="quick"></a> (1) 알고리즘 구현 방법

아래 git repository를 clone 해주세요.

[https://github.com/kc-ml2/snl-starter-kit](https://github.com/kc-ml2/snl-starter-kit)

### 디렉터리 구조

확인하셔야할 디렉터리 구조는 아래와 같습니다.

```bash
snl-starter-kit
├── Dockerfile
├── example # 예시 알고리즘 구현체
├── requirements.txt 
├── src # SNL 참여하기위한 실제 구현체
```

알고리즘을 구현하는데에있어 framework, library에 있어서 제한은 없습니다.

`tensorflow` , `torch`는 물론, `networkx`, `xgboost`등 다양한 라이브러리를 사용하셔도 됩니다.

다만, 본인이 학습할때 사용했던 환경과 똑같이 도커 이미지를 구성해야 합니다.

- 학습에 필요했던 python 패키지들을 `requirements.txt` 에 추가 해주셔야합니다.
- 만약, 사용하시는 패키지가 OS레벨의 library를 요구한다면, `Dockerfile`을 조금 수정해주셔야 합니다.
    - 예) gym에서 사용하는 mpi4py를 사용하기위해서는 openmpi-devel을 설치해야함

### 필수!! 준비사항

* SNL account
   * http://52.231.199.165/
* Docker Engine(엔진이 꼭!! 켜져 있어야합니다)
    * 설치 : https://docs.docker.com/engine/install/ 
    * tested on CentOS, Ubuntu, MacOS
* openmpi(만약 시스템에 설치되어 있지 않다면)
    * Ubuntu : sudo apt-get install libopenmpi-dev
    * CentOS/RHEL : sudo yum install openmpi-devel
    * Mac : (필요시)(대부분의 경우에 이미 설치되어 있음)brew install mpich
    * 경우에 따라 환경변수 설정등이 필요 할 수도 있기 때문에, 환경에 맞는 설치방법을 구글링하여 설치.
    * Vectorized Env를 사용하기 위해서 필요.
* 패키지 설치
```
pip install -r requirements.txt
```


### 구현

**주의사항**

- 어떤 스크립트를 추가 하셔서 에이전트를 구현하셔도 괜찮습니다만, 모든 스크립트 / 학습된 모델은 **src 폴더안**에 위치되어있어야 합니다.

`src` 폴더 안에 `algo.py` 를 오픈해주세요

```python
class Agent:
    def act(self, obs):
        # for obs.shape, refer to https://github.com/kc-ml2/marlenv
        pass

def agent_factory():
    # load model 
    
    # initialize your agent for test(inference) time
    agent = Agent()

    return agent
```

`Agent`  클래스와 `agent_factory`  메소드가 있습니다.

- Agent 클래스는 어떤 식으로 구현되도 괜찮습니다만, act 메소드는 꼭 가지고 있어야합니다. 에이전트는 competition 상황에서 에피소드를 진행하기 때문에, act 메소드는 joint action이 **아닌, 하나의 action을 return** 하셔야 합니다. (예를 들어, n개의 decentralized actors가 있는 경우, 하나의 actor가 선택하는 action을 리턴하도록 정의해야합니다.)
- agent_factory 메소드는 training time을 위한 agent  instantiation이 **아닌,  test time을 위한 arguments**들로 초기화되고**, Saved Model이 load된** agent instance를  return하여야 합니다.

`example` 폴더에서 예시로 구현된 알고리즘들을 확인 하세요!

## <a name="upload"></a> (2) 에이전트 업로드 방법

 - <b>starter-kit/submit.sh</b>을 실행해 주세요.

```bash
# 만약 ./submit.sh가 실행 안될경우
sudo chmod 777 submit.sh

./submit.sh

enter snl email account:
# SNL에 가입한 이메일 입력 
rl2@kc-ml2.com

enter snl upload key: 

enter agent name: (lowercase)
# 에이전트 이름 입력
gmac

optional) enter agent tag: (lowercase)
# 원하는 태그 입력
actor-critic-gaussian-mixture-6000k-steps

# 태그 입력후 에이전트 검증 테스트 진행
[INFO] validating your agent...
============================================= test session starts =============================================
platform darwin -- Python 3.7.9, pytest-6.2.2, py-1.10.0, pluggy-0.13.1
rootdir: /Users/anthony/PycharmProjects/snl-starter-kit
collected 2 items                                                                                             

tests.py ..                                                                                             [100%]

============================================== warnings summary ===============================================
tests.py::test_local
  /Users/anthony/PycharmProjects/snl-starter-kit/venv/lib/python3.7/site-packages/rl2/buffers/base.py:3: DeprecationWarning: Using or importing the ABCs from 'collections' instead of from 'collections.abc' is deprecated since Python 3.3,and in 3.9 it will stop working
    from collections import Iterable

-- Docs: https://docs.pytest.org/en/stable/warnings.html
======================================== 2 passed, 1 warning in 14.05s ========================================

# 테스트 통과시 이미지 빌드 & SNL에 이미지 제출 진행
[INFO] submitting docker image...
[+] Building 0.2s (10/10) FINISHED                                                                             
 => [internal] load build definition from Dockerfile                                                      0.0s
 => => transferring dockerfile: 37B                                                                       0.0s

```


> 이렇게 SNL참여 방법 설명을 마칩니다. <br>SNL을 통해 즐겁게 Multi-agent RL을 체험해 보세요 !

