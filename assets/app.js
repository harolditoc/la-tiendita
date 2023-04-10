/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
import { registerReactControllerComponents } from '@symfony/ux-react';
// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';
const $ = require('jquery');
require('bootstrap');
// start the Stimulus application
import './bootstrap';

registerReactControllerComponents(require.context('./react/controllers', true, /\.(j|t)sx?$/));
