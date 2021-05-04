package stepdefinitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageobjects.ClientPage;

public class ClientSteps {

	WebDriver driver;
	
	protected ClientPage getClientPage() {
		return new ClientPage(Hooks.getDriver());
	}

//	=================== 	Cenário 1 - Adicionar Produto 	   ===================
	
	@Quando("^o usuario clicar no botao Add To Cart$")
	public void o_usuario_clicar_no_botao_Add_To_Cart_do_produto() throws Throwable {
		ClientPage cliente = getClientPage();
		cliente.clicarAdicionarProduto();
	}


	@Entao("^o sistema devera adicionar o produto \"([^\"]*)\"$")
	public void o_sistema_devera_adicionar_o_produto(String produto) throws Throwable {
		ClientPage cliente = getClientPage();
		cliente.validarItemAdicionado(produto);
	}

//	=================== 	Cenário 2 - Remover Produto 	   ===================
	
	@Quando("^o usuario clicar no botao Remove$")
	public void o_usuario_clicar_no_botao_Remove() throws Throwable {
		ClientPage cliente = getClientPage();
		cliente.clicarAdicionarProduto(); // Nesta etapa precisei adicionar o item ao carrinho uma vez que o mesmo fica vazio a cada login
		cliente.clicarRemoverItem();
	}
	
	@Entao("^o sistema devera remover o produto \"([^\"]*)\" do carrrinho de compas$")
	public void o_sistema_devera_remover_o_produto_do_carrrinho_de_compas(String item) throws Throwable {
		ClientPage cliente = getClientPage();
		cliente.validarItemRemovido(item);
	}

}
