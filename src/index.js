import 'babel-polyfill';
import projects from './scripts/projects';
import $ from 'jquery';
import _ from 'lodash';

require('!style-loader!css-loader!sass-loader!./styles/main.scss');

$('body').append('<div class="webpack-def"></div>');
$('body').append('<h1>Projects</h1>');
$('body').append('<ul>' + _.map(projects, p => `<li>${p}</li>`).join('\n') + '</ul>');






































