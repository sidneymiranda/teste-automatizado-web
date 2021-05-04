$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Client.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Client",
  "description": "",
  "id": "client",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Client"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Adicionar Produto",
  "description": "",
  "id": "client;adicionar-produto",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@AdicionarProduto"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "o usuario clicar no botao Add To Cart",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "o sistema devera adicionar o produto \"\u003cproduto\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "client;adicionar-produto;",
  "rows": [
    {
      "cells": [
        "produto"
      ],
      "line": 15,
      "id": "client;adicionar-produto;;1"
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 16,
      "id": "client;adicionar-produto;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 5768221500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que o usuario esteja logado",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 790622500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_logado()"
});
formatter.result({
  "duration": 1207695600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Adicionar Produto",
  "description": "",
  "id": "client;adicionar-produto;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@AdicionarProduto"
    },
    {
      "line": 2,
      "name": "@Client"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "o usuario clicar no botao Add To Cart",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "o sistema devera adicionar o produto \"Sauce Labs Backpack\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "ClientSteps.o_usuario_clicar_no_botao_Add_To_Cart_do_produto()"
});
formatter.result({
  "duration": 709270500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack",
      "offset": 38
    }
  ],
  "location": "ClientSteps.o_sistema_devera_adicionar_o_produto(String)"
});
formatter.result({
  "duration": 213865300,
  "status": "passed"
});
formatter.after({
  "duration": 913868300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Remover Produto",
  "description": "",
  "id": "client;remover-produto",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 18,
      "name": "@RemoverProduto"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "o usuario clicar no botao Remove",
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "o sistema devera remover o produto \"\u003cproduto\u003e\" do carrrinho de compas",
  "keyword": "Entao "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "client;remover-produto;",
  "rows": [
    {
      "cells": [
        "produto"
      ],
      "line": 24,
      "id": "client;remover-produto;;1"
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ],
      "line": 25,
      "id": "client;remover-produto;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 2692933100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que o usuario esteja logado",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 637557400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_logado()"
});
formatter.result({
  "duration": 976336300,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Remover Produto",
  "description": "",
  "id": "client;remover-produto;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 18,
      "name": "@RemoverProduto"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 2,
      "name": "@Client"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "o usuario clicar no botao Remove",
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "o sistema devera remover o produto \"Sauce Labs Backpack\" do carrrinho de compas",
  "matchedColumns": [
    0
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "ClientSteps.o_usuario_clicar_no_botao_Remove()"
});
formatter.result({
  "duration": 1204608800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack",
      "offset": 36
    }
  ],
  "location": "ClientSteps.o_sistema_devera_remover_o_produto_do_carrrinho_de_compas(String)"
});
formatter.result({
  "duration": 64187700,
  "status": "passed"
});
formatter.after({
  "duration": 976502600,
  "status": "passed"
});
formatter.uri("Features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Fazer Login com Sucesso",
  "description": "",
  "id": "login;fazer-login-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@FazerLogin"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Username como \"\u003cusuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Password como \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o login, exibindo a pagina de produtos",
  "keyword": "Entao "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login;fazer-login-com-sucesso;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ],
      "line": 16,
      "id": "login;fazer-login-com-sucesso;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 17,
      "id": "login;fazer-login-com-sucesso;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 2961993300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 696891000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Fazer Login com Sucesso",
  "description": "",
  "id": "login;fazer-login-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 8,
      "name": "@FazerLogin"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Username como \"standard_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Password como \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o login, exibindo a pagina de produtos",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Username_como(String)"
});
formatter.result({
  "duration": 630278700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Password_como(String)"
});
formatter.result({
  "duration": 543527200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicar_no_botao_Login()"
});
formatter.result({
  "duration": 809025800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_sistema_devera_autorizar_o_login_exibindo_a_pagina_de_produtos()"
});
formatter.result({
  "duration": 973997500,
  "status": "passed"
});
formatter.after({
  "duration": 1428737500,
  "status": "passed"
});
});