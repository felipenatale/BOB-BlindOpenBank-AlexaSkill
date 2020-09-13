![LOGO](https://github.com/wilfaustino/BOB-OpenBlindBank-AlexaSkill/blob/master/assets/images/logo-readme.jpg?raw=true)

# BOB - Open Blind Bank - Alexa Skill
> Alexa Skill para o BOB - Open Blind Bank

## Motivação
> Skill desenvolvida para o Hackaton 2020 do Banco Safra (Time 28)
> Esta skill é uma aplicação de interface de voz desenvolvida para integrar-se à API BOB. Esta API utiliza-se da tecnologia financeira chamada Open Banking para integração de instituições financeiras.
> A Skill BOB Bank e a API BOB foram pensadas e desenvolvidas inicialmente com foco em atender idosoe e pessoas PNEs - Portadoras de Necessidades Especiais, como deficientes visuais e deficientes motores. Porém, pôde-se notar que a abrangência da tecnologia pode se extender ainda mais e ser aderida por qualquer pessoa.

## Tecnologia
> AWS Lambda Function - Alexa self hosted
> Linguagem de programação: [Node.JS](https://nodejs.org)
> [ASK SDK](https://www.npmjs.com/package/ask-sdk-core) - Alexa Skill Development Kit

## Alguns Possíveis Diálogos
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