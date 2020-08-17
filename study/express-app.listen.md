## [ExpressJS] app.listen()메소드

---

## app.listen(path, [callback])

UNIX 소켓을 시작하고 주어진 경로에서 연결을 수신한다.
Node의 http.Server.listen()과 동일한 기능을 수행한다.

```javascript
var express = require("express");
var app = express();

app.listen("/tmp/sock");
```

---

## app.listen([port[, host[, backlog]]][, callback])

지정된 호스트 및 포트에서 연결을 바인드하고 수신한다.
Node의 http.Server.listen()과 동일한 기능을 수행한다.

포트가 생략되거나 0이면 운영체제는 자동화 된 작업(테스트 등)과 같은 경우에 유용한 사용되지 않는 임의의 포트를 할당한다.

```javascript
var express = require("express");
var app = express();

app.listen(3000);
```

var app= express()의 app에 반환되는 express()는 실제로 Function요청을 처리하기 위한 콜백으로 Node의 HTTP 서버에 전달되도록 설계된 JavaScript 입니다.
app이 단순 콜백이므로 다음번에 상속되지 않고 동일한 코드 기반의 HTTP 및 HTTPS 버전을 모두 쉽게 제공 가능 하다.

```javascript
var express = require("express");
var https = require("https");
var http = require("http");
var app = express();

http.createServer(app).listen(80);
https.createServer(options, app).listen(443);
```

app.listen() 메서드는 http.Server 개체를 반환하다.
또한 HTTP의 경우 다음과 같은 소스코드이지만 app.listen()메서드를 사용하면 더 편리하다

```javascript
app.listen = function () {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);
};
```

## **따라서 experss에서 제공하는 app.listen()메서드는 간결하고 편리하게 지정된 호스트나 포트등 서버객체에 연결을 시켜준다.**

- UNIX(유닉스) 소켓?
  동일한 시스템에서 실행되는 프로세스들 사이의 양방향 데이터 교환을 허용하는 프로세스 간 통신 메커니즘.

- 바인딩(Binding)
  일반적인 의미에서, 속성과 개체 사이 또는 연산과 기호 사이와 같은 연관(Association)이다.
  바인딩이 일어나는 시간을 바인딩 시간이라고 부르며, 바인딩은 언어 설계 시간, 언어 구현시간, 컴파일 시간, 링크 시간, 적재 시간, 또는 실행 시간에 일어날 수 있다.
  - 바인딩 타임?
    프로그램에서 변수들이 갖는 속성이나 값이 완전히 결정되는 시간(변수명에 속성이 연결되는 시간)

---

[http://expressjs.com/ko/api.html#app.listen_path_callback](http://expressjs.com/ko/api.html#app.listen_path_callback)
[NodeJS http.createServer()](https://nodejs.org/ko/docs/guides/anatomy-of-an-http-transaction/)
