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

    async login() {
        const { headers } = await this.post('login', {
            data: {
                username: this.opts.username,
                password: this.opts.password
            }
        })
        // Save user session cookies
        headers['set-cookie'].forEach(str => {
            const cookieObj = cookie.parse(str)
            const key = Object.keys(cookieObj)[0]
            this._cookies[key] = cookieObj[key]
        })
    }

    _call(method, path, options = {}) {
        const data = typeof options.data === 'object'
            ? qs.stringify(options.data)
            : options.data
        return axios({
            ...options,
            method,
            baseURL: BASE_URL,
            url: path,
            headers: { Cookie: serializeCookies(this._cookies) },
            params: { uhash: this._cookies.ntuserrem },
            data
        })
    }

    get(path, options) {
        return this._call('GET', path, options)
    }

    post(path, options) {
        return this._call('POST', path, options)
    }

    put(path, options) {
        return this._call('PUT', path, options)
    }

    patch(path, options) {
        return this._call('PATCH', path, options)
    }

    delete(path, options) {
        return this._call('DELETE', path, options)
    }
}

module.exports = Client