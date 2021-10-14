## Install
```
# 1. nats:2.1.7-linux
# Run a container tranporter in localhost available at https://hub.docker.com/_/nats?tab=tags&page=1&ordering=last_updated&name=2.1.7-linux
# nats://localhost:4222
~$ docker run -d --name nats -p 4222:4222 nats:2.1.7-linux

# 2. api service
~$ git clone https://github.com/pontarolli/api
~$ cd api/simple
~$ npm install
~$ node api.service.js

# 3. greeter service
~$ git clone https://github.com/pontarolli/greeter
~$ cd greeter/simple
~$ npm install
~$ node greeter.service.js

```

## Usage

### Run with default settings
This example uses API Gateway service with default settings.
You can access to all services (including internal `$node.`) via `http://localhost:3000/`

**Test URLs:**	
- Call `test.hello` action: `http://localhost:3000/greeter/hello`


## Documentation
Please read our [documentation on Moleculer site](http://moleculer.services/docs)

## License
Moleculer-web is available under the [MIT license](https://tldrlegal.com/license/mit-license).

## Contact
Copyright (c) 2016-2021 MoleculerJS

[![@moleculerjs](https://img.shields.io/badge/github-moleculerjs-green.svg)](https://github.com/moleculerjs) [![@MoleculerJS](https://img.shields.io/badge/twitter-MoleculerJS-blue.svg)](https://twitter.com/MoleculerJS)
