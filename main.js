var React = require('react');
var App = require('./components/App');

React.render(
  <App />,
  document.getElementById('main')
);

var TimerExample = require('./components/Timer');

React.render(
    <TimerExample start={Date.now()} />,
    document.getElementById('timer')
);