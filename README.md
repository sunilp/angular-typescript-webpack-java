# angular-typescript-webpack-java

Angular + Typescript + Webpack  build with Karma and wallaby tests support for Java Platform.
And this all with sourcemaps in production support!!

Heavily insipred from brechtbilliet/angular-typescript-webpack
and from jhipster

### Install

```sh
npm i webpack tsd typescript -g
git clone git@github.com/sunilp/angular-typescript-webpack-java.git
cd angular-typescript-webpack
npm install
tsd install
mvn install 
mvn tomcat7:run
```

Then it will automatically open the app in your browser

To run tests

```sh
npm test
```

Coverage

```sh
open reports/coverage/index.html
```

Build
```sh
npm install
tsd install
npm run build
```


### Features

- [x] Build basic Angular app with webpack
- [x] Build with Maven and Embadded Tomcat
- [x] sass support
- [x] Coverage report
- [x] Typescript support
- [x] ES6 modules support
- [x] Running tests in PhantomJS
- [x] Wallaby.js support
- [x] Karma support
- [x] Optimized build package
- [x] Minimal and straightforward setup
- [x] Watches code and refreshes browser with latest changes automatically
- [x] Sourcemap support in develop AND PRODUCTION!!! (don't deploy the js.map file with your application, but use it to debug your production app)
