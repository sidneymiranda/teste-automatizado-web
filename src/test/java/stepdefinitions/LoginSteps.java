package stepdefinitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageobjects.LoginPage;

public class LoginSteps {

	WebDriver driver;
	
	@Dado("^que o usuario esteja na pagina principal do sistema$")
	public void que_o_usuario_esteja_na_pagina_principal_do_sistema() throws Throwable {
		Hooks.abrirUrl("https://www.saucedemo.com");
		driver = Hooks.getDriver();
	}
	
	@Dado("^que o usuario esteja logado$")
	public void que_o_usuario_esteja_logado() throws Throwable {
		LoginPage login = new LoginPage(driver);
		login.preencherUsuario("standard_user");
		login.preencherSenha("secret_sauce");
		login.clicarBotaoLogin();
	}

	@Quando("^informar o campo Username como \"([^\"]*)\"$")
	public void informar_o_campo_Username_como(String user) throws Throwable {
		LoginPage login = new LoginPage(driver);
		login.preencherUsuario(user);
	}

	@Quando("^informar o campo Password como \"([^\"]*)\"$")
	public void informar_o_campo_Password_como(String passwd) throws Throwable {
		LoginPage loginPage = new LoginPage(driver);
		loginPage.preencherSenha(passwd);
	}

	@Quando("^clicar no botao Login$")
	public void clicar_no_botao_Login() throws Throwable {
		LoginPage loginPage = new LoginPage(driver);
		loginPage.clicarBotaoLogin();
	}

	@Entao("^o sistema devera autorizar o login, exibindo a pagina de produtos$")
	public void o_sistema_devera_autorizar_o_login_exibindo_a_pagina_de_produtos() throws Throwable {
		LoginPage loginPage = new LoginPage(driver);
		loginPage.validarListaProdutos();
	}
}
