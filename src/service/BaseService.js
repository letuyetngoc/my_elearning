import axios from 'axios'
import { ACCESS_TOKEN, DOMAIN, TOKEN_CYBERSOFT } from '../util/setting'

export default class BaseService {
    constructor() {
    }
    get = (url) => {
        return axios({
            method: 'GET',
            url: `${DOMAIN}/${url}`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
                'TokenCybersoft': TOKEN_CYBERSOFT
            }

        })
    }
    post = (url, model) => {
        return axios({
            method: 'POST',
            url: `${DOMAIN}/${url}`,
            data: model,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
                'TokenCybersoft': TOKEN_CYBERSOFT
            }
        })
    }
    put = (url, model) => {
        return axios({
            method: 'PUT',
            url: `${DOMAIN}/${url}`,
            data: model,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
                'TokenCybersoft': TOKEN_CYBERSOFT
            }
        })
    }
    delete = (url, model) => {
        return axios({
            method: 'DELETE',
            url: `${DOMAIN}/${url}`,
            data: model,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
                'TokenCybersoft': TOKEN_CYBERSOFT
            }
        })
    }
}