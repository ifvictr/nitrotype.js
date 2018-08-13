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

## Endpoints

The base API url (`https://nitrotype.com/api/`) is automatically by the library. It will work even if you pass in just the endpoint. If you find an endpoint that isn't already documented below, please don't hesitate to open a pull request!

### Achievements

- `GET achievements`
- `POST achievements/check`: ids

### Authentication

- `POST login`: password, username
- `POST logout`
- `POST register`: password, username

### Cars

- `GET cars`
- `POST cars/<carId>/buy`: carID, password
- `POST cars/<carId>/paint`: angle, carID, password
- `POST cars/<carId>/sell`: carID, password
- `POST cars/<carId>/use`

### Friends

- `GET friends`
- `POST friends/<userId>/delete`
- `POST friends/<userId>/request`
- `POST friends/<userId>/sendcash`: amount, password
- `GET friend-requests`
- `POST friend-requests/accept-all`
- `POST friend-requests/<userId>/accept`

### Nitros

- `POST buy-nitros`: password, quantity
- `POST sell-nitros`: password, quantity

### Players

- `POST players-search`: term

### Purchase

- `POST purchase`: product, purchaseFor, purchaseForUsername

### Race

- `GET race/<raceId>`
- `POST race/save-qualifying`: carID, speed

### Referrals

- `GET referrals`

### Rewards

- `GET rewards/daily`

### Scoreboard

- `GET scoreboard`: board, grouping, seasonID, time

### Settings

- `GET settings`
- `POST settings/profile`: country, displayName, gender, title

### Stats

- `GET stats/data/bymonth`: limit, page
- `GET stats/data/lastdays`: limit, page
- `GET stats/data/racelog`: limit, page
- `GET stats/graphs/bymonth`: limit, page
- `GET stats/graphs/lastdays`
- `GET stats/graphs/racelog`
- `GET stats/summary`

### Teams

- `GET teams/applications`
- `POST teams/search`: invites
- `POST teams/status`: status
- `GET teams/<teamId>`
- `POST teams/<teamId>/accept-invite`
- `POST teams/<teamId>/apply`
- `POST team-members/<userId>/remove`
- `POST team-requests/accept-all`
- `POST team-requests/<userId>/accept`
- `POST team-requests/<userId>/deny`

### Miscellaneous

- `POST lostpass-send`: email
- `POST support/account-help`: alt_email, captchaKey, email_type, firstname, lastname, login, other, username

## License

[MIT](LICENSE.txt)
