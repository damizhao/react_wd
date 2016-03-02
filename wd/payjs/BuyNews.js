var React = require('react');

var BuyNews = React.createClass({
	handlerSubmit:function(){
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
		$.ajax({
            url:'http://wx.youyoumob.com/api/pay',
            type:'get',
            data:{order_id:str},
            dataType:'jsonp',
            jsonp: 'jsonpCallback',
            jsonpCallback: 'jsonpCallback',
            success:function(d){
                if(d.status==1){
                    window.location.href=d.data
                }else{
                    alert(d.info);
                }
            }   
		})
	},
	render:function(){
		var data=this.props.data;
		var ss=data.order.sku_info.split(',');
		console.log(ss);
		if(ss!=''){
			var a2=ss[2];
			var a5=ss[5];
			var b2=a2.substr(6);
			var b5=a5.substr(6);
			return (
				<div>
					<div className="delivery">
			    		<div className="explain">
			    			<img className="smallimg" src={data.product.main_img} alt=""/>
							<srtong className="title">{data.product.name}</srtong>
							<srtong className="title titled"><span>{b2}</span><span>{b5}</span></srtong>
			    			<span className="deaddicon deaddicond">¥{data.order.pay_price/100}</span>
			    		</div>
			    	</div>
			    	<p className="paid">实收金额<i>¥{data.product.sku_list.price/100}X{data.order.number}</i></p>
					<p className="buy_btn"><span onClick={this.handlerSubmit}>去付款</span></p>
				</div>
			)
		}else{
			return (
				<div>
					<div className="delivery">
			    		<div className="explain">
			    			<img className="smallimg" src={data.product.main_img} alt=""/>
							<srtong className="title">{data.product.name}</srtong>
			    			<srtong className="title titled"><span></span><span></span></srtong>
			    			<span className="deaddicon deaddicond">¥{data.order.pay_price/100}</span>
			    		</div>
			    	</div>
			    	<p className="paid">实收金额<i>¥{data.product.sku_list.price/100}X{data.order.number}</i></p>
					<p className="buy_btn"><span onClick={this.handlerSubmit}>去付款</span></p>
				</div>
			)
		}
		
	}
})

module.exports = BuyNews