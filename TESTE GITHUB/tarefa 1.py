numConta = int(input('informe o total da conta: '))
numPessoas = int(input('informe o numero de pessoas na mesa: '))
print( "taxa de serviço é: 10%")
taxaServiço = numConta * 0.1 
totalConta = numConta + taxaServiço
print('{} / {} = '.format(totalConta,numPessoas))
print(totalConta/numPessoas) 
