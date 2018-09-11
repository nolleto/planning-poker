# Planning Poker

[![javascript style guide][standard-image]][standard-url]
[![Build Status][travis-image]][travis-url]

[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com
[travis-image]: https://travis-ci.org/nolleto/planning-poker.svg?branch=master
[travis-url]: https://travis-ci.org/nolleto/planning-poker


## Description

A planning poker is a project in working in progress made in Ruby and VueJS. The idea is to create one place where you and your team can access and measure the task easily.

## Main techologies:
* Rails
* VueJS
* PostgreSQL
* Webpack

## Setup:
* Follow these steps:

```
git clone https://github.com/nolleto/planning-poker.git
bundle install
yarn --cwd client install
```
### Node
The project uses [NVM](https://github.com/creationix/nvm) to ensure the use of the right NodeJS version.
```
nvm install
```

## Run:
```
foreman start -f Procfile.dev
```
Check it out: http://localhost:3000/

## Linters
```
yarn --cwd client lint
rubocop
```

## Tests:
```
yarn --cwd client unit
rspec
```

## Deploy:
```
git push heroku master
```
