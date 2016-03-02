var React = require('react');
var Listsku = require('./Listsku.js');
var SkuList = React.createClass({
	render:function(){
		var list=this.props.list;
		var listSku = list.map(function(lis){
			return <Listsku lname={lis.name} lid={lis.id} />
		})
		return (
			<div>
				<p className="productHead" id={this.props.pid}>{this.props.pname}</p>
				<div className="productCol">
					{listSku}
				</div>
			</div>
		)
	}
})

module.exports = SkuList