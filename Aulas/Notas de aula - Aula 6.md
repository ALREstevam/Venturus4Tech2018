# Aula 06 - Higher-Order Components

* É um padrão 
* Encapsula um componente, podendo adicionar funcionalidades
* Transforma um componente em outo componente

# Lifecycle
* Só posso mudar o state depois que o componente já existe (foi renderizado)
* `componentWillReceiveProps` O pai pode mudar as propriedades do filho
	* O pai passa algo de seu state como props para o filho, quando ele mudar o filho será atualizado (ou não)
* `chouldComponentUpdate` pode retornar false para não renderizar -> evita renderizar sem necessidade

## Promisses
* Um pattern
* Métodos síncronos só passam para a próxima linha quando o processamento termina
* Consultas ao servidor são assíncronas -> não sei quando vai retornal
* Uma promisse é um pattern
	* Uma promessa para a aplicação
	* Cria um listner que fica esperando o retorno
	* O método `then` pode ser encadeado com uma promisse vai ser executado quando resposta voltar do servidor

## Biblioteca AXIOS
* Biblioteca JS
* Conexão com servidor
* Consultas devem ser feitas depois que o componente for carregado

## Cross Origin
Por segurança a comunicação entre serviços em diferentes portas é desabilitado
* O  `cors` tem que ser instalado do lado do servidor