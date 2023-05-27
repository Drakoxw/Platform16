# Platform16

### Run your Storybook
```sh
    ng run Platform16:storybook
```

### Generate Module
```sh
    ng g module [nameModule]
```

### Generate Component -Module
```sh
    ng g c [nameModule]/[nameComponent] --module=client 
```
>Example -> `ng g c client/card --module=client --style none`
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
    docker run -d -it -p 80:80 platform-img
```