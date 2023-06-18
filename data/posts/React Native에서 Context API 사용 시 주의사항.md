리액트 네이티브에서 context를 사용하다가 아래와 같은 오류를 만나버렸다..

---

Require cycle: src\components\Calendar\CalendarContainer.jsx ->
src\components\Calendar\Day.jsx ->
src\components\Calendar\CalendarContainer.jsx

Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.

---

아래는 해당 코드다.

CalendarContainer.jsx

```
export const CalendarContext = createContext({});

const CalendarContainer = () => {
.
.
.
  return (
    <CalendarContext.Provider value={{ today, selectedYear, selectedMonth, prevMonth, nextMonth }}>
      <View style={styles.container}>
        <Header />
        <Week />
        <Day />
      </View>
    </CalendarContext.Provider>
  );
};
```

Day.jsx

```
const Day = () => {
  const { today, selectedYear, selectedMonth, prevMonth, nextMonth } = useContext(CalendarContext);
  .
  .
  .
  return <View style={styles.days}>{returnDays()}</View>;
};

export default Day;
```

부모컴포넌트에서 내려주고 내려준 것을 자식 컴포넌트인 Day에서 뽑아서 쓰고 있다.

일단 나는 CalendarContainer > Day > CalendarContainer로 사이클이 일어나고 있다는 것에 주목했다.

부모 컴포넌트에서 내려준 것을 통해 자식 컴포넌트가 영향을 받고, 그것이 반영됨으로써 부모 컴포넌트가 다시 영향을 받는다.

...근데 이게 context의 용법 아닌가?;

고민하던 나의 머릿속에 한 가지 생각이 스쳐 지나갔다.

'혹시 자식 컴포넌트에서 내려받은 데이터를 setState 해주고, 바로 그것이 부모 컴포넌트와 다른 자식 컴포넌트들에 영향을 주고 있어서 이런 오류가 뜨는 것일까?'

사실 리액트에서 이미 그런 식으로도 써봤었는데 아무런 문제없었지만, 일단 네이티브에서는 용법이 다를 수 있는 거니까.

그래서 나는 setState가 일어나고 있는 prevMonth, nextMonth 로직을 props에서 지워봤다.

만약 위의 가정이 맞다면 오류는 사라져야 할 것이다.

결과는...

---

Require cycle: src\components\Calendar\CalendarContainer.jsx ->
src\components\Calendar\Day.jsx ->
src\components\Calendar\CalendarContainer.jsx

Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.

---

여전했다.

나는 검증 차 네이티브가 아닌 리액트에서도 다시 테스트를 해보기로 했다.

부모 컴포넌트에서 내려주고 자식 컴포넌트에서 뽑아 쓰는 간단한 로직을 만들었다.

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/4146a2a0-e408-41a5-9fe6-4396bb7fe588)

결과는...

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/e26da12b-376f-4ce1-8e29-5bdd0dbb3997)

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/f6166431-2e49-402d-9ffd-c9222dc18853)

역시나 문제없다.

뭐지?;;

그럼 진짜 뭐가 문제지?;;;;

영향을 주고 있는 게 없는데 영향을 주고 있다니?

리액트에선 문제없는 게 네이티브에선 문제가 있다니??

이건 네이티브에서 내가 모르는 context의 용법이 있다는 것 말곤 설명이 되지 않았다.

그렇다면 검색해 보는 수밖에...

그렇게 한참의 검색 끝에, 나는 한 글을 발견할 수 있었다.

**이 주기를 끊으려면 공유하고 있는 context를 별도의 파일로 분리하라는 글이었다!**

**그러니까 다시 말해,**

**CalendarContainer.jsx에 있는 CalendarContext를**

```
export const CalendarContext = createContext({});

const CalendarContainer = () => {
```

**아래처럼 별도의 파일로 분리해서**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/530d11f8-f19e-456d-b8f8-794670bd4893)

**부모 컴포넌트와**

```
import { CalendarContext } from "../../Hooks.js/Hook";

const CalendarContainer = () => {
.
.
.
  return (
    <CalendarContext.Provider value={{ today, selectedYear, selectedMonth, prevMonth, nextMonth }}>
      <View style={styles.container}>
        <Header />
        <Week />
        <Day />
      </View>
    </CalendarContext.Provider>
  );
};
```

**자식 컴포넌트**

```
import { CalendarContext } from "../../Hooks.js/Hook";

const Day = () => {
  const { today, selectedYear, selectedMonth, prevMonth, nextMonth } = useContext(CalendarContext);
  .
  .
  .
```

**모두 뽑아서 쓰라는 것이다.**

해결!
