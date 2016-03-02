var React = require('react');

var BarDetails = React.createClass({
	render:function(){
		var url="detail.html?product_id="+this.props.product_id
		return (
			<li key={this.props.key}>
				<a href={url}>
					<img className="smallimg" src={this.props.main_img} alt=""/>
					<srtong className="title">{this.props.name}</srtong>
    				<span className="money">¥{this.props.price}</span>
				</a>
    		</li>
			
		)
	}
})

module.exports = BarDetails