import { api } from "../api"

export const login = async (email: string, password: string | null): Promise<boolean> => {
    const data: any = await api

    if(email !== data.email) {
        return false
    }

    if(password !== data.password){
        return false
    }

    return true
}
