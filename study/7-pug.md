view engine

npm install pug

Express가 템플리트를 렌더링하려면 다음과 같은 애플리케이션 설정이 필요합니다.

- views, 템플리트가 있는 디렉토리. 예: app.set('views', './views')
- view engine, 사용할 템플리트 엔진. 예: app.set('view engine', 'pug')

express app.set()
view engine을 바꿔야 함 기본값은 undefined

pug는 템플릿 언어,
express의 view engine

---

### 실습

layouts 폴더에(이름 아무거나 상관 ㄴㄴ)
main.pug 만듬
main.pug는 모든 페이지의 시작 header, footer, HTML head태그. css link 같은거 담을 곳

partials 폴더
페이지의 일부분

---

템플릿에 정보를 추가할때
컨트롤러에 있는 정보를 템플릿에 추가할때

미들웨어 사용해서 해결할수 있음

res.locals.변수명 = 값;
locals를 이용해 전역 범위에 변수를 추가함
