import { login } from "./login"

describe('login', () => {

    const mockEmail = 'lucasmartinsde@gmail.com'
    const mockPassword = '123'

    it('Deve exibir um alert com boas vindas caso o email e a senha seja válido', async() => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        const response = await login('email@invalido.com', '000')
        expect(response).toBeFalsy()
    })
})