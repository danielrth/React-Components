var React = require('react');

var RealTimeSearch = React.createClass({

	getInitialState: function(){
		return { searchString: '' };
	},

	handleChange: function(e){
		this.setState({searchString:e.target.value});
	},

	render: function(){
		var libraries = this.props.items,
			searchString = this.state.searchString.trim().toLowerCase();

		if(searchString.length > 0){
			libraries = libraries.filter(function(l){
				return l.name.toLowerCase().match( searchString ) || l.url.toLowerCase().match( searchString );
			});
		}

		return (
			<div>
				<input className="rtsearch" type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />
				<ul className="rtsearch">
					{libraries.map(function(l){
						return <li>{l.name} <a href={l.url}>{l.url}</a></li>
					})}
				</ul>
			</div>
		);
	}
});

module.exports = RealTimeSearch;