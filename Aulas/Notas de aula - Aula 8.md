# Aula 8 - React Native
* Framework para desenvolver para IOS e Android em ES6
* Utiliza React.JS como base
* Permite fazer código customizado (Nativo ou JS) para cada plataforma
	* Código nativo
		* Para android: Java/Kotlin
		* Para IOS: Objective-C e Swift
* Programação reativa: vejo a aplicação no celular ontime
* O React Native, assim como o React.JS transpila o código para JS
* 10% de código nativo + 90% de código compartilhado (funciona nas duas plataformas)
* Usa dois núcleos do device
	* Núcleo nativo
		* Android: Java
		* iOS: Objective-C
		* JavaScriptCore


## Ionic
* Para angulas
* Front-end na web
* Typescript

## Xamarin
* Aplicações mobile .NET

## React Native
* Front-end web
* Node.js
* React.js

## Flutter
* Mobile


# Expo
* Um toolchain para desenvolver no React Native
* Não precisa do android studio
* Possui APIs prontas
* Não necessita de desenvolvimento nativo
* https://expo.io

--

	npm install -g create-react-native-app
	create-react-native-app vjobs-reactnative
	cd vjobs-reactnative
	npm start


## Principais Componentes

* **View** representa a view do aplicativo
* **Text** label
* **TextInput** entrada de texto
* **Image** imagem local ou pela rede
* **FlatList** lista de elementos visuais
* **Button** botão
* **ScrollView** view com scroll
* **SafeAreaView** view que respeita o espaço adicional de celulares com tela curva

## Estilo
* **View** View Style Props
* **Image** Image Style
* **Text** Text Style
* Image e Text extendem de View
* Os componentes tem a propriedade `style` para receber estilos


## Flexbox
* A ordem dos componentes que vão aparecer na tela
* Direção dos componentes
* `flexDirection = row|column|horizontal|vertical`
* `justifyContent`
* `id`