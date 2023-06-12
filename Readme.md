# Times Table Files App

## _Multiplication Tables using Promises_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/joanromerodev/MultiplicationTables)

This app allows you to create .txt file(s) containing the multiplication tables as you prefer:

- ✨ You can easily change the right variable to select the amount of tables to create ✨

## Technologies

Dillinger uses a number of open source projects to work properly:

- [node.js](https://nodejs.org/en) - evented I/O for the backend
- [FileSystem](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html) - This module enables interacting with the file system in a way modeled on standard POSIX functions.

## Installation

It only requires [Node.js](https://nodejs.org/) to run.

Install NodeJS globally by downloading and running the .exc file in your PC from their official website [Node.js](https://nodejs.org/en)

Go to your preferred console and run this

```sh
node --version
```

If you got the version with no problem, you can now clone this app using Git in your directory by running this command

```sh
git clone https://github.com/joanromerodev/MultiplicationTables
```

## How to use

Once you have already clonned the repository, you'll be able to use it as soon as you run the following command from your directory:

```
node app.js
```

You'll automatically notice that 5 files will get created per default. Each file contains the multiplication table corresponding to the multiple selected.

By changing the variable tableFilesAmount you'll determine the amount of files you want to create. Starting from 1 to the changed amount, you'll get the multiple last value. For example, let's say that you want to create 8 .txt files containing the multiplication tables, means that you'll get something like this:

| table-1.txt | table-2.txt | ... | table-8.txt |
| ----------- | ----------- | --- | ----------- |
| 1 x 1 = 1   | 2 x 1 = 2   | ... | 8 x 1 = 8   |
| 1 x 2 = 2   | 2 x 2 = 4   | ..  | 8 x 2 = 16  |
| ...         | ...         | ... | ...         |
| 1 x 10 = 10 | 2 x 10 = 20 | ... | 8 x 10 = 80 |

To change the amount of files to create, you can just do this:

```js
//previous value
const tableFilesAmount = 5;
//new value
const tableFilesAmount = 8;
```

## License

MIT

**Free Software, Hell Yeah!**
