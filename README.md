# Discogs Frontend Project Infinite Scroll

[![Build Status](https://app.travis-ci.com/doohinkus/discogs-project.svg?branch=master)](https://app.travis-ci.com/doohinkus/discogs-project)

This project allows people to explore albums. It uses the following stack to achieve mobile, first responsive design:

- React JS
- Styled Components
- Zustand for state management
- CSS3 Custom Properties
- React Testing Library
- Travis & Github Actions CI/CD test coverage

Clone this repo, open terminal, then run the following:

```
npm install
```

To start the project in local, open terminal, then run the following:

```
npm start
```

To view test report:

```
npm run test:coverage

```

This is rough, but it has the basics: responsive grid, unit tests, clean Axe report, and links to discog detail pages.

MVP -> https://discogs-project-rp.surge.sh/

Todo:

- handle year 0 values
- handle duplicate values
