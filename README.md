<p align="center">
<img  src="/public/Nav/logo.png" width="300"/>
</p>
<br>

# ๐ MAS TUTORIAL ์๊ฐ

**MAS TUTORIAL**์ ๋จธ์ ๋ฌ๋ ์ฐ๊ตฌ์ [KC-ML2](https://www.kc-ml2.com/)์์ ์ ์ํ '๋ฉํฐ์์ด์ ํธ ๊ฐํํ์ต(MARL)' ํํ ๋ฆฌ์ผ์๋๋ค.
๋ณธ ํํ ๋ฆฌ์ผ์ ๋ค์๊ณผ ๊ฐ์ ๋ด์ฉ์ ๋ค๋ฃจ๊ณ  ์์ต๋๋ค.

- [โ๏ธ ๋ฐฐ์ฐ๊ธฐ](https://tutorials.kc-ml2.com/posts/learn-1intro) : Multi-agent ๋ฌธ์ ๋ฅผ ๊ฐํํ์ต(RL) ๊ด์ ์์ ๋ฐ๋ผ๋ณด๋ฉฐ ๊ด๋ จ ์ด๋ก ๋ค๊ณผ ์๊ณ ๋ฆฌ์ฆ์ ์๊ฐํฉ๋๋ค.
- [๐ฎ ์์ฉํ๊ธฐ](https://tutorials.kc-ml2.com/posts/game-1intro) : ๊ณ ์  ๊ฒ์์ธ snake game์ multi-player๋ก ํ์ฅํ์ฌ RL๊ณผ MARL์ ๊ด์ ์์ ๋ถ์ํฉ๋๋ค. ๋ํ multi-agent snake game์ด ๊ตฌํ๋ ๊ฐํํ์ต ํ๊ฒฝ [MARLenv](https://github.com/kc-ml2/MARLenv)์ ์ฌ์ฉ๋ฒ์ ๋ค๋ฃจ๊ณ  ์์ต๋๋ค.

---

# ๐๏ธ MAS TUTORIAL ์ปจํธ๋ฆฌ๋ทฐ์

ํํ ๋ฆฌ์ผ์์ ์คํ ๋๋ ํผ๋๋๋ ๋ด์ฉ์ด๋ ๊ฐ์ ์ ์ํด ์ถ๊ฐํ์ค ๋ด์ฉ์ด ์๋ค๋ฉด issue๋ฅผ ์ฌ๋ฆฌ์๊ฑฐ๋ PR์ ํด์ฃผ์ธ์!
๋์ฑ ์ ์ตํ ํํ ๋ฆฌ์ผ์ ์ํ ์ฌ๋ฌ๋ถ๋ค์ ์ฐธ์ฌ๋ฅผ ๊ธฐ๋ค๋ฆฝ๋๋ค : )

### PULL REQUEST ๊ฐ์ด๋๋ผ์ธ

- โ ์๋ก์ด branch๋ฅผ ๋ง๋ค์ด ์ฃผ์ธ์!
  - ํ์ฌ ์ฌ์ฉ๋๋ ๊ธฐ๋ณธ branch (ex. `main`)๊ฐ ์๋ ๋ณ๋์ branch๋ฅผ ์๋ก ๋ง๋ค์ด ์์ํด ์ฃผ์ธ์.
- โ PR template์ ์์ฑํด ์ฃผ์ธ์!
  - PR template์ ์ ํ PR์ ํ๊ฒ๋ ์ด์ ์ ์์ ์ ๋ํ ์๊ฒฌ, ์ฃผ์ ๋ณ๊ฒฝ ์ฌํญ์ ๊ธฐ์ํด ์ฃผ์ธ์.
- โ ๋ฆฌ๋ทฐ ํ ์ถ๊ฐ์ ์ธ ์ปค๋ฐ์ด ์๊ฒผ๋ค๋ฉด, `Re-request review`๋ฅผ ์งํํด ์ฃผ์ธ์!
  - ์์ธํ ๋ฐฉ๋ฒ์ [๋ฌธ์](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)๋ฅผ ์ฐธ๊ณ ํด ์ฃผ์ธ์.

### Devcontainer ์ฌ์ฉ

- Visual Studio Code์์ Docker ์ปจํ์ด๋๋ฅผ ๊ฐ๋ฐ ํ๊ฒฝ์ผ๋ก ์ฌ์ฉํ์ค ์ ์์ต๋๋ค.
- Visaul Studio Code์์ `Remote-Container: Reopen in Container` ์ปค๋งจ๋๋ฅผ ์คํํ์๊ฑฐ๋, ํ๋จ์ `Reopen in Container` ๋ฒํผ์ ๋๋ฅด์  ํ ์ฌ์ฉ ๊ฐ๋ฅํฉ๋๋ค.

---
### ๐๏ธ License 
- `posts` ํด๋ ์์ ๋ฌธ์์๋ [CC-BY-4.0 license](https://github.com/kc-ml2/mas-tutorials/blob/main/LICENSE)๊ฐ ์ ์ฉ๋๊ณ  ์์ผ๋ฉฐ
- ๊ทธ ์ธ ํด๋น repository์ ์ฝ๋์๋ [MIT license](https://github.com/kc-ml2/mas-tutorials/blob/main/LICENSE-CODE)๊ฐ ์ ์ฉ๋์ด ์์ต๋๋ค. 

