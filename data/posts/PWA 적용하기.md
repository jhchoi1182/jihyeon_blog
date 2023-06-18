기존의 프로젝트에 PWA를 적용하는 방법을 알아보자.

## 1. 파일 가져오기

빌더 없이도 PWA 템플릿을 이용하면 간편하게 기존 프로젝트를 PWA로 탈바꿈시킬 수 있다.

npx create-react-app my-app --template cra-template-pwa
원하는 경로에 새롭게 CRA를 해준 뒤, 새롭게 생성된 프로젝트의 src 폴더에 있는

"service-worker.js" 와 "serviceWorkerRegistration.js" 파일을 기존 프로젝트의 src 폴더에 가져오도록 하자.

## 2. index.js에 코드 추가하기

아래 코드를 index.js에 추가해준다.

```
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

serviceWorkerRegistration.register();
```

```
//예시

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Redux/Config/ConfigStore';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
serviceWorkerRegistration.register();

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
```

## 3. icon 설정

https://favicomatic.com/

해당 사이트에서 아이콘으로 사용할 512x512 이미지를 들고가서 변환을 해준다.

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/83b9816d-9685-4e7c-9b07-c20ea3e09536)

사진처럼 아래를 선택하고 이미지를 업로드한다.

변환에 성공하면 아래와 같은 화면이 나오는데 해당 텍스트들을 전부 복사해 public/index.html의 head 태그에다가 붙여넣기 해준다.

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/98113d5d-b25f-47d1-aa79-967ae15b85ba)

다운로드 된 압축파일을 풀어보면 보이는 code라는 텍스트 파일에도 동일한 코드들이 적혀있다.

index.html에 아래 코드가 없다면 아래 코드들도 추가해준다.

```
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
```

※ pwa 적합성 검사에서 precomposed가 오래됐다는 메시지가 나올 수도 있는데, 그 경우 precomposed를 아래처럼 뗴주면 된다.

```
    <link rel="apple-touch-icon" sizes="57x57" href="apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="apple-touch-icon-144x144.png" />
```

이후 다운로드 된 이미지 파일들을 프로젝트 폴더 안에다가 옮긴 뒤 public/manifest.json에다가 아래랑 똑같이 적어준다.

※ src는 이미지 파일들을 넣은 경로를 적어준다!

```
"icons": [
    {
      "src": "./icons/apple-touch-icon-57x57.png",
      "sizes": "57x57",
      "type": "image/png"
    },
    {
      "src": "./icons/apple-touch-icon-60x60.png",
      "sizes": "60x60",
      "type": "image/png"
    },
    {
      "src": "./icons/apple-touch-icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "./icons/apple-touch-icon-76x76.png",
      "sizes": "76x76",
      "type": "image/png"
    },
    {
      "src": "./icons/apple-touch-icon-114x114.png",
      "sizes": "114x114",
      "type": "image/png"
    },
    {
      "src": "./icons/apple-touch-icon-120x120.png",
      "sizes": "120x120",
      "type": "image/png"
    },

    {
      "src": "./icons/apple-touch-icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "./icons/apple-touch-icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    // 다운받은 파일에 없을 경우 변환에 사용했었던 512x512를 넣어주면 된다.
    {
      "src": "./icons/favicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    // 64x64 icon이 변환된 파일에 없어서 png를 64로 리사이징해 사용함
    // png가 아닌 icon 파일을 사용해도 되지만 64x64크기는 맞춰줘야 한다.
    {
      "src": "./icons/favicon-64x64.png",
      "sizes": "64x64",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
```

## 4. package.json 설정

처음 CRA했었던 새 프로젝트로 가서 package.json에 있는 코드들을 복사해 기존 프로젝트의 package.json에 붙여넣는다.

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/8063109f-22e1-4e29-8083-429dcc15c4c0)

## 5. npm install

인스톨하면 끝이다.

## 6. PWA 적용 확인

배포된 주소로 간 뒤 크롬 확장 프로그램인 light house를 사용해 검사해보면 설치 가능하다는 메시지와 함께 빨간색 박스처럼 다운받을 수 있는 것을 확인할 수 있다.

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/1adde0a2-4174-495f-bdfa-42d6e2660dc7)
