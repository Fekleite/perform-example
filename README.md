# Ignite - Trilha ReactJS: Chapter V

## Performando apps com ReactJS

### Renderização no React

A renderização no React ocorre basicamente em 3 momentos:

- Pai para filho: sempre que um componente pai é renderizado novamente o seus componentes filhos também são.
- Propriedades: sempre que uma propriedade é alterada o componente é renderizado novamente.
- Hooks: sempre que um hook é chamado o componente  sofre uma nova renderização.

### Fluxo de renderização

1. Gerar uma nova versão do componente que precisa ser renderizado
2. Comparar a nova versão com a versão anterior
3. Se houverem alterações, o React "renderiza" essa nova versão em tela

**Virtual DOM**

## Otimizações

## memo

Impede que uma nova renderização do componente pai faça com que o filho também seja renderizado novamente.

[Example](components/ProductItem.tsx)

### Quando usar:

1. Pure Functional Component
2. Renders too often
3. Re-render with same props
4. Medium to big size

## useMemo

Evita que coisas que ocupam muito processamento sejam refeitas todas as vezes que o componente renderizar.

**Memoriza um valor**

[Example](components/SearchResults.tsx)

### Quando usar:

1. Cálculos pesados
2. Variáveis que ocupam novos espaços na memória (Igualdade referencial), quando uma informação é repassada de pai pra filho.

## useCallback

Evita a criação desnecessária de funções.

**Memoriza uma função**

[Example](pages/index.tsx)

### Quando usar:

1. Prop drilling

## Formatação de dados

Evitar formatação e cálculos dentro dos componentes renderizados, é melhor fazê-los no momento em que buscamos os dados e não no momento em que exibimos.

[Example](pages/index.tsx)

## Dynamic import (Code splitting)

Importar somente no momento em que utilizamos.

**Lazy load**

<details>
  <summary>Next</summary>
  Utilizamos o dynamic
</details>

<details>
  <summary>React</summary>
  Utilizamos o lazy
</details>

[Example](components/ProductItem.tsx)

## Virtualização

Permite mostrar em tela somente os itens visíveis no navegador.

**React virtualized**

[Example](components/SearchResults.tsx)

## Bundle analyzer

Análisar o bundle para descobrir o que está deixando a aplicação pesada.

[Next Bundle Analyzer](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer)

<br>
<br>
<br>

Desenvolvido com ❤️ por [Fernanda Leite](https://www.linkedin.com/in/fcleite19/)