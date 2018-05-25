## Loopback Scripts

### What does this do?

It provides a collection of scripts to use in development

### How does this work?

First you must install this package through npm

```
$ npm install loopback-scripts --save
```

Then you can add a custom npm script to your project `package.json` file calling loopback-scripts:

```
{
  ...
  "scripts": {
    "lint": "eslint .",
    "start": "node .",
    "posttest": "npm run lint && nsp check",
    "autoupdate": "NODE_ENV=development loopback-scripts autoupdate"
  },
  ...
```

After adding the custom npm script you can type in your terminal:

```
npm run autoupdate
```

### Commands available

| Command    | Purpose                                                                                                                                              |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| autoupdate | [Updates existing database tables or creates unexisting](http://apidocs.strongloop.com/loopback-datasource-juggler/#datasource-prototype-autoupdate) |
