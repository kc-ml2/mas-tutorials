---
title: 2.1 Snake Leaderboard 소개
type: game
order: 4
cate: part2
---

## 2.1 Snake Leaderboard 소개 
> [Snake Leaderboard 링크](http://52.231.199.165/)
> 자신이 만든 agent와 다른 사람들이 업로드한 agent를 직접  대결시켜 볼 수 있는 리더보드 입니다. <br>ML2가 만든 env를 활용해서 Multi-agent game을 즐기고 agent의  순위를 확인해 보세요!

Snake Leaderboard(SNL) 사이트는 `리더보드`, `매칭` , `프로필` 페이지로 구성되어 있습니다. 

### 1. `리더보드`
- 사람들이 업로드한 agent들의 순위를 확인할 수 있는 페이지 입니다. 
(agent 업로드 방식은 [2.2](https://tutorials.kc-ml2.com/v3/2/2.2)장에서 다루고 있습니다.)
- 활성화된 agent들은 백그라운드에서 자동으로 상대 agent를 매칭하여 게임을 진행하게 되고, 그 결과가 리더보드에 반영됩니다. 
- 리더보드 순위는 TrueSkill 랭킹 시스템을 따르고 있습니다. 

<img src="/images/leaderboard.png" width="500">

### 2. `매칭`
- 자신이 업로드한 agent를 다른 사람들이 업로드한 agent와 대결해 볼 수 있는 페이지 입니다.  
- 게임을 진행할 최대 4개의 agent를 직접 선택할 수 있고, 게임의 사이즈도 설정할 수 있습니다.
- 게임의 기본 세팅은 다음과 같습니다. 
	- 20x20 grid, 테두리가 두께 1의 벽으로 되어 있습니다
	- 뱀 초기 길이 : 3
	- 뱀은 랜덤한 위치에 랜덤한 형태로 spawn됩니다
	- vision_range : 5
	- reward : fruit을 먹을때만 1점을 받고 나머지는 0점을 받습니다. 최종 rank는 먹은 fruit의 갯수로 정해집니다.
- 게임 세팅이 완료되어 PLAY를 누르면 진행된 게임 결과를 gif로 볼 수 있습니다.

<video width="500" controls>
	<source src="/images/match.mov" type="video/mp4">
</video>

### 3. `프로필`
- 자신이 업로드한 agent를 관리하고 매칭된 기록을 확인할 수 있는 페이지 입니다. 
- <b>내 에이전트 목록</b>에서 자신의 agent목록을 확인할 수 있고, 해당 agent의 상태를 변경할 수 있습니다. 
- Activated된 agent만이 매칭 페이지에서 선택할 수 있고, 백그라운드에서 자동으로 선택되어 리더보드에 반영될 수 있습니다.
- <b>매칭 기록</b>에서는 `매칭`페이지에서 직접 매칭시킨 결과와 `리더보드`에 반영되는 모든 게임 결과를 확인할 수 있습니다. 

<video width="500" controls>
	<source src="/images/profile.mov" type="video/mp4">
</video>

