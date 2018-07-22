# Aula 5 - `react-create-app`
* CLI : facilita o setup inicial de um projeto
* É uma biblioteca do npm
* Vem com várias configurações já feitas
	* React
	* JSX - Babbel
	* Transpilador de ES6
	* CSS autoprefix: permite que um código css funcione em mais browsers
	* Service worker e Web Manifest (para PWA - Progressive Web Apps : app no celular que na verdade é um site)

## Componente como Função vs Componente como Classe

* Componentes permitem
	* Reutilização de código
	* Facilita a manutenção do código
	* Isolam responsabilidades
	* Ter um estilo próprio ou da aplicação => css modules -> isolamento de escopo css
	* Passam informação por probs

## State vs Props
* são objetos js

### State
* Snapshot de um componente
* Cada componente tem um
* É controlado dentro do componente
* Mudanças nele ativam o método `render()` (bind)
* São modificados pelo `setState()`
* Não faça `state = abc`

### Props
* Parameterização - são apenas parâmetros
* São enviadas de um componente pai para um filho
* O componente não pode mudar suas props

## Stateless Component / Dumb Component
* Pode ser feito como uma função
* Apenas exibe informação
* Não tem lógica
* Posso usar `class` ao invés de `className`
* Tem apenas props
* Apenas exibem informação
* Não precisam modificar o dom
* São mais leves e fáceis de manter

## Statefull Components
* São representados como classes
* Tem alguma inteligência
* Tem state e props
* Herdam de uma classe do React (`Component`)
* `setState` altera o DOM
* Comunicação com o servidor
* Eventos do cliente
* Processamento de informações
* É bem mais pesado
* Dá acesso ao ciclo de vida do componente
	* Ativar métodos quando algo acontecer com o componente

> **DICA** `ctrl+d` no VS Code: seleciona o próximo item igual ao selecionado


## Event Handlers
* Coisas que acontecem com os elementos da página: digitar, clicar
* Semelhante ao JS
* `<button onClick={activateLasers}>` : a função tem que ser passada como um objeto

## Lifecyle

* Ciclo de vida do componente
* Executa métodos em determinados momentos da vida do componente
* Validações
* Controles
* São quatro categorias
  * Métodos de
    * Inicialização
    * Montagem
    * Atualização
    * Desmontagem

![img](assets/1_sn-ftowp0_VVRbeUAFECMA.png) 

![img](assets/1_u8hTumGAPQMYZIvfgQMfPA.jpeg) 

![img](assets/1_cEWErpe-oY-_S1dOaT1NtA.jpeg) 

