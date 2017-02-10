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