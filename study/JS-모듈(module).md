모듈(module)

---

### 모듈이란?

개발하는 애플리케이션의 크기가 커지면 언젠간 파일을 여러 개로 분리해야 하는 시점이 오는데 이때 분리된 파일 각각을 '모듈'이라고 부르며 모듈은 대개 클래스 하나 혹은 복수의 함수로 구성된 라이브러리 하나로 구성이 되어있다.

즉, 모듈은 단

[module-toast](https://ui.toast.com/weekly-pick/ko_20190418/)

[module](https://velog.io/@widian/%EC%9B%B9%EC%97%90%EC%84%9C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AA%A8%EB%93%88-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)

[Node.js로 ES6코드 실행하기 바벨](https://www.daleseo.com/js-babel-node/)
번들러

번들러는 의존성이 있는 모듈 코드를 하나(또는 여러 개)의 파일로 만들어주는 도구이다. 브라우저 환경에서는 CommonJS나 일부 ES6 Module로 작성된 코드(크롬과 같은 최신 브라우저에서는 ES6 Module을 지원한다)는 바로 실행할 수가 없으므로 모듈 코드를 분석하고 자바스크립트 모듈 스펙에 따라 새로운 코드로 가공이 필요하다(예제 : https://rollupjs.org/repl). 브라우저 환경에서 잘 실행될 수 있도록 가공해주는 것이 번들러의 역할이다. 대표적인 번들러로 RequireJS, Browserify, Rollup, Parcel 등이 있으며, 현재는 webpack이 각광받고 있다.
