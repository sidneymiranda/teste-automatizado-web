package pageobjects;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.Utils;

public class ClientPage extends Utils {

	protected WebDriver driver;

	public ClientPage(WebDriver driver) {
		PageFactory.initElements(this.driver = driver, this);
	}
	
	@FindBy(how = How.ID, using = "add-to-cart-sauce-labs-backpack")
	private WebElement btnAdicionarNoCarrinho;
	
	@FindBy(how = How.ID, using = "remove-sauce-labs-backpack")
	private WebElement btnRemoverDoCarrinho;
	
	
	@FindBy(how = How.ID, using = "shopping_cart_container")
	private WebElement btnCarrinho;

	
	public void clicarAdicionarProduto() {
		esperarElemento(btnAdicionarNoCarrinho);
		btnAdicionarNoCarrinho.click();
	}
	
	public void validarItemAdicionado(String produto) {
		esperarElemento(btnCarrinho);
		btnCarrinho.click();
		WebElement linkProduto = driver.findElement(By.linkText(produto));
		esperarElemento(linkProduto);
		assertTrue(linkProduto.isDisplayed());
	}

	public void clicarRemoverItem() {
		esperarElemento(btnRemoverDoCarrinho);
		btnRemoverDoCarrinho.click();
	}
	
	
	public void validarItemRemovido(String produto) {
		esperarElemento(btnCarrinho);
		btnCarrinho.click();
		WebElement linkProduto = driver.findElement(By.linkText(produto));
		esperarElemento(linkProduto);
		
		assertTrue(!linkProduto.isDisplayed());
	}
}
