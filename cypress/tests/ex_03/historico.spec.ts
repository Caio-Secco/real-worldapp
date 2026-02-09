import LoginPage from '../pages/LoginPage'
import userData from '../../fixtures/userData.json'
import TransactionPage from '../pages/TransactionsPage'
import CadastroPage from '../pages/CadastroPage'

const pageLogin = new LoginPage()
const PageTransition = new TransactionPage()
const pageCadastro = new CadastroPage()


describe('Visualizar histórico de transações com sucesso', () => {

  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    pageLogin.accessLoginPage()
    pageLogin.loginUser(userData.userSuccess.username, userData.userSuccess.password)
    PageTransition.historyTransaction()

  })

})

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {

  it.only('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    pageCadastro.accessLoginPage()
    pageCadastro.acessRegisterPage()
    pageCadastro.dataRegistration('Caios', 'secco', 'caioba3001', '123456', '123456')
    pageLogin.loginUser('caioba3001', '123456')
    PageTransition.bankacount()
    PageTransition.Notransaction()

  })

})