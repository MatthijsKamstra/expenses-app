#!/usr/bin/env bash

echo '🦊 Start setup Bootstrap (v01.1)'
echo '  ➜ v01.0 - basic setup (bootstrap, ficons)'
echo '  ➜ v01.1 - replace shrinkwrap with package-lock'
echo '  ➜ v01.2 - remove bootstrap-icons and ng-bootstrap'

##### ------------------------------------------------------
##### Start with installing project
##### ------------------------------------------------------

# ng new FOOBAR --routing true --style scss
# cd FOOBAR
# ng serve --open



##### ------------------------------------------------------
##### install default plugins
##### ------------------------------------------------------
echo '👉 Install npm packages (bootstrap ficons)'

# npm install bootstrap ficons bootstrap-icons
# npm audit fix

npm list | grep bootstrap || npm install bootstrap --package-lock
npm list | grep ficons || npm install ficons --package-lock
# npm list | grep bootstrap-icons || npm install bootstrap-icons --package-lock

# echo '👉 Install npm packages (ng-bootstrap)'

# npm install @ng-bootstrap/ng-bootstrap

# npm list | grep @ng-bootstrap/ng-bootstrap || npm install @ng-bootstrap/ng-bootstrap --package-lock


##### ------------------------------------------------------
##### Update angular.json with styles and scripts
##### ------------------------------------------------------

# check for files
echo '👉 Make sure the original angular.json is set'
ANGULAR_JSON=angular.json
ANGULAR_BACKUP_JSON=angular.bac.json
if [[ -f "$ANGULAR_BACKUP_JSON" ]]; then
    echo "⛔️ $ANGULAR_BACKUP_JSON exists."
	# reset the old file backk
	mv $ANGULAR_BACKUP_JSON $ANGULAR_JSON
fi

echo '👉 Update angular.json via node'
echo '⛔️ WARN: Updating angular.json will only work when node.js is installed'

node > ${ANGULAR_JSON}.copy.json <<EOF
// Read data
var data = require('./${ANGULAR_JSON}');

// Manipulate data

// get obj
var obj = data.projects;
// console.log(Object.keys(obj)[0]);
var projectName = Object.keys(obj)[0];
// CSS/SCSS
data.projects[projectName].architect.build.options.styles.unshift('node_modules/bootstrap/dist/css/bootstrap.min.css')
// data.projects[projectName].architect.build.options.styles.unshift('node_modules/bootstrap-icons/font/bootstrap-icons.css')
data.projects[projectName].architect.build.options.styles.unshift('node_modules/ficons/dist/ficons/font.css')
// JS
data.projects[projectName].architect.build.options.scripts.push('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')

// Output data
console.log(JSON.stringify(data,null, '  '));

EOF

# exit

##### ------------------------------------------------------
##### Get project name
##### ------------------------------------------------------

echo '👉 Get info from angular.json via node'
echo '⛔️ WARN: Updating angular.json will only work when node.js is installed'

PROJECT_NAME=$(node <<EOF
var data = require('./${ANGULAR_JSON}');
var obj = data.projects;
var projectName = Object.keys(obj)[0];
console.log(projectName)
EOF
)

echo "🧪 PROJECT_NAME: ${PROJECT_NAME}";

# exit


# node -p "JSON.stringify({...require('./data.json'), key4: 'value4'}, null, 2)" > data.json
# source: https://stackoverflow.com/questions/24942875/change-json-file-by-bash-script



echo '👉 Rename original angular.json and rename angular.json.copy.json'
# rm angular.json
mv $ANGULAR_JSON $ANGULAR_BACKUP_JSON
mv angular.json.copy.json $ANGULAR_JSON


##### ------------------------------------------------------
##### Update app.component.html template
##### ------------------------------------------------------
echo '👉 Update app.component.html template'

# Probably already create, and want to add bootsrap later
# > 'src/app/app.component.html'
############## APPEND with `>>`
echo '<div class="container">
<h2>Scaffold Bootstrap/Bootstrap icons/Ficons</h2>
<p><i class="fa fa-magic"></i> fa fa-magic <a href="https://ficons.fiction.com/" target="_blank">ficons</a></p>
<!-- <p><i class="bi-alarm"></i> bi-alarm <a href="https://icons.getbootstrap.com/" target="_blank">bootstrap icons</a></p> -->
</div>' >> 'src/app/app.component.html'


# TODO restart serve needed


##### ------------------------------------------------------
##### Jump start development
##### ------------------------------------------------------


##### probably don't need this

# echo 'Start server and open in browser'
# ng serve --open
# echo 'Open VSCode'
# open ./
