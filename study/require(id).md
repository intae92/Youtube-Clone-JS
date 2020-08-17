## node.js에서 require() 어떻게 작동하는지 알아본다

[https://nodejs.org/api/modules.html#modules_require_id](https://nodejs.org/api/modules.html#modules_require_id)공식사이트

---

require(id)

- id <string> 모듈 이름 또는 경로
- 반환: <any> 내 보낸 모듈 콘텐츠

모듈, JSON 로컬파일, node_modules의 빌트인된 모듈을 가져와서 사용할수 있다.

```javascript
const myLocalModule = require("./path/myLocalModule");
const jsonDate = require("/path/filename.json");
const crypto = require("crypto");
```
