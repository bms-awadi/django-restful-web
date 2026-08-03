temp = input(
    "Saisissez la température que vous souhaitez convertir ? (par exemple, 45F, 102C etc.) : "
)

degree = int(temp[:-1])
F_C = temp[-1].upper()

if F_C == "C":
    print(f"La température en Fahrenheit est de {round(9 / 5 * degree + 32)} degrés.")
else:
    print(f"La température en Celsius est de {round((degree - 32) * 5 / 9)} degrés.")
