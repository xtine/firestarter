## firestarter

Christine's quick boilerplate setup for front-end projects.

### Breakdown
`index.html` - loosely based on <a href="https://html5boilerplate.com/">HTML5Boilerplate</a><br/>
`scss/style.scss` - starting scss file (using <a href="http://bourbon.io/">bourbon</a> mixin library)<br/>
`css/style.css` - where compiled files go (shouldn't need to edit, ever)<br/>
`Gulpfile.js` - gulp script set up to automatically watch and compile all files in the scss directory into the css folder

### Dependencies
First make sure node/npm is installed on your computer.<br/>
Then install gulp and a few aditional modules:
```
npm install gulp gulp-watch gulp-sass node-neat node-bourbon
```

Optionally if you want to minify css files, uncomment the minification lines in the Gulpfile and also install the dependent modules:
```
npm install gulp-minify-css gulp-rename
```

### How to Use
In the base of the project, just simply run the gulp script in your terminal:
```
gulp
```
The watcher should start right away and you can get started on editing your stylesheets.
