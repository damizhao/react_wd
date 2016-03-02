var React = require('react');

var EditNews = React.createClass({
	render:function(){
		return (
			<div>
				<ul className="addedit">
		    		<li><label>收货人<input type="text" id='person'/></label></li>
		    		<li><label>手机号码<input type="text" id='mobile'/></label></li>
		    		<li><label>详细地址<textarea id='address'></textarea></label></li>
		    	</ul>
			</div>
		)	
	}
})

module.exports = EditNews