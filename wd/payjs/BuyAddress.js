var React = require('react');

var BuyAddress = React.createClass({
	render:function(){
		var order=this.props.data.order;
		var url="addresslist.html?order_id="+order.id;
		var address = this.props.data.address;
		if(address==''){
			return (
				<div>
					<div className="delivery">
			    		<a href={url}>
			    			<span className="deadd">收获地址</span>
			    			<span className="deaddicon">添加地址<i className="icon_arrow"></i></span>
			    		</a>
			    		<a href="">
			    			<span className="deadd">配送方式</span>
			    			<span className="deaddicon">全国(包邮)<i className="icon_arrow"></i></span>
			    		</a>
			    	</div>
				</div>
			)	
		}else{
			return (
				<div>
					<div className="delivery">
			    		<a href={url}>
			    			<span className="deadd">收获地址</span>
			    			<span className="deaddicon">
			    				<span className="news">{address.name}</span><span className="news">{address.mobile}</span>
			    				<span className="news">{address.address}</span>
			    				<i className="icon_arrow"></i>
			    			</span>
			    		</a>
			    		<a href="">
			    			<span className="deadd">配送方式</span>
			    			<span className="deaddicon">全国(包邮)<i className="icon_arrow"></i></span>
			    		</a>
			    	</div>
				</div>
			)	
		}
		
	}
})

module.exports = BuyAddress