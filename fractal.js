'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'ObjTK Component Library');

fractal.web.set('static.path', __dirname + '/public');

fractal.web.set('builder.dest', __dirname + '/public/patterns');
fractal.web.set('builder.static.ignored', __dirname + "/public/patterns");

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/resources/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/resources/docs');
