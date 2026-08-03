s = input("Saisissez une chaîne ")

letr = 0
chif = 0

for c in s:
    if c.isdigit():
        chif += 1
    elif c.isalpha():
        letr += 1

print("Lettres", letr)
print("Chiffres", chif)
