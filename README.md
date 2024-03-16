![image](https://github.com/jhchoi1182/jihyeon_blog/assets/116577489/7ddca504-e73d-4f64-8f75-a52a1f866c8e)

## 개인 블로그
개인 기록용 블로그

## 기술 스택

<div>

<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white">
<br>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
<br>
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white"/>


</div>

<br><br>

## 특징
* Next.js의 서버 사이드에서 Node.js 및 Markdown을 활용한 풀스택 개발
* 검색 기능
* SEO 최적화
  * Next.js의 API를 이용해 페이지별 렌더링 최적화(블로그의 상세 게시글 - SSG, 블로그 메인 페이지 - SSR)
  * 정적 sitemap 생성 후 Google Search Console에 페이지 색인 생성해 구글 검색 결과에 노출되도록 구현
* UX 향상을 위한 이미지 프리로드
  * 카드 아이템에 마우스 오버 시 관련 상세 페이지의 이미지 자동 프리로드
  * set 자료형을 이용해 한 번 프리로드 된 이미지에 대해 캐시 메커니즘을 적용하여 최적화 구현
* 다크 모드를 구현해 UX 개선
* ~~드래그 앤 드롭(생각처럼 안 이뻐서 삭제)~~

<br>

## 트러블 슈팅

### Next.js에서의 전역 상태 관리

<br>

클라이언트 컴포넌트의 하위 컴포넌트이더라도 상태값을 사용하지 않으면 클라이언트 컴포넌트가 아니라 서버 컴포넌트로 작동한다는 매커니즘을 학습

1. 사이드바를 클라이언트 컴포넌트로 기획하면서 레이아웃에 Context API를 사용

2. 모든 컴포넌트들이 클라이언트 컴포넌트로 동작하는 문제 발생

3. 전역 상태 관리 라이브러리를 설치해 사용해 봐도 같은 문제 발생

4. 생각해 보니 레이아웃 컴포넌트는 SEO를 최적화하기 위해서라도 반드시 서버 컴포넌트로 동작해야 했기 때문에 접근 자체가 틀렸다는 것을 인지

5. 학습한 내용을 토대로 응용해 Context 컴포넌트를 따로 만들고 페이지를 children으로 감싸는 방법으로 문제 해결

**컴포넌트 별 렌더링 결정 방식에 대해 이해**
