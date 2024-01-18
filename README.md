## CONTADOR DINÂMICO COM  ![Logo](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)



## Esse projeto visa por em prática:

### 1- Manipulação do DOM com JS.
### 2- Exploraração dos recursos do SASS COMO :
    #### NESTING MIXIN e MINIFY

### 3- Aplicação do Bootstrap com CSS. 

#### TECNOLOGIAS UTILIZADAS NO PROJETO 

![Logo](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

![Logo](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![Logo](https://img.shields.io/badge/-Sass-232323?style=flat&labelColor=CC6699&logo=sass&logoColor=ffffff)

![Logo](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

![Logo](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

![image](https://github.com/salesgs/Contador/assets/93557539/6480e720-d30c-42ce-9e78-5d57a931e1da)

## FUNCIONALIDADES DO PROJETO COM  ![Logo](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
### ________________________________________________________________


### 1-ARQUIVO |script.js|

### - No arquivo princiapl  |"script.js"|   importaremos as funções dinâmicas para interação com o DOM (Document Object Model). Na imagem abaixo, estamos capturando com o "querySelector" o elemento "button" pela sua classe ".decrement". Logo após armazenamos numa variável.  

### - Esse botão recebe um ouvinte de eventos , "listeners". Ao clicar sobre o botão, a função decrement que foi importada para o arquivo principal |script.js| será executada externa ao arquivo. E o valor será decrementado.

![code](https://github.com/salesgs/Contador/assets/93557539/2284416a-df0d-4e67-badb-e3abe8e7c5a5)
<br><br><br><br>

### 2- ARQUIVO |decrement.js|

### - Abaixo capturamos o elemento H3 com o "querySelector()".

### - convertemos o valor de "string" que está no innerText "conteúdo do elemento"  para "number".

### - Por fim, aplicamos no atributo "innerTexto do h3" a regra de négocio para decrementar o valor. 


![code](https://github.com/salesgs/Contador/assets/93557539/02609696-0178-4b0a-827e-9c1c4cbbae92)


### OBS: Eu troco a cor do elemento h3, a partir de um número gerado aleatoriamente dentro da função com os métodos da classe Math do JavaScript. Com esse número eu acesso a posição de um array aonde já tenho nomes da cores pré-definidas.

### ________________________________________________________________
## ESTILO DO RPOEJETO COM:   
![Logo](https://img.shields.io/badge/-Sass-232323?style=flat&labelColor=CC6699&logo=sass&logoColor=ffffff) ![Logo](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)



## 1 - Pasta "sass" 
![image](https://github.com/salesgs/Contador/assets/93557539/915f1bea-d84d-4a61-af24-48b1d2354330)

## 2- Arquivo | font.scss | 
### - Dentro desse arquivo temos a função "mixin style-fonts". Essa função recebe como parâmetro variáveis precedidas do sinal "$". Elas representam os valores que serão passados para as propriedades de estilo dos elementos.

![code](https://github.com/salesgs/Contador/assets/93557539/3422b9a9-5931-4785-8236-7d884870f590)


## 3- Execução da função "style-fonts".
### - No arquivo style.scss executamos a função passando os valores das respectivas propriedades de "cor em hexadecimal" e "peso da fonte". 

![code](https://github.com/salesgs/Contador/assets/93557539/c47b1a13-6532-4378-9b6e-b7d6d42ee670)




