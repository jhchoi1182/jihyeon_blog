https://www.acmicpc.net/problem/1074

z모양으로 증가하는 수열에서 좌표가 주어지면 몇번째 z인지 구하는 문제

z를 재귀적으로 호출하며 몇 번 호출되었는지 카운트한다.

```
def solve(n, x, y):
    global result
    if n == 2:
        if x == X and y == Y:
            print(result)
            return
        result += 1
        if x == X and y + 1 == Y:
            print(result)
            return
        result += 1
        if x + 1 == X and y == Y:
            print(result)
            return
        result += 1
        if x + 1 == X and y + 1 == Y:
            print(result)
            return
        result += 1
        return
    solve(n / 2, x, y)
    solve(n / 2, x, y + n / 2)
    solve(n / 2, x + n / 2, y)
    solve(n / 2, x + n / 2, y + n / 2)

result = 0
N, X, Y = map(int, input().split(' '))
solve(2 ** N, 0, 0)

```
