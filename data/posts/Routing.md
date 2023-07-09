## Parallel Routes
동일한 레이아웃에서 하나 이상의 페이지를 동시에 렌더링시킬 수 있다.

핵심 컨텐츠들을 여러 개로 나누어 관리하거나 분기처리할 때 유용하다.

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/1c80fbdd-bb0b-49be-bf7e-3087228c4f2e)

```
export default function Layout(props: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <>
      {props.children}
      {props.team}
      {props.analytics}
    </>
  )
}
```

컨벤션은 '@폴더명'을 사용하며, 해당 폴더 안의 layiut, loading 등은 각각 독립적으로 작동한다.

또, '@폴더명'은 경로에 영향을 주지 않기 때문에 파일 경로 /@team/members의 경우 /members에서 액세스할 수 있다.

page 렌더링에 실패할 경우 default를 설정할 수 있다.

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/8e062d29-360c-49a7-89df-1a6c27eae51a)

```
export default function Default() {
  return null
}
```

그리고 이것을 이용해 손 쉽게 모달 기능을 구현할 수도 있다.

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/46eb998e-0cd1-4c5e-bb2e-45c4d3c757c4)

이 경우 모달을 닫을 때는 하드 네비게이션을 통해 닫아야 모달의 캐시가 남지 않는다. (공식 문서에는 Link로도 가능하다는데 해보니 null로 안 뜨고 경로가 이동되어 모달이 닫혀야함에도 안 닫힌다.)

```
'use client'
import { useRouter } from 'next/navigation'
import { Modal } from 'components/modal'

export default async function Login() {
  const router = useRouter()
  return (
    <Modal>
      <span onClick={() => router.back()}>Close modal</span>
      <h1>Login</h1>
      ...
    </Modal>
  )
}
```

## Intercepting Routes

/feed라는 경로에서 /photo/123로 이동해 모달을 여는 경우 일반적으로 /feed의 컨텐츠가 보이지 않아야 하지만 Intercepting routes 기능을 사용하면 /feed의 레이아웃 내에서 photo 경로를 로드할 수 있다.

**컨벤션**

(.) 같은 레벨의 경로

(..) 한 단계 상위 레벨의 경로

(..)(..) 두 단계 상위 레벨의 경로

(...) app경로

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/26f35907-6a1d-466e-b9c8-66874efe2e97)

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/14ee1c8a-530e-412e-9b24-7536794c4eab)
