n1 = input()
n2 = input()
n3 = input()
n4 = input()
n5 = input()
cont = -1

lista = [n1,n2,n3,n4,n5]

for x in lista:
    cont += 1
    if len(x) == 1:
        lista[cont] = "0" + x

print(f"{lista[0]}:{lista[1]} {lista[2]}/{lista[3]}/{lista[4][-2:]}")



