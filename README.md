# nitrotype.js

Client for the unofficial Nitro Type API.

## Installation

```bash
$ yarn add nitrotype
# or
$ npm install nitrotype --save
```

## Usage

The following code snippet demonstrates how to retrieve a user's account settings using this library:

```js
const nitrotype = require('nitrotype')
const client = nitrotype({ username: '<YOUR_USERNAME_HERE>', password: '<YOUR_PASSWORD_HERE>' })

;(async () => {
    await client.login()
    const res = await client.get('settings')
    console.log(res)
    // Output: { success: true, data: { … } }
})()
```

## License

[MIT](LICENSE.txt)