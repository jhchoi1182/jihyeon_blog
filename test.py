n = int(input())

seller = dict()

for i in range(n):
    book = input()
    if book not in seller:
        seller[book] = 1
    else:
        seller[book] += 1

max_count = 0
result = ""

for (book, count) in seller.items():
    if max_count < count:
        max_count = count
        result = book
    elif max_count == count:
        result = sorted([result, book])[0]

print(result)
