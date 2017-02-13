var React = require('react');

var App = require('./components/App');
React.render(
  <App />,
  document.getElementById('main')
);

var Timer = require('./components/Timer');
React.render(
    <Timer start={Date.now()} />,
    document.getElementById('timer')
);

var Menu = require('./components/Menu');
React.render(
	<Menu items={ ['Home', 'Services', 'About', 'Contact us'] } />,
	document.getElementById('menu')
);

var RealTimeSearch = require('./components/RealTimeSearch');
var libraries = [
    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},
];
React.render(
	<RealTimeSearch items={ libraries } />,
	document.getElementById('realtimesearch')
);

var OrderForm = require('./components/OrderForm');
var services = [
    { name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 }
];
React.render(
	<OrderForm items={ services } />,
	document.getElementById('orderform')
);

var PictureList = require('./components/ImageApp');
React.render(
	<PictureList apiKey="642176ece1e7445e99244cec26f4de1f" />,
	document.getElementById('imageapp')
);