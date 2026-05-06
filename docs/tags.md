# Tags HTML

`<div>` - Define um contêiner genérico para agrupar outros elementos e estruturar o layout da página.
Atributos principais - `className` (define classes CSS para estilização), `onClick` (executa uma função ao clicar na div), `style` (aplica estilos inline no formato de objeto JavaScript com propriedades em camelCase).
Exemplo de uso:
```html
<div className="container" style={{ backgroundColor: "#f0f0f0" }} onClick={() => alert("Div clicada!")}>
  <p>Conteúdo dentro da div</p>
</div>
```

---------------------------------------------------------------

`<button>` - Cria um botão interativo que permite ao usuário executar uma ação ao ser clicado.
Atributos principais - `onClick` (função executada ao clicar), `disabled` (booleano que desabilita o botão), `type` (pode ser "button", "submit" ou "reset"), `className` (classes CSS).
Exemplo de uso:
```html
<button onClick={() => console.log("Enviado")} disabled={false} className="btn-primary">
  Enviar
</button>
```

---------------------------------------------------------------
`<p>` - Define um parágrafo de texto, usado para blocos de conteúdo textual.
Atributos principais - `className` (classes CSS), `style` (estilos inline), `onClick` (evento de clique), `id` (identificador único).
Exemplo de uso:
```html
<p style={{ fontSize: "16px", color: "blue" }} className="texto-destaque">
  Este é um parágrafo de exemplo.
</p>
```

---------------------------------------------------------------
`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` - Representam títulos (headings) com níveis de importância decrescente, do h1 (mais importante) ao h6 (menos importante).
Atributos principais - `className` (estilização CSS), `style` (estilos inline), `onClick` (evento de clique), `id` (identificador).
Exemplo de uso:
```html
<h1 className="titulo-principal">Bem-vindos ao Curso</h1>
<h2 style={{ color: "green" }} onClick={() => alert("Subtítulo clicado")}>Introdução ao HTML</h2>
```

---------------------------------------------------------------
`<header>` - Representa o cabeçalho de uma página ou seção, geralmente contendo logotipo, navegação ou título introdutório.
Atributos principais - `className` (classes CSS), `id` (identificador), `style` (estilos inline).
Exemplo de uso:
```html
<header className="cabecalho" style={{ backgroundColor: "#333", color: "white" }}>
  <h1>Meu Site</h1>
  <nav>...</nav>
</header>
```

---------------------------------------------------------------
`<footer>` - Define o rodapé de uma página ou seção, comum para informações de direitos autorais, contatos ou links.
Atributos principais - `className` (classes CSS), `id` (identificador), `style` (estilos inline).
Exemplo de uso:
```html
<footer className="rodape" style={{ textAlign: "center" }}>
  <p>&copy; 2025 Escola Exemplo</p>
</footer>
```

---------------------------------------------------------------
`<ol>` - Cria uma lista ordenada (numerada), onde cada item é precedido por um número ou letra.
Atributos principais - `className` (classes CSS), `type` (define o tipo de marcador: "1", "A", "a", "I", "i"), `start` (número inicial da lista), `reversed` (inverte a ordem numérica).
Exemplo de uso:
```html
<ol type="A" start={2} className="minha-lista">
  <li>Primeiro item</li>
  <li>Segundo item</li>
</ol>
```

---------------------------------------------------------------
`<ul>` - Cria uma lista não ordenada (com marcadores), usada para itens sem ordem específica.
Atributos principais - `className` (classes CSS), `style` (estilos inline), `onClick` (evento de clique).
Exemplo de uso:
```html
<ul className="lista-bullets" style={{ listStyleType: "square" }}>
  <li>Maçã</li>
  <li>Banana</li>
</ul>
```

---------------------------------------------------------------
`<li>` - Define um item dentro de uma lista ordenada (`<ol>`) ou não ordenada (`<ul>`).
Atributos principais - `className` (classes CSS), `value` (para listas ordenadas, define o valor numérico do item), `onClick` (evento de clique).
Exemplo de uso:
```html
<ol>
  <li value={10}>Este item começa a contar do 10</li>
  <li>Próximo item (11)</li>
</ol>
```

---------------------------------------------------------------
`<img>` - Insere uma imagem na página, carregando o arquivo especificado pelo atributo `src`.
Atributos principais - `src` (caminho ou URL da imagem), `alt` (texto alternativo para acessibilidade), `width` e `height` (dimensões em pixels), `className` (classes CSS), `onClick` (evento de clique).
Exemplo de uso:
```html
<img src="logo.png" alt="Logotipo da empresa" width={150} height={150} className="imagem-redonda" onClick={() => alert("Imagem clicada")} />
```

---------------------------------------------------------------
`<input>` - Campo interativo para entrada de dados do usuário, como textos, números, senhas, etc.
Atributos principais - `type` (tipo do campo: "text", "password", "email", "number", etc.), `value` (valor atual do campo), `onChange` (função executada ao digitar), `placeholder` (texto de exemplo interno), `disabled` (desabilita o campo), `className` (classes CSS).
Exemplo de uso:
```html
<input type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} className="input-padrao" />
```

---------------------------------------------------------------
`<form>` - Agrupa elementos de entrada (inputs, botões, etc.) para envio de dados ao servidor ou processamento local.
Atributos principais - `onSubmit` (função executada no envio do formulário), `method` (GET ou POST), `action` (URL para onde os dados são enviados), `className` (classe CSS).
Exemplo de uso:
```html
<form onSubmit={(e) => { e.preventDefault(); console.log("Formulário enviado"); }} method="POST" className="form-contato">
  <input type="text" name="nome" />
  <button type="submit">Enviar</button>
</form>
```

---------------------------------------------------------------
`<table>` - Define uma tabela, estrutura de dados em linhas e colunas.
Atributos principais - `border` (espessura da borda), `className` (classes CSS), `style` (estilos inline).
Exemplo de uso:
```html
<table border={1} className="tabela-dados">
  {/* conteúdo com thead, tbody, etc. */}
</table>
```

---------------------------------------------------------------
`<thead>` - Agrupa o conjunto de linhas que formam o cabeçalho da tabela (geralmente contém títulos das colunas).
Atributos principais - `className` (classes CSS), `style` (estilos inline).
Exemplo de uso:
```html
<thead className="cabecalho-tabela">
  <tr><th>Nome</th><th>Idade</th></tr>
</thead>
```

---------------------------------------------------------------
`<tbody>` - Agrupa o corpo da tabela, onde ficam as linhas de dados propriamente ditos.
Atributos principais - `className` (classes CSS), `style` (estilos inline).
Exemplo de uso:
```html
<tbody style={{ backgroundColor: "#f9f9f9" }}>
  <tr><td>João</td><td>17</td></tr>
</tbody>
```

---------------------------------------------------------------
`<tr>` - Define uma linha (row) dentro da tabela, podendo conter células de cabeçalho (`<th>`) ou dados (`<td>`).
Atributos principais - `className` (classes CSS), `onClick` (evento de clique), `style` (estilos inline).
Exemplo de uso:
```html
<tr className="linha-par" onClick={() => console.log("Linha clicada")}>
  <td>Dado 1</td><td>Dado 2</td>
</tr>
```

---------------------------------------------------------------
`<th>` - Representa uma célula de cabeçalho em uma tabela, geralmente com texto em negrito e centralizado.
Atributos principais - `colSpan` (número de colunas que a célula ocupa), `rowSpan` (número de linhas que a célula ocupa), `scope` ("col", "row", etc.), `className` (classes CSS).
Exemplo de uso:
```html
<th colSpan={2} scope="col" className="cabecalho-coluna">Produtos</th>
```

---------------------------------------------------------------
`<td>` - Célula padrão de dados em uma tabela.
Atributos principais - `colSpan` (mescla colunas), `rowSpan` (mescla linhas), `className` (classes CSS), `style` (estilos inline).
Exemplo de uso:
```html
<td colSpan={2} style={{ textAlign: "center" }}>Valor total</td>
```
---------------------------------------------------------------
