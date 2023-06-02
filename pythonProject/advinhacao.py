def escolhe_jogo():
    import random
    print("********************************")
    print("Bem vindo ao jogo de advinhação!")
    print("********************************")

    numero_secreto = random.randrange(1, 101)
    total_de_tentativas = 0
    pontos = 1000

    nivel = int(input("Defina o nível que quer jogar: 1 - Fácil, 2 - Médio, 3 - Dificil. sendo os niveis relacionados a quantidade de tentativas."))

    if (nivel == 1):
        total_de_tentativas = 20
    elif (nivel == 2):
        total_de_tentativas = 10
    else:
        total_de_tentativas = 5

    for rodada in range(1, total_de_tentativas+1):
        print(f"Tentativa {rodada} de {total_de_tentativas}")
        chute_str = input("digite o seu palpite: ")
        print("Você digitou o número: ", chute_str)
        chute = int(chute_str)

        acertou = chute == numero_secreto
        maior = chute > numero_secreto
        menor = chute < numero_secreto

        if acertou:
            print(f"Você acertou e fez {pontos} pontos!")
            break
        else:
            if maior:
                print("Voce errou. o número informado foi maior que o numero secreto.")
            elif menor:
                print("Voce errou. o número informado foi menor que o numero secreto.")
            pontos_perdidos = abs(numero_secreto - chute)
            pontos = pontos - pontos_perdidos
        rodada = rodada + 1
    print("Fim de Jogo")

if(__name__ == "__main__"):
    jogar()
