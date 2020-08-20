## 미들웨어

---

middleware()
미들웨어 함수는 요청 객체(req), 응답 객체(res), 그리고 애플리케이션의 요청-응답 사이클 중 그 다음순서의 미들웨어 함수에 대한 액세스 권한을 갖는 함수 입니다. 그다음 미들웨어 함수에 대한 엑세스는 next함수로 요청을 넘긴다.
따라서 미들웨어는 순차적으로 처리가 되기 때문에 순서가 중요하다.

morgan
(loggin)기능 어떤 접속(GET)인지 정보 알수있음, 어디에 접속하는지
npm install morgan
import morgan form "morgan";

helmet
보안
npm install helmet

body-parser
body로 부터 form에서 정보를 받을때

cookie-parser
session을 다루기 위해 cookie에 유저 정보를 담을거임
