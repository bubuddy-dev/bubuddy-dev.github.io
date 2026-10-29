# bubuddy-dev.github.io

직접 만든 게임을 앱 아이콘 갤러리로 모아두는 페이지입니다. 빌드 없이 HTML/CSS만으로 되어 있습니다.

## 게임 추가하기

1. 아이콘(정사각형 PNG)과 스크린샷을 `assets/games/<이름>-icon.png`, `assets/games/<이름>-screenshot.png`로 넣습니다.
2. `games/pocket-roo/`를 복사해 `games/<이름>/index.html` 내용을 바꿉니다.
3. `index.html`의 `<ul class="gallery">` 안에 `<li>` 하나를 복사해 추가합니다.

## 로컬에서 보기

```bash
python3 -m http.server 8000
```

http://localhost:8000 을 엽니다.
