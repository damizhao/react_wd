var React = require('react');
var EditNews = require('./EditNews.js');

var EditContent = React.createClass({
	handlerSubmit:function(e){
		e.preventDefault();
		var person=document.getElementById('person').value.trim();
		var mobile=document.getElementById('mobile').value.trim();
		var address=document.getElementById('address').value.trim();
		if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(mobile))){
	        alert("手机号码不正确！");
	        return false;
	  	}
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
	    if(person==''||mobile==''||address==''||str==''){
	    	alert('请将信息填写完整！')
	    }else{
	    	$.ajax({
	    		url:'http://wx.youyoumob.com/api/address',
	    		type:'get',
	    		data:{order_id:str,name:person,mobile:mobile,address:address},
	    		dataType:'jsonp',
                jsonp: 'jsonpCallback',
                jsonpCallback: 'jsonpCallback',
                success:function(d){
                    if(d.status==1){
                        window.location.href='pay.html?order_id='+d.data.order_id+'&address_id='+d.data.address_id
                    }else{
                        alert(d.info);
                    }
                }
	    	})
	    }
	},
	render:function(){
		return (
			<div>
				<div className="content">
			    	<EditNews />
			    	<p className="buy_btn"><a href="" onClick={this.handlerSubmit}>确定</a></p>
			    </div>
			</div>
		)
	}
})

module.exports = EditContent