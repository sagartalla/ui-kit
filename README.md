# ui-kit

#### Setup
```
  <Clone> and cd ui-kit
  npm install //in the root folder
  lerna bootstrap // in the root folder
```


#### Add new package 
```
lerna create @acko-ui-kit/<package-name>
```
add tsconfig.json // copy from existing package.
add script "tsc":"tsc" in package.json of the new package

#### Install dependency in a package
```
lerna add <npm-package-name> --scope="@acko-ui-kit/<package-name>" // do not use npm install
lerna bootstrap --hoist // moves common packages to top most level and creates link
```

#### Publish
```
npm run publish
```