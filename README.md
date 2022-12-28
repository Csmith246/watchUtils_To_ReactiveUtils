# Steps for watchUtils to reactiveUtils migration

1. Install jscodeshift globally 

  ```npm i -g jscodeshift```

2. Clone this repo locally

3. Get the paths right in the following command. First argument is the path to the root directory of the repo you are migrating. Second argument is the path to the codemod for the migration.

```javascript
jscodeshift.cmd .\LocalWorkspace\primary-repos\instant-app-landing\src\ -t .\LocalWorkspace\misc\watchUtilsMigration\src\migrateWatchUtils.ts --extensions=ts,tsx --parser=tsx --no-fail-on-error
```

4. Go through the git diff, and manually make sure everything looks good. Also it'd be good to build the project and double check