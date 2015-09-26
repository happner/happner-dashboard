# happner-dashboard

a dashboard providing visibility into the happner process

## installation

__To use in your project:__

`npm install happner-dashboard --save`

this will install the dashboard, when your happner mesh starts up, the dashboard is attached to the meshes middleware, you should see a startup log with the URL of the dashboard when your mesh starts: home (happner-dashboard) http://127.0.0.1:55000/happner-dashboard (where home=your mesh name and we are looking at localhost with the standard port of 55000)

this module relies on happner-resources as a dependancy (managed in npm) - so happner-resources also gets attached to your middleware pipeline, you can then access bootstrap/angular etc. by calling http://127.0.0.1:55000/happner-resources/bower/angular/angular.js etc. etc.

