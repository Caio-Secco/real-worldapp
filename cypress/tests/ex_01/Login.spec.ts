import LoginPage from '../pages/LoginPage'
import userData from '../../fixtures/userData.json'


const pageLogin = new LoginPage()


describe('Login com Sucesso', () => {

  it('Deve registrar um novo usuário com informações válidas', () => {
    pageLogin.accessLoginPage()
    pageLogin.loginUser(userData.userSuccess.username, userData.userSuccess.password)
  });

});

describe('Tentar fazer login com credenciais inválidas', () => {

  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    pageLogin.accessLoginPage()
    pageLogin.loginUser(userData.userFail.username, userData.userFail.password)
    pageLogin.Alert()

  })

});
