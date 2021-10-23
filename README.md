## Commands
Install all dependencies
```
yarn add
```
Run Server on Port 5000
```
yarn start
```

## Endpoints
The only endpoint is `POST /alert` which takes two mandatory parameters
```json
{
    "title": String,
    "text": String
}
```


## editing pug email template
1. install the pug-cli globally with `npm i -g pug-cli`
2. install the VSCode Live Server Extension
3. navigate to folder of the template you want to edit e.g. `cd emails/test`
4. enter `pug -w . -o ./ -P` in the console
5. start a liveserver for the file you want to edit
6. Profit