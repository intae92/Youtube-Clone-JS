디스트럭처링(Destructuring)

---

디스트럭처링은 구조화된 배열 또는 객체를 Destructuring(비구조화 파괴)하여 **개별적인 변수에 할당하는 것**
(배열 또는 객체 리터럴에서 필요한 값만을 추출하여 변수에 할당하거나 변환할 때 유용하다.)

https://poiemaweb.com/es6-destructuring

### 배열

ES6의 배열 디스트럭처링은 배열의 각 요소를 배열로부터 추출하여 변수 리스트에 할당하는데 추출/ 할당 기준은 배열의 인덱스이다.

```javascript
// 필요한 요소만 추출하여 변수에 할당 할때 유용함

const arr = [1, 2, 3];
const [one, two, three] = arr;

console.log(one, two, three); // 1 2 3

let x, y, z;

[x, y] = [1, 2];
console.log(x, y); // 1 2

[x, y] = [1];
console.log(x, y); // 1 undefined

[x, , z] = [1, 2, 3];
console.log(x, z); // 1 3

[x, ...y] = [1, 2, 3];
console.log(x, y); // 1 [2, 3]

const today = new Date(); //Thu Aug 20 2020 22:04:18 GMT+0900 (대한민국 표준시)
const formattedDate = today.toISOString().substring(0, 10); //"2020-08-20"
const [year, month, day] = formattedDate.split("-");
console.log([year, month, day]); // ['2020','08','20']
```

---

### 객체

객체 디스트럭처링은 객체의 각 프로퍼티를 객체로부터 추출하여 변수 리스트에 할당한다. 할당 기준은 프로퍼티 이름(키)이다.

```javascript
const obj = { firstname: "Intae", lastName: "Kang" };

const { lastName, firstName } = obj;
console.log(firstName, lastName); // Intae Kang

// 프로퍼티 키가 prop1인 프로퍼티의 값을 변수 p1에 할당
// 프로퍼티 키가 prop2인 프로퍼티의 값을 변수 p2에 할당
const { prop1: p1, prop2: p2 } = { prop1: "a", prop2: "b" };
console.log(p1, p2); // 'a' 'b'
console.log({ prop1: p1, prop2: p2 }); // { prop1: 'a', prop2: 'b' }

// 아래는 위의 축약형이다
const { prop1, prop2 } = { prop1: "a", prop2: "b" };
console.log({ prop1, prop2 }); // { prop1: 'a', prop2: 'b' }

// default value
const { prop1, prop2, prop3 = "c" } = { prop1: "a", prop2: "b" };
console.log({ prop1, prop2, prop3 }); // { prop1: 'a', prop2: 'b', prop3: 'c' }

//객체 디스트럭처링은 객체에서 프로퍼티 이름(키)으로 필요한 프로퍼티 값만을 추출할 수 있다.
const todos = [
  { id: 1, content: "HTML", completed: true },
  { id: 2, content: "CSS", completed: false },
  { id: 3, content: "JS", completed: false },
];

// todos 배열의 요소인 객체로부터 completed 프로퍼티만을 추출한다.
const completedTodos = todos.filter(({ completed }) => completed);
console.log(completedTodos); // [ { id: 1, content: 'HTML', completed: true } ]

//중첩객체

const person = {
  name: "Lee",
  address: {
    zipCode: "03068",
    city: "Seoul",
  },
};

const {
  address: { city },
} = person;
console.log(city); // 'Seoul'
```

---

### 참고

[https://poiemaweb.com/es6-destructuring](https://poiemaweb.com/es6-destructuring)
