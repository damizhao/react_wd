var React = require('react');
var Product = require('./Product.js');

var Hotshop = React.createClass({
	render:function(){
		var data=this.props.data;
		if(!Array.isArray(data)) throw new Error('error');
		var listComp=data.map(function(lis){
				return <Product key={lis.group_name} titleMessage={lis.group_name} group_id={lis.group_id} data={lis.product_list}/>
		})
		return (
			<div>
				{listComp}
			</div>
		)
	}
})

module.exports = Hotshop