package pageobjects;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.Utils;

public class LoginPage extends Utils {

	protected WebDriver driver;

	public LoginPage(WebDriver driver) {
		PageFactory.initElements(this.driver = driver, this);
	}
	
	@FindBy (how = How.ID, using = "user-name")
	private WebElement usuario;
	
	@FindBy (how = How.ID, using = "password")
	private WebElement senha;
	
	@FindBy (how = How.ID, using = "login-button")
	private WebElement btnLogin;
	
	@FindBy (how = How.ID, using = "inventory_container")
	private WebElement products;
	
	public void preencherUsuario(String nomeUsuario) {
		esperarElemento(usuario);
		usuario.sendKeys(nomeUsuario);
	}
	
	public void preencherSenha(String senhaUsuario) {
		esperarElemento(senha);
		senha.sendKeys(senhaUsuario);
	}
	
	public void clicarBotaoLogin() {
		esperarElemento(btnLogin);
		btnLogin.click();
	}
	
	public void validarListaProdutos() {
		esperarElemento(products);
		assertTrue(products.isEnabled());
	}
}