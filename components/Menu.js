var React = require('react');

var Menu = React.createClass({
	getInitialState: function(){
		return { focused: 0 };
	},

	clicked: function(index){
		this.setState({focused: index});
	},

	render: function() {
		var self = this;
		return (
			<div>
				<ul>{ this.props.items.map(function(m, index){
					var style = '';

					if(self.state.focused == index){
						style = 'focused';
					}
					return <li className={style} onClick={self.clicked.bind(self, index)}>{m}</li>;
				})}
				</ul>
				<p>Selected: {this.props.items[this.state.focused]}</p>
			</div>
		);
	}
});

module.exports = Menu;