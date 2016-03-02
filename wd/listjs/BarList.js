var React = require('react');
var BarDetails = require('./BarDetails.js');

var BarList = React.createClass({
	render:function(){
		var listPro=this.props.data;
		var listProduct=listPro.map(function(pro){
			return <BarDetails main_img={pro.main_img} name={pro.name} price={pro.sku_list.price} product_id={pro.product_id}/>
		});
		return (
			<div>
				<div className="shopList">
		    		<ul className="buy_sel">
			    		{listProduct}
		    		</ul>	
		    	</div>
			</div>
		)
	}
})

module.exports = BarList