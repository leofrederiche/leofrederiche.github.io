---
title: Carrossel descomplicado com HTML e CSS
notetype : feed
posted: "12/11/2021"
---

Em 2016, criei um postagem no Tableless (link no final) ensinando a como criar um Carrossel simples utilizando apenas HTML e CSS. Eu nunca imaginei que aquele post simples seria publicado, muito menos acessado por pessoas que na época estavam se aventurando sobre AngularJS.

Recentemente, encontrei o velho post, que já estava publicado a 5 anos, e quase cai de costas quando vi que só o código de exemplo já tinha mais de vinte mil visualizações, e alguns comentários no Post informando que aquela simples postagem, tinham ajudado eles.

Por conta disso, resolvi criar meu próprio blog, e mais que merecido, repostar aqui o meu primeiro Post de Sucesso! Sem mais delongas... Carrossel descomplicado com HTML e CSS.

---

Não é difícil perceber que muitos desenvolvedores tanto iniciantes como os veteranos de guerra ainda sofrem quando o assunto é carrossel, mesmo utilizando frameworks como BootStrap. Mas seus problemas acabaram! (música de chegada milagrosa), com o conhecimento de poucas técnicas podemos resolver esse “gigante” problema facilmente.

### Pseudo classe :target – CSS

Para resolver o grande problema de transição do carrossel, vamos utilizar a pseudo classe `:target`, que atribui algumas características do CSS para o elemento HTML.

Para quem ainda não conhece a pseudo classe “:target” aqui vai um exemplo bem alto explicativo.

###### HTML
```html
<a href="#texto-exemplo-1">Seleciona - Texto exemplo 1</a><br>
<a href="#texto-exemplo-2">Seleciona - Texto exemplo 2</a>

<p id="texto-exemplo-1" class="text">Texto exemplo 1</p>
<p id="texto-exemplo-2" class="text">Texto exemplo 2</p>
```

###### CSS
```css
.text:target{
	border: 1px solid #000;		
}
```

Você pode conferir o resultado no CODEPEN [aqui.](https://codepen.io/lleonardoll/pen/BzBdWB?editors=1100)

### Estrutura HTML

A estrutura que iremos utilizar também é bem simples. Primeiramente uma DIV como “container” que é onde irá acontecer o carrossel, também utilizaremos outras DIVs que chamaremos de “wall-x” onde x é o valor da DIV no carrossel.

## Mão na massa

Vamos começar pelo HTML definindo a estrutura do nosso carrossel.

```html
<div class="container">
    <div class="wall wall-1" id="wall-1">
        <h1>carrosel numero - 1</h1>
    </div>

    <div class="wall wall-2" id="wall-2">
        <h1>carrosel numero - 2</h1>
    </div>

    <div class="wall wall-3" id="wall-3">
        <h1>carrosel numero - 3</h1>
    </div>
</div>
```

Terminado a estrutura, devemos deixar todas as DIVs wall com “display: none;” ( sim, todas! ) para não serem listadas de uma vez.

```css
.container{
    width: 150px;
    height: 150px;
}

.wall{
    display: none;
    width: 100%;
    height: 100%;
}

/* Corzinha de fundo para diferenciar */
.wall-1{ background-color: #f00; }
.wall-2{ background-color: #0f0; }
.wall-3{ background-color: #00f; }

.wall:target{
    display: block;
}
```

###### Explicando…

Basicamente, definimos o tamanho do “container”. Deixamos todas as DIVs “wall” com “display: none;” e definimos que todo “target” terá o “display: block;”. Se nada estiver aparecendo na sua tela, não se assuste, tudo está funcionando, o que acontece é que você não tem nem um “target” definido, mas você pode fazer um teste adicionando “#wall-1” na sua url.

Ok, já temos 90% do carrossel pronto. Para finalizarmos o carrossel precisamos adicionar as setas ou botões para fazer a transição de uma tela para outra, e é ai que vem a outra parte fácil. A unica coisa que precisamos fazer é adicionar links que setam para o target anterior ou seguinte, neste caso, se você estiver no “#wall-2” o anterior seria “#wall-1” e o seguinte “#wall-3”.

```html
<div class="container">
    <div class="wall wall-1" id="wall-1">
        <a href="#wall-3">Voltar</a>
        <h1>carrosel numero - 1</h1>
        <a href="#wall-2">Avançar</a>
    </div>

    <div class="wall wall-2" id="wall-2">
        <a href="#wall-1">Voltar</a>
        <h1>carrosel numero - 2</h1>
        <a href="#wall-3">Avançar</a>
    </div>

    <div class="wall wall-3" id="wall-3">
        <a href="#wall-2">Voltar</a>
        <h1>carrosel numero - 3</h1>
        <a href="#wall-1">Avançar</a>
    </div>
</div>
```

Para facilitar a exibição do primeiro target (sem ter que criar um link personalizado) você pode simplesmente colocar uma linha de javascript para todo o carrossel ficar ativa 😉

```javascript
window.location = "#wall-1";
```

Você pode ver o código em ação no CODEPEN [aqui.](https://codepen.io/lleonardoll/pen/pbvdRZ)

Pronto! Uma maneira muito simples para resolver um grande problema.

## Possível problema que você poderá encontrar

Caso você esteja utilizando algum link com target “#” para executar alguma ação, o “#wall-x” que está sendo setado perderá o foco, e logicamente terá a atribuição “display: none;” retomada. Neste caso é recomendável que não utilize targets na mesma pagina do carrossel e substitua os links “#” por funções onclick via JavaScript ou JQuery.

---

#### Considerações

Espero que tenha gostado ou tenha sido útil, caso você tenha curiosidade o link da postagem original vai estar aqui no final.

Obrigado por acompanhar!

---

#### Links

- Exemplo :target => [Codepen](https://codepen.io/lleonardoll/pen/BzBdWB?editors=1100)

- Resultado final => [Codepen](https://codepen.io/lleonardoll/pen/pbvdRZ)

- Post Original Tableless => [Tableless](https://tableless.com.br/carrocel-descomplicado-com-html-css/)
