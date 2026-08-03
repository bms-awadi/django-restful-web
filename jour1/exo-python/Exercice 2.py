nombre_de_valeurs = 3

numbers = []
for i in range(nombre_de_valeurs):
    numbers.append(int(input(f"Input the number {i + 1} ")))

numbers.sort()
milieu = len(numbers) // 2

if len(numbers) % 2 == 0:
    median = (numbers[milieu - 1] + numbers[milieu]) / 2
else:
    median = numbers[milieu]

print(f"Median of the above {nombre_de_valeurs} numbers -")
print(median)
