

palavra = str(input())

cont = 0

for x in palavra:
    cont = cont + ord(x)

print(cont%50)

