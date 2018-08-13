const axios = require('axios')
const cookie = require('cookie')
const qs = require('qs')

const serializeCookies = obj => Object.entries(obj)
    .reduce((str, [key, value]) => `${str} ${cookie.serialize(key, value)};`, '')

const BASE_URL = 'https://www.nitrotype.com/api/'

class Client {
    constructor(opts) {
        if (typeof opts !== 'object') {
            throw new Error('`opts` needs to be an object')
        }
        if (!opts.username) {
            throw new Error('`username` property is missing')
        }
        if (!opts.password) {
            throw new Error('`password` property is missing')
        }
        this.opts = opts
        this._cookies = {}
    }

    _call(method, path, options = {}) {
        const uhash = this._cookies.ntuserrem
        const params = typeof options.params === 'object' ? options.params : {}
        const data = typeof options.data === 'object' ? options.data : {}

        return axios({
            method,
            baseURL: BASE_URL,
            url: path,
            headers: { Cookie: serializeCookies(this._cookies) },
            params: { uhash, ...params },
            data: method === "POST" && qs.stringify({
                uhash,
                ...data
            })
        })
    }

    login() {
        // One-off internal call to save the user's session cookies
        return this._call('POST', 'login', {
            data: {
                username: this.opts.username,
                password: this.opts.password
            }
        })
            .then(({ headers }) => {
                headers['set-cookie'].forEach(str => {
                    const cookieObj = cookie.parse(str)
                    const key = Object.keys(cookieObj)[0]
                    this._cookies[key] = cookieObj[key]
                })
            })
    }

    get(path, options) {
        return this._call('GET', path, options).then(res => res.data)
    }

    post(path, options) {
        return this._call('POST', path, options).then(res => res.data)
    }
}

module.exports = Client