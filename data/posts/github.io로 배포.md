**1. 패키지 설치**

npm i gh-pages --save-dev

yarn add -D gh-pages

**2. pakage.json에 추가**

// package.json

```
"homepage": "https://깃허브이름.github.io/레포지토리이름"
```

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/9716794e-4b2f-47f0-b9d3-47208fa03e2e)

```
// package.json

    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
```

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/8a79fb82-5d49-40e6-a700-a01d183f930f)

**3. 라우터의 base url을 다음과 같이 수정**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/30a09d0b-9ccb-4610-b362-b32cf2e629f7)

**4. 커밋 후 푸쉬**

**5. 터미널 입력**

npm run deploy

**6. 배포 주소로 가서 확인**

배포에 5분 정도 소요될 수 있음
