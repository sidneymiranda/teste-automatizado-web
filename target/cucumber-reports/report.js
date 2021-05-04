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
  "duration": 5867384100,
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
  "duration": 1101674400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_logado()"
});
formatter.result({
  "duration": 950956400,
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
  "duration": 858258700,
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
  "duration": 7883836600,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using link text\u003dSauce Labs Backpack\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027THINKPAD\u0027, ip: \u0027172.24.144.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pageobjects.ClientPage.validarItemRemovido(ClientPage.java:56)\r\n\tat stepdefinitions.ClientSteps.o_sistema_devera_remover_o_produto_do_carrrinho_de_compas(ClientSteps.java:44)\r\n\tat ✽.Entao o sistema devera remover o produto \"Sauce Labs Backpack\" do carrrinho de compas(Features/Client.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 720667000,
  "status": "passed"
});
});