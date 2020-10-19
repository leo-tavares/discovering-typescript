# Discovering typescript

The goal of this project, is *help people* to understand key concepts of typescript

- [Introduction](#Introduction)
- [what i need to run this project?](#what-i-need-to-run-this-project)
    - [deno](#deno) 
- [How to run this project](#How-to-run-this-project)
- [Why deno?](#why-deno-nodejs-is-not-good-enough)


## Introduction

This project will use [deno](https://deno.land/) for "run" typescript code

## what i need to run this project?

### Deno

[how to install](https://deno.land/#installation)

> _I strongly recommend reading the documentation_

Remember to set the environment variables to access the deno directly from your terminal. In my case, i use [zsh](https://ohmyz.sh/) so i have to added the bellow snippet in my zshrc.
for open this file type in your terminal this command `sudo nano ~/.zshrc` and add snippet bellow:

```zsh
# deno
export DENO_INSTALL="/home/YOUR_USER_NAME/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
# end of deno
```

> type _whoami_ in your terminal to discovey user name

restart your terminal and... enjoy the deno!!

`deno --version` => print deno version

## How to run this project?

After install deno type in your terminal `deno run PATH_TO_LESSON` .What is "**PATH_TO_LESSON**"??

This project is being built so that you can test each lesson separately.
example: You want to access the lesson of type "Pick" so that your PATH_TO_LESSON will be "src/utility/pick/index.ts" then execute `deno run src/utility/pick/index.ts`.

> remember type this command in your root project

## Why deno? NodeJs is not good enough?

I use deno because i don't need configure anything more to use typescript.For this project deno is awesome!
