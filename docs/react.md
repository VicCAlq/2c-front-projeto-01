## O que é React e por que ele muda a forma de criar páginas para a web

Quando você aprende a desenvolver para a web do jeito tradicional, usa três ferramentas separadas: o HTML para a estrutura da página, o CSS para o estilo e o JavaScript para a interatividade. Isso funciona bem para sites simples, mas conforme a aplicação cresce manter tudo organizado se torna um grande desafio. O React surge como uma biblioteca que permite construir interfaces de usuário de forma mais inteligente, unindo a lógica e a aparência em pequenos blocos reutilizáveis chamados **componentes**.

## A diferença fundamental: pensar por componentes

No HTML puro, você repete código o tempo todo. Por exemplo, se quiser criar vários botões de curtir em uma rede social, você precisa copiar e colar a mesma estrutura HTML para cada novo botão que desejar criar, e depois escrever JavaScript separado para definir o comportamento de cada um. Se precisar mudar algo em todos os botões, terá que alterar em todos os lugares que você criou os botões.

React trabalha com um conceito chamado "componentes": são funções que recebem como argumentos valores customizáveis, e retornam uma estrutura completa para um elemento no site, incluindo o equivalente ao HTML, CSS e Javascript em um único local. Isto torna estes componentes uma "forma", que permite gerar elementos similares com menos código e sem duplicação.

Seguindo o exemplo do botão acima, você cria um único componente para este botão que pode ser reutilizado na estrutura da página. Esse componente é como uma "forma" que produz botões com aparência e comportamento padronizados. Sempre que precisar de um novo botão, basta chamar esse componente, como se fosse uma etiqueta HTML personalizada.

## Exemplo prático: um contador de cliques

Vamos comparar como seria um simples botão que conta quantas vezes foi clicado, primeiro com HTML, CSS e JavaScript puros, depois com React.

### Versão com HTML/CSS/JS puros

No arquivo HTML, você teria algo assim:
```html
<div class="contador">
  <p>Você clicou <span id="numero">0</span> vezes</p>
  <button id="meuBotao">Clique aqui</button>
</div>
```

No CSS separado:
```css
.contador {
  font-family: Arial;
  text-align: center;
  margin-top: 50px;
}
```

E no JavaScript:
```javascript
let contagem = 0;
const numeroSpan = document.getElementById('numero');
const botao = document.getElementById('meuBotao');

botao.addEventListener('click', () => {
  contagem++;
  numeroSpan.textContent = contagem;
});
```

Perceba que o código está dividido em três arquivos ou seções. O JavaScript precisa "caçar" os elementos pelo ID ou classe para manipulá-los (usando o `document.getElementById`). Se você tiver vários contadores na mesma página, o trabalho aumenta: teria que criar IDs únicos para cada um e controlar cada contagem separadamente.

### Versão com React

Com React, você cria um componente que guarda seu próprio estado (a contagem) e devolve a aparência diretamente:

```jsx
function Contador() {
  const [contagem, setContagem] = React.useState(0);

  function handleClick() {
    setContagem(contagem + 1);
  }

  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: '50px' }}>
      <p>Você clicou {contagem} vezes</p>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  );
}
```

Para usar esse contador na página, basta escrever `<Contador />` em qualquer lugar. Cada contador é independente, mantém seu próprio número de cliques e não precisa de IDs nem de seletores complicados.

## Vantagens práticas para o seu aprendizado e para projetos maiores

**Reutilização sem dor de cabeça**  
Imagine que você vai construir um site de receitas. No HTML puro, cada receita exige copiar um bloco enorme de código, alterar título, imagem e ingredientes manualmente. Se quiser adicionar um novo campo (como "tempo de preparo"), terá que editar todas as receitas uma por uma. Com React, você cria um componente `Receita` que recebe essas informações como **propriedades** (props). Para criar 100 receitas, você apenas repete `<Receita titulo="Bolo" tempo="30min" ingredientes={["farinha", "açúcar", "manteiga", "fermento", "ovos", "leite"]} />`, modificando os valores das propriedades `título`, `tempo` e `ingredientes` e cada uma se monta sozinha, sem precisar configurar a estrutura de exibição de cada uma.

**Manutenção muito mais fácil**  
Quando o comportamento e a aparência de um botão estão espalhados em três lugares diferentes (HTML, CSS, JS), qualquer mudança exige procurar cada pedaço em arquivos separados. No React, tudo fica junto no componente. Se você quiser que o contador mude de cor ao chegar a 10 cliques, basta alterar uma condição dentro do componente, e todos os contadores do site refletem a novidade instantaneamente.

**Atualizações inteligentes da tela**  
No JavaScript puro, quando você quer alterar algo na página (como o número de cliques), você mesmo precisa dizer exatamente qual elemento mudar e qual propriedade alterar (`.textContent`, `.innerHTML`, etc.). Em projetos grandes, isso gera código confuso e propenso a erros. O React observa as variáveis que você marcou como "estado" (usando `useState`) e, quando elas mudam, automaticamente atualiza apenas as partes necessárias da tela – como se o botão "soubesse" que deve se redesenhar sozinho.

**Organização que facilita o trabalho em equipe**  
Em vez de uma bagunça de arquivos HTML, CSS e JS que todos os programadores modificam ao mesmo tempo, cada componente React é uma unidade independente. Um programador pode cuidar do componente `Menu`, outro do `PerfilUsuario`, e eles se encaixam sem conflitos. Isso é essencial em projetos reais de empresas.

