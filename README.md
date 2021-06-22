# Module template for ScaleDynamics platform

This template is configured for the ScaleDynamics web platform. It is on MIT license and ready to use to build your own app/service. All is pre-configured: we provide one command to develop with live reload (backend) and one to deploy to make it live on a url.

One particularity of our platform is that you don’t have to manage the [Express](https://expressjs.com/) layers, the platform manages them for you automatically, so you can focus only on the Node/React coding.

Note that you need a ScaleDynamics account for deployment (create a FREE community account [here](https://console.scaledynamics.com/auth/signup/)).


## How to use

Go in `backend` folder and run those commands:

### Project setup

```sh
npm install
```

### Live-reload for development

To enter a live-reload development session, use the command below. Feel free to update the frontend or the backend code, it will be rebuilt at each change.


```ssh
npm run dev
```

You can test the template by using:

```ssh
npm run test
```

#### Deploy with ScaleDynamics

First you have to compile and minify your project for production.

```sh
npm run build
```

Then use your ScaleDynamics account credential to log in to the platform (create a FREE community account [here](https://console.scaledynamics.com/auth/signup/))

```sh
npx warp login
```

Finally use the deploy command

```sh
npm run deploy
```

Note that when running this command, you have to select a project and an environment. On the ScaleDynamics platform a project identifies an application or a microservice.

Select an existing project or create a new one. An environment identifies the cloud execution environment to run your app. You can create as many as you want like ‘staging’, ‘demo’, ‘prod’... Each environment has its own url.

To deploy, select an existing environment or create a new one. For more details on projects or environments, see the [documentation](https://docs.scaledynamics.com).

## Template structure

This project contains the backend with a node module. You can update the backend as you need to build your own app.

Regarding MongoDB, we provide a template module  in the `src/mongodb.js`. To use your own MongoDB instance, replace the `URI` constant by your own.

```js
const URI = 'mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]';
```


You can create new functions that can be called by other modules or frontend. Add them in `index.js` or into another module and export it. The platform manages the [Express](https://expressjs.com/) layers automatically.


```js
const myFunction = () => {
  // your code here
}

module.exports = { myFunction };
```

To access your new functions, feel free to adapt this code:

```js
import * as Backend from './.backend/backend.js';

const { myFunction } = new Backend();
```
## Documentation

If you need more information, you can refer to the documentation:
  - [ScaleDynamics Platform](https://docs.scaledynamics.com/docs/frameworks)
  - [MongoDB](https://docs.mongodb.com/guides/)

Here are some links to useful libraries :
  - [Axios](https://github.com/axios/axios)
  - [Parcel](https://parceljs.org/)


## License

Copyright 2021 ScaleDynamics SAS. All rights reserved.
Licensed under the MIT license.