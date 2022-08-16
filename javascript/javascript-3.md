# DOM
- Document Object Model
- Estrutura de um arquivo na web
- Representa documentos HTML ou XML
- Interface de programação
- NÃO é uma linguagem de programação
- É essencial para p JS entender o modelo de páginas web

## Para que serve ?
- Alterar a estrutura (html)
- Alterar o estilo da página (css)
- Alterar  o conteúdo

## Como?
- Disponibilizando uma API (Application Programming Interface)
- Rotinas e padrões estabelecidos
- Métodos (funções)
- Árvore de elementos
- Seletores
- Objetos (nós)

## Exemplo HTML
...
<html>
    <head></head>
    <body></body>
</html>
...

## Exemplo objeto

objeto = {
    html : {
        head : {}
        body : {
            h1 : {

            }
        }
    }
}

## DOM vs JS
- O DOM pode ser usado por outras linguagens
- Sem o DOM o JS não teria noção da página

### Vantagens de usar o JavaScript
- Código é executado por navegadores
- Torna as páginas mais dinâmicas
- Evita requisições desnecessárias (performace)
- SPA (Single Page Applications)
- Reage rapidamente a ações dos usuários

### Desvantagens de usar o JavaScript
- Código é executado por navegadores
- O conteúdo NÃO fica visível para indexadores de busca
- Alterações em tempo de execução não ficam salvas no documento



### Exemplos
Seleciona o objeto e disponibiliza (métodos / funções).callback

- document.getElementById(id)
- document.getElementsByTagName('div')
- document.createElement('div')
- parentNode.appendChild(node) // html.appendChild('body')
- element.innerHTML
- element.style
- element.setAttribute('name')  // definir atributo
- element.getAttribute('name')  // pegar, buscar atributo
- element.addEventListener()
- window.location
- window.onload (en-US)
- console.log()
- window.scrollTo()

### Referências
- DOM: https://dom.spec.whatwg.org/
- Tecnologias JS: https://developer.mozilla.org/pt-Br/docs/Web/JavaScript/JavaScript_technologies_overview
- Motores de execução: https://pt.wikipedia.org/wiki/Lista_de_motores_de_renderiza%C3%A7%C3%A3o