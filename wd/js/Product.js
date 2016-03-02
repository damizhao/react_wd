var React = require('react');
var ProductList = require('./ProductList.js');

var Product = React.createClass({
	render:function(){
		var pro=this.props.data;
		if(!Array.isArray(pro)) throw new Error('error');
		var proList=pro.map(function(pro){
			return <ProductList key={pro.name} main_img={pro.main_img} title={pro.name} price={pro.sku_list.price} ori_price={pro.sku_list.ori_price} product_id={pro.product_id}/>
		})
		var url="list.html?group_id="+this.props.group_id
		return(
			<div>
				<section className="list_hd" key={this.props.key}>
		    		<a href={url}>
		    			{this.props.titleMessage}
		    			<i className="icon_arrow"></i>
		    		</a>
		    	</section>
		    	<section className="detail">
		    		<ul>
		    			{proList}
		    		</ul>
		    	</section>
			</div>
		)
	}
})

module.exports = Product