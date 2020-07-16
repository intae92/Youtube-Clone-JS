서버

1. 서버란?
   인터넷과 24시간 연결된 컴퓨터

2. Express란?
   Node.js 웹 애플리케이션 프레임워크
   Node.js를 위한 빠르고 개방적인 간결한 웹 프레임워크

3. [프레임워크 vs 라이브러리 차이점 설명해보자](https://webclub.tistory.com/458)

   - 프레임워크(Framework)
     뼈대나 기반구조를 의미하며, 제어의 역전 개념이 적용된 기술입니다.
     소프트웨어에서의 프레임워크는 '소프트웨어의 특정 문제를 해결하기 위해서 상호 협력하는 클래스와 인터페이스의 집합' 이라 할 수 있으며, 완성된 어플리케이션이 아닌 프로그래머가 완성시키는 작업을 해야합니다.
     객체 지향 개발을 하게 되면서 통합성, 일관성의 부족이 발생되는 문제를 해결할 방법 중 하나라고 할 수 있습니다.

   - 라이브러리(Library)
     단순 활용가능한 도구들의 집합을 말합니다.
     즉, 개발자가 만든 클래스에서 호출하여 사용, 클래스들의 나열로 필요한 클래스를 불러서 사용하는 방식을 취하고 있습니다.

   - 프레임워크 라이브러리 차이
     **제어 흐름에 대한 주도성이 누구에게 / 어디에 있는가에 따라 구분 됩니다.**
     프레임워크는 전체적인 흐름을 스스로가 쥐고 있으며 사용자가 그 안에서 필요한 코드를 작성하는 반면에, 라이브러리는 사용자가 전체적인 흐름을 만들며 라이브러리를 가져다 쓰는 것이라고 할 수 있습니다.

> 다시 프레임워크 라이브러리 차이 정리 할것!
> 제어의 역전

4.  [NPM(node package manager)](https://poiemaweb.com/nodejs-npm)
    npm은 자바스크립트 패키지 매니저이다. Node.js에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할과 패키지 설치 및 관리를 위한 CLI(Command line interface)를 제공한다.
    (자신이 작성한 패키지를 공개할 수도 있고 필요한 패키지를 검색하여 재사용 할수도 있다.)

    - 모듈이란?
      애플리케이션을 구성하는 개별적 요소를 말한다. 일반적으로 파일 단위로 분리되어 있으며 필요에 따라 애플리케이션은 명시적으로 모듈을 로드한다. 모듈은 애플리케이션에 분리되어 개별적으로 존재하다가 애플리케이션의 로드에 의해 비로소 애플리케이션의 일원이 된다. 모듈은 기능별로 작성되므로 개발효율성과 유지보수성의 향상을 기대할 수 있다.
      즉, 재사용이 가능한 코드의 집합입니다.(개발자가 직접 만들수도 있고 다른 사람이 만든 것을 설치받아 사용 가능하다)

5.  Node.js개발환경 npm
    (nodeJs 다운로드 받으면 npm도 설치됨)
    터미널에서

    [npm init](https://heropy.blog/2018/02/18/node-js-npm/)

    - package.json 파일 생성
    - package.json은 프로젝트 정보와 의존성을 관리는 문서(어느 환경에서도 동일한 개발 환경을 구축할 수 있게 해줌)
      npm install express
    - express 설치

    npm install

    - package.json 파일에서 dependencies(패키지의 배포 시 포함될 의존성 모듈들)를 찾아 필요한 모듈을 다운로드함

6.  [Express 사용](https://www.npmjs.com/package/express)

    ```javascript
    const express = require("express");

    const app = express();

    app.get("/", function (req, res) {
      res.send("Hello World");
    });

    app.listen(3000);
    ```