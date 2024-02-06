const conta = {
    email: 'lucasmartinsde@gmail.com',
    password: '123',
    name: 'Nathaly Souza',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
