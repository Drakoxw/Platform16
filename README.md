# cifrado

### Run your Storybook
```sh
    ng run cifrado:storybook
```

### Generate Module
```sh
    ng g module [nameModule]
```

### Generate Component -Module
```sh
    ng g c [pathComponent]/[nameComponent] --module=[nameModule]
```
>Example -> `ng g c modules/client/Views/ItemsViews --style none --skip-tests`
* --skip-tests
* --style none

### Generate Component Standalone
```sh
    ng generate component shared/button --standalone  --skip-tests 
```
 
## DOCKER 

### Generate Docker image
```sh
    docker build -t platform-img .
```
### Run Docker 
```sh
    docker run --name platform-app -d -it -p 80:80 platform-img
```