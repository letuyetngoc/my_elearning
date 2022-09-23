import { USER_LOGIN } from '../util/setting'

export default function useAcountInfo() {
    const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
    return userLogin
}
