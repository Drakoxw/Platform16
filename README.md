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
