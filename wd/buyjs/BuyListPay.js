var React = require('react');
var SkuList = require('./SkuList.js');

var BuyListPay = React.createClass({
	handlerminus:function(e){
		 e.preventDefault();
		var count= React.findDOMNode(this.refs.count).value.trim();
		if(count>1){
			React.findDOMNode(this.refs.count).value=count-1;
		}else{
			count==1;
		}
	},
	handlerplus:function(){
		var count=this.refs.count.getDOMNode().value.trim();
		this.refs.count.getDOMNode().value=parseInt(count) + 1;
	},
	render:function(){
		var sku_info=this.props.data.sku_info;
		var sInfo=[];
		for (ss in sku_info){
			sInfo.push(sku_info[ss]);
		}
		if(!Array.isArray(sInfo)) throw new Error('error');
		var skuInfo = sInfo.map(function(sku){
			return <SkuList pname={sku.name} list={sku.list} pid={sku.id} />
		})
		return (
			<div>
				<section className="list_hd buy_count">
		    		<span>
			  			{skuInfo}
		    			<ul className="count">
		    				<li ref="minus" onClick={this.handlerminus}>-</li>
		    				<li><input type="text" value='1' id="count"  readOnly="true" ref="count"/></li>
		    				<li ref="plus" onClick={this.handlerplus}>+</li>
		    			</ul>
		    		</span>
		    	</section>
			</div>
		)
	}
})

module.exports = BuyListPay