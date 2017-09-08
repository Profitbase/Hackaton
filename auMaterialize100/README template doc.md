# Template documentation

Basert på aurelia-cli 0.31.3 med webpack / TS

## Prereq
+ \>npm install script-loader -S
+ \>npm config set package-lock false

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


## Wijmo lib
+ last ned siste versjon av Wijmo pakke (her C1Wijmo-Enterprise_5.20172.334)
  + Kopier filer i katalog ...\NpmImages\wijmo-commonjs-min
    + til src\libs\wijml\334\wijmo-commonjs-min
      + fjern alle wijmo.angular2.*
      + fjern alle wijmo.react.*
      + fjern alle wijmo.vue2.*
  + Kopier wijmo.culture.no.* filer
    + fra C1Wijmo-Enterprise_5.20172.334\Dist\controls\cultures
    + til src\libs\wijml\334\cultures
  + Kopier C1Wijmo-Enterprise_5.20172.334\Dist\styles til styles

+ \>npm install ./src/libs/wijmo/334/wijmo-commonjs-min -S
+ Legg til moduler i webpack.config.js under entry/vendor bundle
  + 'wijmo/wijmo',
  + 'wijmo/wijmo.input',
  + 'wijmo/wijmo.grid',
  + 'wijmo/wijmo.nav'
  + ...

  + I main.ts legg til:
  + import '../styles/wijmo.css'; i main.ts
  + import '../styles/themes/material/wijmo.theme.material.amber-blue.min.css';
  + import "script-loader!./libs/wijmo/334/cultures/wijmo.culture.no.min";
