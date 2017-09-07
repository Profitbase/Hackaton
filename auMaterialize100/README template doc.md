# Template documentation

Basert på aurelia-cli 0.31.3 med webpack / TS

## Prereq
+ npm install script-loader -S

## Materialize
+ \>npm install materialize-css -S
+ \>npm install aurelia-materialize-bridge -S

+ i index.ejs legg til:
  + \<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

+ I manin.ts legg til:
  + import 'materialize-css';
  + import 'materialize-css/dist/css/materialize.min.css';
  + .plugin(PLATFORM.moduleName('aurelia-materialize-bridge'), b => b.useAll());

+ Legg til moduler i webpack.config.js under entry/vendor bundle
  + "materialize-css",
  + "aurelia-materialize-bridge"

