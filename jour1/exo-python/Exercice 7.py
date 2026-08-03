numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9)

pair = 0
impair = 0

for n in numbers:
    if n % 2 == 0:
        pair += 1
    else:
        impair += 1

print("Nombre de nombres pairs :", pair)
print("Nombre de nombres impairs :", impair)
