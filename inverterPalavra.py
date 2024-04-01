palavra = str(input())

inverPalavra = ""

for x in range(len(palavra),0,-1):
    inverPalavra += palavra[x-1]

print(inverPalavra)