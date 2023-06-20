객체는 생성될 때 내부 프로퍼티([[Prototype]])를 가지게 되는데 이 내부 프로퍼티가 다른 객체를 참조하는 경우 참조 대상을 '프로토타입(prototype)'이라 부른다.

프로토타입은 객체의 상위(부모) 역할을 하는 객체이며, 객체는 프로토타입의 속성과 메서드를 상속받아 사용할 수 있다.

그렇게 객체의 [[Prototype]] 연결을 따라 상위 프로토타입을 찾아가는 것을 '프로토타입 체인'이라고 한다.

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/fe34c287-dc96-4bdc-b51f-8e5c15a7394a)

프로토타입은 부모 객체이지만, 모든 객체가 동일한 프로토타입을 참조한다고 보긴 어렵다. 생성될 때 자신만의 프로토타입을 가지게 된다는 것이 맞을 것이다.

두 코드를 잘 비교해보자.

```
class A {
  method() {
    console.log('A 메서드 호출');
  }
}

class B {}

B.prototype = new A();

const b = new B();
b.method(); // "A 메서드 호출"
```

```
let arr = [1, 2, 3];

// arr은 Array.prototype을 상속받았나요?
alert( arr.__proto__ === Array.prototype ); // true

// arr은 Object.prototype을 상속받았나요?
alert( arr.__proto__.__proto__ === Object.prototype ); // true

// 체인 맨 위엔 null이 있습니다.
alert( arr.__proto__.__proto__.__proto__ ); // null
```

그리고 이런 것도 가능하다.

**메서드 빌려오기**

```
let obj = {
  0: "Hello",
  1: "world!",
  length: 2,
};

obj.join = Array.prototype.join;

alert( obj.join(',') ); // Hello,world!
```

그러나 이 경우 사이드 이펙트와 배열의 내장 메서드가 객체의 속성으로 할당되며 생기는 메모리 문제를 주의해야 한다.
