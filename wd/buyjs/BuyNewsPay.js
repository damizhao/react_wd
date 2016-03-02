var React = require('react');

var BuyNewsPay = React.createClass({
	render:function(){
		var data = this.props.data;
		return (
			<div>
				<header>
		    		<div className="buy_sel" id={data.product_id}>
		    			<img className="smallimg" src={data.product_base.main_img} alt=""/>
						<srtong className="title">{data.product_base.name}</srtong>
		    			<span className="money">¥{data.sku_list[0].price/100}</span>
		    		</div>		
		    	</header>
			</div>
		)	
	}
})

module.exports = BuyNewsPay