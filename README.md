![image](https://github.com/jhchoi1182/jihyeon_blog/assets/116577489/7ddca504-e73d-4f64-8f75-a52a1f866c8e)

## 개인 블로그
개인 기록용 블로그.
<br>
<br>
초기에 기술 블로그 목적으로 사용하다가 코딩 테스트 문제 풀이 기록을 목적으로 변경해서 사용 중
<br>
<br>

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
* Node.js와 md을 활용한 풀스택 개발
* 다크 모드
* 검색 기능
* SEO 최적화
* 아이템 카드에 마우스 호버 시 상세 페이지 이미지 프리로드
* ~~드래그 앤 드롭(생각처럼 안 이뻐서 삭제한 기능)~~

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
