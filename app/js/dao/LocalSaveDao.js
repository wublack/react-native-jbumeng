import { AsyncStorage } from 'react-native'
export const LOCAL_SAVE_KEYS = {
    LOGIN_INFO_KEY: 'login_info_key',
    FIRST_ENTER_KEY: 'first_enter_key'
}


export default class LocalSaveDao {

    getLocalSaveInfo(key) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(key, (error, result) => {
                if (!error) {
                    if (result) {
                        resolve(JSON.parse(result))
                    } else {
                        reject(result)
                    }
                } else {
                    reject(error)
                }
            })
        })
    }

    /**
     * 保存信息
     * @param {*} key 
     * @param {*} data 字符串
     * @param {*} callBack 回调函数
     */
    setLocalSaveInfo(key, data, callBack) {
        AsyncStorage.setItem(key, data, callBack)
    }

} 