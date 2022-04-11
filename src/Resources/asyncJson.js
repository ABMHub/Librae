import AsyncStorage from '@react-native-async-storage/async-storage';

const getRegister = async (key) => {
    try {
        const register = await AsyncStorage.getItem(key)
        return register != null ? JSON.parse(register) : null
    } catch(e){
        console.log("Erro ao recuperar um registro JSON")
    }
}

const setRegister = async (key, value) => {
    try {
        const register = JSON.stringify(value)
        await AsyncStorage.setItem(key, register)
    } catch(e){
        console.log("Erro ao criar/editar um registro JSON")
    }
}

export const createMyRegister = async () => {
    try {
        let register = await getRegister("KEY")
        if(register == null){
            let newRegister = {"n_less": 0, "n_trans": 0, "n_inter": 0}
            await setRegister("KEY", newRegister)
        }

    } catch(e) {
        console.log("Erro ao criar o registro")
    }
}

export const getMyRegister = async () => {
    try {
        let register = await getRegister("KEY")
        return register
    } catch(e) {
        console.log("Erro ao recuperar o registro do usuário")
    }
}

export const editMyRegister = async (parameter, value) => {
    try {
        let register = await getMyRegister("KEY")
        register[parameter] += value
        await setRegister("KEY", register)
    } catch(e) {
        console.log("Erro ao editar o registro do usuário")
    }
}

export const clearAll = async () => {
    try {
        let register = await getRegister("KEY")
        if(register != null)
            await AsyncStorage.clear()
    } catch(e) {
        console.log("Erro ao limpar o arquivo")
    }
}