import LoginPage from '../pages/LoginPage'
import userData from '../../fixtures/userData.json'
import PayPage from '../pages/PayPage'


const pageLogin = new LoginPage()
const pagePay = new PayPage()


describe('Enviar dinheiro com saldo suficiente', () => {

  it('Deve realizar o pagamento corretamente e esperar a mensagem de sucesso', () => {
    pageLogin.accessLoginPage()
    pageLogin.loginUser(userData.userSuccess.username, userData.userSuccess.password)
    pagePay.newPayment()

  })

})

describe('Enviar dinheiro com saldo insuficiente', () => {

  it('Deve sinalizar erro ao tentar enviar dinheiro sem informar o saldo', () => {
    pageLogin.accessLoginPage()
    pageLogin.loginUser(userData.userSuccess.username, userData.userSuccess.password)
    pagePay.failPayment()
  })

})

