드래그 앤 드롭에 필요한 준비물은 다음과 같다.

1. 드래그 시킬 요소의 ref값

2, 뷰 포트를 기준으로 한 마우스 좌표 값 (드래그를 발생시킬 핵심 재료)

3. 드래그 시킬 요소를 기준으로 한 마우스 좌표 값 (요소 내 커서 좌표)

로직의 작동 원리는 다음과 같다.

onMouseMove 이벤트가 발생할 때 목표 요소의 current.style.transform의 translate를 getBoundingClientRect() 좌표값으로 설정해주면 된다.

그러나 이때 getBoundingClientRect()의 좌표값을 직접 넣게 되면 드래그가 되지 않는다. 드래그가 되려면 요소의 좌표가 마우스의 움직임에 따라 계산되어야 하는데 요소의 현재 좌표값을 넣어봐야 아무 소용도 없을 것이다.

그렇기에 해야할 것은 마우스의 좌표값을 이용해 getBoundingClientRect()를 구하는 것.

x축으로만 드래그 되는 경우를 예로 들었을 때, getBoundingClientRect().left의 값을 구하는 과정은 다음과 같다.

1번 과정
clientX(클릭 좌표) - getBoundingClientRect().left(뷰포트 모서리에서부터 요소까지의 왼쪽 거리) = 요소 내 클릭 좌표

2번 과정
clientX(클릭 좌표) - 요소 내 클릭 좌표 = getBoundingClientRect().left

```
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (profileRef.current) {
      const rect = profileRef.current.getBoundingClientRect();
      // 1번 과정
      const offsetX = e.clientX - rect.left;
      setCursorOffset({ x: offsetX });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const { current } = profileRef;

    if (current) {
    // 2번 과정
      const rectLeft = e.clientX - cursorOffset.x;
    // 요소의 좌표값 바꾸기
      current.style.transform = `translateX(${rectLeft}px)`;
    }
  };
```
