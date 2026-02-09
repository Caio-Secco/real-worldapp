import CadastroPage from "../pages/CadastroPage";

const pageCadastro = new CadastroPage


describe('Registro de novo usuário com sucesso', () => {

  it('Deve registrar um novo usuário com informações válidas', () => {
    pageCadastro.accessLoginPage()
    pageCadastro.acessRegisterPage()
    pageCadastro.dataRegistration('caio', 'secco', 'caioteste01', '123456', '123456')

  })


});

describe('Tentar registrar um novo usuário com informações incompletas', () => {

  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    pageCadastro.accessLoginPage()
    pageCadastro.acessRegisterPage()
    pageCadastro.dataRegistrationFail()

  })


});

