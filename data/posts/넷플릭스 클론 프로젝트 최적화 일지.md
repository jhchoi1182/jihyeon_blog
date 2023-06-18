지난 프로젝트에선 lighthouse를 가지고 최적화를 진행했었는데, 점수가 너무 들쑥날쑥해서 점수를 믿기가 좀 어려웠다.

90점대가 잘 나오다가도 한 번씩 70점대가 뜨면 믿고 싶다가도 믿을 수가 없게 되는 것이다.

그래서 **이번엔 profiler을 통해 각 컴포넌트의 렌더링 시간을 직접 체크해 가며 최적화를 진행해보고자 한다.**

**이번 최적화의 진행 순서는 메모이제이션 -> 코드 스플리팅 -> 레이지 로딩이 되겠다.**

ㅋㅋ신난다

**측정할 것은 다음과 같다.**

**측정 항목: 'App', 'Home', 'Slide' 컴포넌트**

**a. 'Home' 페이지에서 새로고침을 했을 때 측정 항목의 렌더링 시간을 측정한다.**

**b. 다른 페이지로 왔다 갔다 하다가 'Home' 페이지로 다시 돌아왔을 때 측정 항목의 렌더링 시간을 측정한다.**

**c. 라이트하우스 web vitals 성능 점수를 측정한다.**

각 수치는 10번의 테스트 거쳐 평균치에 근접한 값을 기준으로 할 것이며, 2번의 경우 순서는 Tv -> Home -> Movie -> Tv -> Home으로 한다.

**또한, 모든 실험은 슬라이드 아이템의 개수가 기본 세팅인 6개일 때(브라우저 너비 1400px 이상)를 기준으로 한다.**

## before

**a. 'Home' 페이지에서 새로고침을 했을 때**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/79db9f40-cda3-40da-868b-22c696abfa93)

**b. 왔다갔다하다가 'Home' 페이지로 다시 돌아왔을 때**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/1dc6f703-c6dd-4306-b328-893f44dc9ca9)

**c. web vitals**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/c2530305-9363-47e6-9ce9-cb4e0881934e)

**최적화 전 before 결과**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/40f4c697-92b4-4883-981e-b0ffd59d0358)

측정값을 보면 초기 렌더링이라 a가 더 오래 걸릴 줄 알았는데 b가 a보다 오래 걸리는 상황을 확인할 수 있다.

a사진
![image](https://github.com/jhchoi1182/next-blog/assets/116577489/ec4d88f1-bd92-4626-b3a5-4f5c208c8030)

b사진
![image](https://github.com/jhchoi1182/next-blog/assets/116577489/086d6b6d-fefb-455a-a4c5-17656ddc8a15)

a의 경우 b와 다르게 슬라이드 아이템을 렌더링하지 않는 것으로 나오고 있다... 분명히 화면엔 정상적으로 렌더링이 마쳐진 상황인데도 말이다.

일단 계속 진행해보자.

## part1. 메모이제이션 및 렌더링 최적화

**작업 과정**

```
1. 전체적인 코드 리팩토링

2. App에서 context API로 내려주던 로직을 각 페이지로 옮김으로써 App에 있던 헤더와 푸터의 불필요한 리렌더링 방지
-> 헤더와 푸터가 초기 렌더링 시에만 렌더링이 일어나도록 수정

3. 북마크 페이지와 검색 결과 페이지의 아이템에 마우스 올리고 내릴 때마다 아이템 컴포넌트가 리렌더링 되던 로직 변경
-> 초기 렌더링 시에만 렌더링이 일어나도록 수정

4. 메모이제이션 작업
```

2번 작업 빼고는 렌더링 되는 속도가 오히려 늦어지는 작업들일 거라 생각된다.

결과를 한번 보도록 하자.

**a. 'Home' 페이지에서 새로고침을 했을 때**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/ef18b2a8-1843-4624-864e-d8c9e5ccc25e)

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/489e4311-d787-46e0-a508-8433d94fa065)

**b. 왔다 갔다 하다가 'Home' 페이지로 다시 돌아왔을 때**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/ea4b2b07-2b0f-4ac2-a427-0e7effff24eb)
App, 헤더, 푸터가 리렌더링에 최적화 된 모습

**c. web vitals**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/dcf07dcc-3847-47be-b37d-69ef0135aabc)

**part1 결과**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/800489f2-968c-4ea0-accf-c84d9a47d3e0)

**여러 번 측정해 본 결과, 예측대로 수치들이 미세한 차이지만 좀 더 높게 나오는 것 같다는 느낌을 받을 수 있었다.**

슬라이드 아이템과 슬라이드 컴포넌트 모두 메모이제이션이 들어갔기에 어찌 보면 당연한 결과일 것이다.

**속도는 미세하게 늦어졌지만 브라우저 너비를 변경할 때마다 1px 단위로 리렌더링이 일어나는 것을** 슬라이드 아이템 수가 바뀔 때만 리렌더링 되도록 **바꿨으니 결과적으론 좀 더 나은 방향으로 수정된 셈이라고 볼 수 있겠다.**

**web vitals의 경우**는 사실 1번 작업 과정인 코드 리팩토링만 했을 때도 저 정도 점수가 나왔었다.

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/145203d2-033d-463c-9c2d-e1016d08b1a5)

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/50dfdc7f-246f-4d57-84c5-7585e454c2a1)

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/936f7f28-f652-4193-bdeb-cc5d4148683c)

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/1651e8b3-4a5b-4d0d-886b-77c2f13dcccb)

**비교를 해보면 전반적으로 퍼포먼스가 좋아지고 번들 크기도 아~주 약간 줄었는데, 결정적으로 CLS가 개선되었다.**

문제는 CLS는 의도한 것이 아니라는 것...(사실 딱히 레이아웃을 건드린 게 없음에도 개선되었다;)

의도치 않은 개선까지 이루어졌지만 어쨌든 **로직들을 바꾸고 코드를 정리한 것은 유효했다.**

## part2. 코드 스플리팅

App과 페이지 컴포넌트들을 코드 스플리팅해주었다.

그 결과

**a. 'Home' 페이지에서 새로고침을 했을 때**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/b5d29dce-296d-4615-bfe4-f249caa9b9a3)

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/56c36c0a-d701-4288-866a-8c1f12611a2c)

**b. 왔다 갔다 하다가 'Home' 페이지로 다시 돌아왔을 때**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/e1abcbfa-4f35-40bf-90ee-fd71c06c1eaa)

**c. web vitals**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/937ea43e-2afe-4ee7-a057-d259e83def9c)

**part2 결과**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/a92a6a6a-dac3-4e27-b9b9-151420f8d05f)

**로딩 스피너가 일찍 튀어나올 뿐 렌더링에 유의미한 차이는 없었다.**

오히려 **라이트 하우스 점수가 더 떨어졌는데,**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/93ae201f-da7e-4105-91c2-b7ce7945c85f)

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/16cd3767-b1e9-4027-82aa-f4d74e475c24)

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/9c8c1246-2a04-48c2-9019-b8216139c5b6)

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/b2c0920b-b081-4962-944f-9fc6e6aa4a01)

**큰 차이는 없고 번들량이 약간 줄어들며**(거의 모든 컴포넌트들이 페이지마다 서로 돌려쓰이다 보니 번들량을 줄이는 덴 한계가 있었나 보다) **개선되었음에도 로딩 스피너가 레이아웃의 변경을 일으키는 것 때문에 성능 점수가 대폭 떨어졌다.**

즉, 로딩 스피너가 생기고 사라지는 것 때문에 점수가 떨어졌다는 얘기.

**이 경우 홈과 똑같은 레이아웃을 가진 스켈레톤 레이아웃을 로딩 스피너로 사용하면 해결될 문제였지만, 넷플릭스는 아래 사진과 같은 로딩 스피너를 사용했기에 그냥 놔두기로 했다.**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/7b57c31a-6f8b-4737-8bed-213d6a5d93ce)

**로딩 스피너의 추가는 결국 필요한 작업이기도 했고, 조금이라도 성능적인 최적화가 이루어졌음을 확인한 이상 코드 스플리팅한 작업을 되돌리지 않고 그대로 진행하면 될 것이다.**

part3. 퍼포먼스 개선
렌더링 시간을 줄이기 위한 방법이 아직 남아있다.

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/4c11e02d-4f98-484b-81d4-707602639384)

슬라이드 하나당 약 8ms정도씩 소요되고 있는 걸 볼 수 있다.

**만약 초기 렌더링 시 화면에 보이는 슬라이드만 렌더링 시키고 이후 사용자가 스크롤을 내렸을 때 나머지 슬라이드를 차례로 렌더링 시킬 수 있다면 전체적인 렌더링 시간도 빨라지고 서버로 가는 요청 역시 줄일 수 있을 것이다.**

바로 작업에 돌입!

**a. 'Home' 페이지에서 새로고침을 했을 때**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/d14a095c-5dd2-4bf8-bc54-b1668e6dfc06)

**b. 왔다 갔다 하다가 'Home' 페이지로 다시 돌아왔을 때**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/eb1b67dc-12f3-4da1-948b-033023cfa643)

**c. web vitals**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/df8af067-033d-47fc-ae2b-dffc6ecfdc03)

**part3 결과**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/f07fd8e7-72c4-4ded-b125-168513996cae)

꽤나 드라마틱한 결과가 나왔다.

**a의 경우** part3 작업을 진행하면서 **각 페이지에 로직이 추가가 됐는데** 아무래도 **그 로직들이** 실행되는 시간이 더해져 **suspense를 연장시킨 모양**이다.

**그러나 작업은 첫 렌더링이 끝난 뒤 페이지를 이동하게 될 때부터 힘을 발휘했다.** 체감 상으로 확실히 빨라진 것이 느껴졌으며 스크롤을 내릴 때마다 하나씩 추가되는 슬라이드에 어떠한 이질감이나 지연행위도 없었다. (이미지를 url로 받아와 사용하다 보니 이미지가 로딩되는 것이 보이는 문제는 생김)

**web vitals 점수 역시 대폭 개선되었다. CLS 점수가 반토막 난 탓이다.**

반토막 난 이유는.. 슬라이드가 하나로 줄면서 레이아웃 크기가 줄어든 것이 영향을 미친 것 아닐까 추측된다.

---

**5.30일 추가**

추가적으로 리팩토링을 진행하다보니 web vital점수가 80점대로 떨어졌다.

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/f6047e0b-2b35-4c6a-b268-8b0ca5986b83)

**전체적인 퍼포먼스는 개선이 되었으나 결국 CLS가 가장 큰 문제였는데, 원래는 그냥 놔두려고 했으나 90점대가 나오던 것이 떨어지니 도저히 그냥 지나칠 수가 없다.**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/ecaa4d72-84d3-4758-a9a8-1e317be80069)

해당 section은 푸터다.

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/24672dae-3969-4064-8498-8569e6ac7d1b)

결국 로딩중일 땐 보이던 푸터가 로딩이 끝나면 화면 밖으로 밀리면서 생기는 문제라는 얘기였다.

**나는 해결법으로 로딩 스피너에 height: 100vh를 주는 방법을 선택했다.**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/a5135ace-4337-4edd-b887-ac5f3bcf1bd8)

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/41534efe-b42d-41c8-87d1-6fbdd52053be)

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/f8888240-ad7d-4d48-8fba-34175a386499)

**최종 결과**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/a60f90e6-2a33-4874-bb1c-7a49b66e5c6f)
