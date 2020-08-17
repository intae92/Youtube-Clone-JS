## Babel

최신의 자바스크립트 문법은 브라우저가 이해하지 못하므로 babel을 이용하여 브라우저가 이해 할수 있는 문법으로 변환 해준다.

- babel은 자바스크립트 컴파일러이다.
- ES6, ES7등 최신 자바스크립트 문법을 사용할 수 있어서 생산성이 높아 진다.

[https://babeljs.io/docs/en/babel-preset-env](https://babeljs.io/docs/en/babel-preset-env)

---

## 설정

### 커맨드 라인에 입력

npm install @babel/node
npm install @babel/core
npm install @babel/preset-env
npm install core-js@3

### .babelrc 파일 생성후 코드 작성

.babelrc 파일 생성

```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": 3
      }
    ]
  ]
}

```

### package.json 파일에서 설정

package.json 파일에서

```
"scripts"{
    "start": "babel-node index.js"
}
```

### 최신 버전 소스 작성

index.js 파일에서

import "core-js";
import express from "express";

---

### 저장시 자동 서버 재시작 nodemon

저장할 때마다 서버 새로 시작 nodemon
-D 는 프로젝트가 아니라 개발자에게 필요한 패키지 설치를 위해
npm install nodemon -D
이렇게 설치됨
package.json 파일에 "devDependencies 생성됨

```
"devDependencies": {
"nodemon": "^2.0.4"
},
```

### package.json 파일에서 설정

```
"scripts"{
"start": "nodemon --exec babel-node index.js"

}
```
