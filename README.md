![LOGO](https://github.com/wilfaustino/BOB-OpenBlindBank-AlexaSkill/blob/master/assets/images/logo-readme.jpg?raw=true)
 
# BOB - Blind Open Bank - Alexa Skill
Alexa Skill para o BOB - Open Blind Bank

## Motivação
Skill desenvolvida para o **Hackaton 2020 do Banco Safra** (Time 28)

Esta skill é uma **aplicação de interface de voz** desenvolvida para integrar-se à [**API BOB**](https://github.com/Gabriel94Dantas/BOBAPI). Esta API utiliza-se da tecnologia financeira conhecida como **Open Banking** para realizar a integração de instituições financeiras.

A **Skill BOB Bank** e a **API BOB** foram pensadas e desenvolvidas inicialmente com foco em atender idosoe e pessoas PNEs - Portadoras de Necessidades Especiais, como deficientes visuais e deficientes motores. Porém, pôde-se notar que a abrangência da tecnologia pode se estender ainda mais e ser aderida por qualquer pessoa.

## Tecnologias

### AWS Lambda Functions - [AWS Lambda](https://aws.amazon.com/pt/lambda/)
As Lambda Functions da AWS fazem parte do modelo de execução de computação em nuvem conhecido como **server-less**. Neste modelo, não há a necessidade de prévias configurações por parte dos desenvolvedores. Além disso, a escalabilidade da aplicação é garantida pela AWS, uma vez que o balanceamento de carga é realizado pelos seus próprios servidores.
Esta skill utiliza a AWS Lambda Funtion provida pelo Skill Builder da Alexa, mantido pela Amazon.

### Linguagem de programação - [Node.js](https://nodejs.org)
O Node.js foi a linguagem de programação escolhida. Esta linguagem surgiu em 2009 e foi baseada no interpretador do JavaScript. Dentre suas diversas vantagens, o Node.js destaca-se pela leveza e flexibilidade, o que lhe conferem características mais que suficientes para serem rodadas em servidores server-less.

### Alexa Skill Development Kit - [ASK SDK](https://www.npmjs.com/package/ask-sdk-core)
O ASK SDK para Node.js é um kit de desenvolvimento para skills da Alexa e, atualmente, é compatível com Node.js, Java e Python. Este SDK tem o simples objetivo de auxiliar no desenvolvimento para que o código fique mais limpo e o tempo gasto com a programação seja reduzido.

## Vídeo demonstrativo
> Em breve! ;)

## Alguns Possíveis Diálogos
Alguns diálogos possíveis são:
```
> Alexa, abra o BOB Bank
< Olá! Seja bem-vindo ao BOB Blind Open Bank!
```
```
> Qual o saldo da minha conta?
< Wilson, o saldo da sua conta no banco Safra está negativo em 256 reais e oito centavos!
```
```
> Extrato
< Aqui está seu extrato: débito de 109 reais e 50 centavos em supermercado ... Fim do extrato.
```
```
> Escutar morning calls
< Abrindo seus Morning Calls de hoje... (ínício do streaming de áudio)
```
```
> Quais meus bancos cadastrados
< (Lista de bancos cadastrados)
```
## Compatibilidade
 A skill é compatível com todos os dispositivos que utilizam a tecnologia Alexa:
- echo
- echo dot
- echo dot show
- echo studio
- [Aplicativo **Amazon Alexa** na AppStore](https://apps.apple.com/br/app/amazon-alexa/id944011620)
- [Aplicativo **Amazon Alexa** na Google Play Store](https://play.google.com/store/apps/details?id=com.amazon.dee.app&hl=pt_BR)

## Testes da Skill

> Para testar a skill, em sua **echo dot** ou no **aplicativo da Alexa** de seu celular, entre em contato pelo e-mail wilfaustino@gmail.com (@wilfaustino)