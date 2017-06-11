# live-js

A simple setup for **live transpilation** and **live evaluation** of JavaScript code.

## Transpilation

Change into the *transpilation* folder, install all dependencies, and start the file watcher:

```
cd transpilation
npm install
npm start
```

Every time you save the *src/index.js* file, Babel will transpile it and write the output to the *dist/index.js* file. This way, you can open both files side by side and immediately see the transpiled results.

## Evaluation

Change into the *evaluation* folder, install all dependencies, and start the file watcher:

```
cd evaluation
npm install
npm start
```

Every time you save the *src/index.js* file, it will be executed automatically. You can open the file and the watch process side by side in a text editor and a terminal window, respectively. This way, you’ll immediately see the evaluated results in the terminal whenever you change and save the file.
