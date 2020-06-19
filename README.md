# nitrotype.js

Client for the unofficial Nitro Type API.

## Installation

```bash
$ yarn add nitrotype
# or
$ npm install nitrotype --save
```

## Usage

The following example shows how to claim the daily reward:

```js
const nitrotype = require('nitrotype')
const client = nitrotype({ username: '<YOUR_USERNAME_HERE>', password: '<YOUR_PASSWORD_HERE>' })

;(async () => {
    await client.login()
    const res = await client.post('rewards/daily')
    console.log(res)
    // Output: { success: true, data: { reward: true, next: 75600, type: 'money', value: 30000 } }
})()
```

## Methods

- `Client#get(path[, options])`
- `Client#post(path[, options])`

`options` should be an object that contains a `data` object (for POST requests) and/or a `params` object (for URL parameters).

## Endpoints

The base API url (`https://nitrotype.com/api/`) is automatically prepended by the library. It will work even if you pass in just the endpoint. If you find an endpoint that isn't already documented below, please don't hesitate to open a pull request!

### Achievements

- `POST achievements/check`: ids
- `GET achievements/claim/id/<achievementId>`

### Authentication

- `POST auth/autologin`: id, token
- `GET auth/facebook`
- `POST auth/validate-email`: hash, userID
- `POST login`: password, username
- `POST logout`
- `POST register`: acceptPolicy, email, password, receiveContact, username

### Cars

- `POST cars/<carId>/buy`: carID, password
- `POST cars/<carId>/paint`: angle, carID, password
- `POST cars/<carId>/sell`: carID, password
- `POST cars/<carId>/use`
- `POST cars-arrange`: garage

### Friends

- `GET friends`
- `POST friends/<userId>/delete`
- `POST friends/<userId>/request`
- `POST friends/<userId>/sendcash`: amount, password, playersCash, recipient, feePercent
- `GET friend-requests`
- `POST friend-requests/accept-all`
- `POST friend-requests/deny-all`
- `POST friend-requests/<userId>/accept`
- `POST friend-requests/<userId>/deny`

### Items

- `POST items/cash-gifts`
- `POST items/equip-loot`: lootID, type

### News

- `GET news`
- `GET news/<newsId>`

### Players

- `GET players/<userId>`
- `POST players/<userId>/team-invite`
- `POST players/<userId>/report`
- `POST players-search`: term

### Purchase

- `POST purchase`: product, purchaseFor, purchaseForUsername
- `GET purchase/refreshsession`
- `POST purchase/stripesession`: product, purchaseFor, purchaseForUsername, purchaseMode

### Race

- `GET race/<raceId>`
- `POST race/log-dq`: id, msg, logs, type
- `POST race/log-practice`: errors, secs, typed
- `POST race/problem-keys`: ak (all keys), ek (error keys)
- `POST race/save-qualifying`: speed, accuracy, carID, raceSounds
- `POST race/challenge`: wins, seconds, lessonID

### Referrals

- `GET referrals`
- `POST referrals/<username>`

### Rewards

- `POST rewards/daily`

### Scoreboard

- `GET scoreboard`: board, grouping, seasonID, time

### Settings

- `GET settings`
- `POST settings/account`: contact, email, firstName, lastName, password
- `POST settings/bugs`: action, description, page
- `POST settings/fpscache`: dq, error, errorMessage, errorStack, forceEarlyPlace, fps, perfTestFps, position, raceID, racerRenderDelay, renderer, socket, webglSupport
- `POST settings/password`: newPassword, newPassword2, password
- `POST settings/profile`: country, displayName, titleID, title
- `POST settings/social`: allowFriendRequests, lookingForTeam, offline
- `POST settings/sounds`: value
- `POST settings/verify-email`
- `POST settings/username`: username
- `POST settings/world`: worldID

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
- `POST teams/create`: minLevel, minSpeed, name, otherRequirements, password, tag, tagColor
- `POST teams/delete`: password
- `POST teams/leave`
- `POST teams/motd`: message
- `POST teams/search`: invites, level, speed
- `POST teams/status`: status
- `POST teams/update`: minLevel, minSpeed, name, otherRequirements, password, tag, tagColor, enrollment, autoRemove
- `GET teams/<teamId>`
- `POST teams/<teamId>/accept-invite`
- `POST teams/<teamId>/apply`
- `POST teams/<teamId>/ignore-invite`
- `POST team-members/<userId>/demote`
- `POST team-members/<userId>/promote`
- `POST team-members/<userId>/remove`
- `POST team-requests/accept-all`
- `POST team-requests/deny-all`
- `POST team-requests/<userId>/accept`
- `POST team-requests/<userId>/deny`

### Classes

- `GET classes`

### Miscellaneous

- `POST contact`: body, email, name
- `POST contact/refund`: amount, body, ccLast4, date, email, name, postalCode
- `POST lostpass-change`: password, password2, userID, hash
- `POST lostpass-send`: email
- `POST support/account-help`: alt_email, captchaKey, email_type, firstname, lastname, login, other, username

### Obsolete

- `GET achievements`
- `GET cars`
- `POST news/<newsId>/comment`: comment, newsID
- `GET news/<newsId>/unapproved`
- `POST news-comments/<commentId>/approve`
- `POST news-comments/<commentId>/delete`
- `POST news-comments/<commentId>/delete-and-moderate`
- `POST news-comments/<commentId>/edit`: comment
- `POST buy-nitros`: password, quantity
- `POST sell-nitros`: password, quantity
- `POST purchase/cash`: product, purchaseFor, purchaseForUsername
- `POST purchase/upgrade`: product, purchaseFor, purchaseForUsername
- `GET race/practice-lesson`
- `POST settings/sessionbug`: loggedIn, paid, player
- `POST settings/survey`: field, value

## License

[MIT](LICENSE.txt)
