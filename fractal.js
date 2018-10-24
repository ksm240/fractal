'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'use test Fractal');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

const consolidate = require('@frctl/consolidate');
const slmAdapter = consolidate('slm');
fractal.components.engine(slmAdapter);
fractal.components.set('ext', '.slim');
