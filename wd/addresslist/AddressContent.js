var React = require('react');

var AddressContent = React.createClass({
	render:function(){
		function GetRequest() {
		   var url = window.location.search; //获取url中"?"符后的字串
		   var theRequest = new Object();
		   if (url.indexOf("?") != -1) {
		      var str = url.substr(1);
		      strs = str.split("&");
		      for(var i = 0; i < strs.length; i ++) {
		         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
		      }
		   }
		   return theRequest;
		}
		var Request = new Object();
		Request = GetRequest();
        var str = Request['order_id'];
        var url="editaddress.html?order_id="+str;
        return (
			<div>
				<div className="content">
					<div className="delivery">
			    		<a href={url}>
			    			<span className="deadd fnormal"><img src="images/icon_add.png" className="icon_add"/>收获地址</span>
			    			<span className="deaddicon"><i className="icon_arrow"></i></span>
			    		</a>
			    	</div>
				</div>
			</div>
		)	
	}
})

module.exports = AddressContent