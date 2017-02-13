var React = require("react");

var Picture = React.createClass({

	clickHandler: function(){
		this.props.onClick(this.props.id);
	},

	render: function(){
		var cls = 'picture ' + (this.props.favorite ? 'favorite' : '');
		return (
			<div className={cls} onClick={this.clickHandler}>
				<h6>{this.props.id}</h6>
				<img src={this.props.src} width="200" title={this.props.title} />
				<h6>{this.props.title}</h6>
				<h6>{this.props.address}</h6>
			</div>
		);
	}
});

var PictureList = React.createClass({

	getInitialState: function(){
		return { pictures: [], favorites: [] };
	},

	componentDidMount: function(){
		var self = this;
		var url = 'http://192.168.0.112:3000/api/trips.json';

		$.getJSON(url, function(result){
			if(!result || !result.trips || !result.trips.length){
				return;
			}

			var pictures = result.trips.map(function(p, i){
				return {
					id: i,
					src: 'http://www.gstatic.com/webp/gallery/' + (i+1) +'.jpg',
					title: p.title,
					address: p.address,
					favorite: false
				};
			});

			self.setState({ pictures: pictures });
		});
	},

	pictureClick: function(id){
		var favorites = this.state.favorites,
			pictures = this.state.pictures;

		for(var i=0; i < pictures.length; i++) {
			if(pictures[i].id == id) {
				if(pictures[i].favorite){
					return this.favoriteClick(id);
				}

				favorites.push(pictures[i]);
				pictures[i].favorite = true;

				break;
			}
		}
		this.setState({pictures: pictures, favorites: favorites});
	},

	favoriteClick: function(id){
		var favorites = this.state.favorites,
			pictures = this.state.pictures;

		for(var i = 0; i < favorites.length; i++){
			if(favorites[i].id == id)	break;
		}
		favorites.splice(i, 1);

		for(i=0; i<pictures.length; i++){
			if(pictures[i].id == id){
				pictures[i].favorite = false;
				break;
			}
		}

		this.setState({pictures: pictures, favorites: favorites});
	},

	render: function() {
		var self = this;
		var pictures = this.state.pictures.map(function(p){
			return <Picture id={p.id} src={p.src} title = {p.title} address = {p.address} favorite={p.favorite} onClick={self.pictureClick} />
		});

		if(!pictures.length){
			pictures = <p>Loading images...</p>;
		}

		var favorites = this.state.favorites.map(function(p){
			return <Picture id={p.id} src={p.src} title={p.title} address = {p.address} favorite={true} onClick={self.favoriteClick} />
		});

		if(!favorites.length){
			favorites = <p>Click an image to mark it as a favorite.</p>;
		}

		return (
			<div>
				<div className="pictures"> <h1>Popular Instagram pics</h1> {pictures} </div>				
				<div className="favorites"> <h1>Your favorites</h1> {favorites} </div>
			</div>
		);
	}
});

module.exports = PictureList;