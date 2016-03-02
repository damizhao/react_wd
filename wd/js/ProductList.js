var React = require('react');

var ProductList = React.createClass({
	render:function(){
		var url="detail.html?product_id="+this.props.product_id
		return (
			<li key={this.props.key}>
				<a href={url}>
					<img src={this.props.main_img} alt=""/>
    				<srtong className="title">{this.props.title}</srtong>
    				<span className="price">¥{this.props.price/100}</span>
    				<span className="sub_price">¥{this.props.ori_price/100}</span>
				</a>
    		</li>
		)
	}
})

module.exports = ProductList