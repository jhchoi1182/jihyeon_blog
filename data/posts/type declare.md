---

'개체 리터럴은 알려진 속성만 지정할 수 있으며 '{ name?: string | null | undefined; email?: string | null | undefined; image?: string | null | undefined; }' 형식에 'username'이(가) 없습니다.'

---

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/7b6a72cc-1efe-46da-be3c-23ffbd10f2f6)

기존 라이브러리 없는 속성을 지정할 경우 이러한 타입 오류가 발생한다.

이 경우 라이브러리에서 선언된 타입에 속성을 추가해주면 된다.

## 라이브러리에 선언 된 타입 확인하기

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/49daa9f8-d5a4-4548-8bab-ca83bbbf7265)

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/4c049497-aed2-4d3d-8bb8-a9fb5098ea94)

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/4df71445-ef45-4b6c-ac17-6db001b1f195)

DefaultSession에 usename이라는 타입을 추가해주면 된다.

## 추가하기

```
// src\types\next-auth.d.ts

import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      username: string;
    } & DefaultSession['user'];
  }
}
```

## 전역 선언

```
// 전역 변수
declare const pi = 3.14;

// 전역 함수
declare namespace myLib {
  function greet(person: string): string;
  let name: string;
}
myLib.greet('캡틴');
myLib.name = '타노스';
```
