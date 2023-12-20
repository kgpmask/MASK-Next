# kgpmask/MASK-Next
> _MASK's website, now in NextJS._

This repository is the latest version of MASK's website, migrated to NextJS 14 to explore more frameworks while also working on improving the working conditions of the team. (Sadly, they're still stuck as slaves. There's no escape from that. At least React's neat.)


## Dependencies  

The repository is made using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) v14 in TypeScript as opposed to JavaScript. Here are the major dependencies in the same:
- `next (v14)`: The NextJS Framework which we are using for the same
- `react (v18)` and `react-dom (v18)`: ReactJS, the frontend framework used by the same.
- `react-icons`: For icons to be used in the website.

There are also various development dependencies which are used:
- `typescript`: Typescript support dependency. Also includes `@types/node`, `@types/react`, `@types/react-dom`
- `eslint`: Lint configuration for clean coding.

> _Note: The server runs on Node.js v20. Make sure to update Node if it is not yet updated._

## Running the server

The server can be run using the command `npm run dev`. The development server will run in the address [http://localhost:3000](http://localhost:3000). You can customize the port by manually setting the process variables while running the server.  
For example: `PORT=6969 npm run dev` (I blame our predecessors for the choice of the port.)

## Contributions  
Similar to the original repository, we will be having two branches. The `main` branch will be responsible for development and the `prod` branch (will be made soon) will be responsible for deployment of the website.  
All non-trivial contributions made will be to the `main` branch using pull requests. You can , however, directly make trivial edits and minor bug fixes directly on the `main` branch.  

> _**Note:** PRs can be made to other branches in the repository as well. For instance, if you are working on the live quiz portal, socket integration and database integration (two separate features) can have their PRs to the live quiz portal's branch, which can further be merged to main._

The `main` &#x2192; `prod` branch pull requests are the only ones allowed to be made to the `prod` branch. They will be made after a few additions are made to `main`.

### Rules for making a PR
- When you make a new branch for a new feature, be sure to make a pull request. You can set it as a draft, but it is recommended you make one to track the progress easily.
- Don't be lazy with the PR details. Make sure to add a proper title and description to the PR instead of just the base branch's name.
- Make sure your PR is used to merge to the correct branch. We don't want a PR which is supposed to go to the live quiz portal get merged to dev.

Your PR will be approved when two of the following conditions are met:
- Your code passes all the tests (lint, mocha, everything)
- All feedback, suggestions (and excessively redundant additions) asked by the reviewers and team head have been satisfied.
- ~~Bribe the head with something they value~~

> _Note: Equivalent migrations should be made to the database (in case of `main` &#x2192; `prod`.) If necessary, change the production server into a maintenance instance before migrating._

## Credits  
### Team Head  
- [Vidunram A R](https://github.com/Goose-Of-War)
### Team Members  
- [Sharanya Chakraborty](https://github.com/destryptor)

> _will be added as they contribute_
