# password-complexity app

The web app for checking password complexity.

[img]: https://gph.is/g/EGgjdno

## Requirements

You’ll need to have **Node**(>= 12.0.0) and **Yarn** (>=1.0.0) on your local development machine.

## Quick start

```bash
git clone git@github.com:FilipMessa/password-complexity-app.git
cd password-complexity-app
yarn install
yarn dev
```

## Overall picture of repo:

The yarn workspaces are used to organize the project codebase.

```text
/
├── node_modules/
|
├── client/                               # FE for the password-complexity app
├── server/                               # BE for the password-complexity app
|
├── packages/
│   ├── eslint-config/                    # eslint configuration package
│   ├── password-strength/                # package for password strength analysis
|   └── e2e-tests/                        # cypress for e2e tests
|
└── package.json                          # global workspaces definition
```

## Available global scripts

- `yarn client` - run FE application
- `yarn server` - run BE application
- `yarn lint` - check the source code
- `yarn test` - run all tests
- `yarn test:e2e` - run e2e tests

## workspaces

### FE client

Front end application for the password-complexity application powered by React and bundled by Parcel.

- **name**: client
- **DevStack**: react, parcel-bundler, styled-components, axios, @testing-library, TypeScript

## BE server

The Node JS server powered by express JS.
The server contains two endpoints for password strength analysis (`/v1`, `/v2`).

- **name**: server
- **DevStack**: express, zxcvbn, morgan, winston, TypeScript, supertest

```
POST: /password-complexity/v1
POST: /password-complexity/v2
```

The **version 1** uses the [`zxcvbn`](hhttps://github.com/dropbox/zxcvbn) package for analysis
The **version 2** uses my custom algorithm to analyze the password strength.

### Data Params

```
{
  passwors: string
}
```

### Success Response

```
{
    "score": number,
    "strength": string,
    "statusCode": number
}
```

### Error Response

```
{
    "status": "error",
    "statusCode": 404,
    "type": "Not Found",
    "message": "Requested resources was not found."
}
```

## Password Strenght

Algorithm to analyze the password strength. Return the score of the password from 0 to 4.

- **name**: password-strength
- **DevStack**: TypeScript

### Score:

- 0: "Worst"
- 1 : "Bad"
- 2 : "Weak"
- 3 : "Good"
- 4: "Strong"

## Usage

```javascript
import getPasswordStrength from 'password-strength';
const password = 'ABCD1_aS';
const score = getPasswordStrength(password); // => 3
```

## Eslint Config

Common eslint's configuration package for repo.

- **name**: @common/eslint-config
- **DevStack**: eslint, prettier, TypeScript

# TODO

- improve the Jest's setting (related to cypress)
- setup GitHub Actions (PR, deploy)
- improve design
