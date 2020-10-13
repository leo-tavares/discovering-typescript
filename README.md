# discovering-typescript
The goal of this project, is help people to understand key concepts of typescript


## introduction

This project will use [deno](https://deno.land/) for "run" typescript code

## what i need to run this project?

### Deno

[how to install](https://deno.land/#installation)
>*I strongly recommend reading the documentation*

Remember to set the environment variables to access the deno directly from your terminal. In my case, i use [zsh](https://ohmyz.sh/) so i have to added the bellow snippet in my zshrc.
for open this file type in your terminal this command ``` sudo nano ~/.zshrc ``` and add snippet bellow:

```zsh
# deno
export DENO_INSTALL="/home/YOUR_USER_NAME/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
# end of deno
```
> type *whoami* in your terminal to discovey user name

restart your terminal and... enjoy the deno!!

``` deno --version ``` => print deno version

### Yarn (optional)

[how to install](https://classic.yarnpkg.com/en/docs/install/)

after installation run this command in your terminal ``` yarn --version ```. 

## How to run this project?

after install deno and yarn type in your terminal  ``` yarn dev ``` or instead, if you have not installed yarn type ``` deno run src/index.ts ```