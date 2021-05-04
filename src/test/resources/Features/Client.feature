#language: pt
@Client @End2End
Funcionalidade: Client

  Contexto: 
    Dado que o usuario esteja na pagina principal do sistema
    E que o usuario esteja logado

  @AdicionarProduto
  Esquema do Cenario: Adicionar Produto
    Quando o usuario clicar no botao Add To Cart
    Entao o sistema devera adicionar o produto "<produto>"

    Exemplos: 
      | produto             |
      | Sauce Labs Backpack |

  @RemoverProduto
  Esquema do Cenario: Remover Produto
    Quando o usuario clicar no botao Remove
    Entao o sistema devera remover o produto "<produto>" do carrrinho de compas

    Exemplos: 
      | produto             |
      | Sauce Labs Backpack |
