def merge_sort(array):
# 1개가 될 때까지 재귀적으로 쪼갬
    if len(array) <= 1:
        return array

    mid = len(array) // 2
    left = merge_sort(array[:mid])
    right = merge_sort(array[mid:])

# 왼쪽, 오른쪽 모두 남았을 경우
    i, j, k = 0, 0, 0
    while len(left) > i and len(right) > j:
        if left[i] > right[j]:
            array[k] = left[i]
            i += 1
        else:
            array[k] = right[j]
            j += 1
        k += 1

# 왼쪽, 오른쪽 한 쪽을 먼저 다 채워넣었을 경우
    while len(left) > i:
        array[k] = left[i]
        k += 1
        i += 1
    while len(right) > j:
        array[k] = right[j]
        k += 1
        j += 1

    return array
