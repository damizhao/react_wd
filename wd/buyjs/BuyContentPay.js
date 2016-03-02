var React = require('react');
var BuyNewsPay = require('./BuyNewsPay.js');
var BuyListPay = require('./BuyListPay.js');

var BuyContentPay = React.createClass({
	getInitialState: function () {
        return {data: {}, load: false};
    },
    loadCommentsFromServer: function () {
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
        var str = Request['product_id'];
        $.ajax({
            type: 'GET',
            url: 'http://wx.youyoumob.com/api/product_detail',
            data: {product_id:str},
            dataType: 'jsonp',
            jsonp: 'jsonpCallback',
            jsonpCallback: 'jsonpCallback',
            success: function (data) {
                this.setState({data: data, load: true});
            }.bind(this),
            error: function (e) {
            }.bind(this)
        });
    },
    componentDidMount: function () {
        this.loadCommentsFromServer();
    },
    handlerSubmit:function(e){
    	e.preventDefault();
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
        var str = Request['product_id'];
        var num = document.getElementById('count').value.trim();
        var parentName =  document.getElementsByClassName("productHead");
        var sonName = document.getElementsByClassName("active");
        var sku='';
		for(var i=0;i<parentName.length;i++){
			if(sonName.length != 2||num==''){
    			alert('请选择产品规格');
    			return false;
    		}else{
    			sku +='pname:'+parentName[i].innerHTML+',pid:'+parentName[i].id+',sname:'+sonName[i].innerHTML+',sid:'+sonName[i].id+';';
    		}
        }
        
    	var data={
    		product_id:str,
    		num:num,
    		sku:sku
    	}
		$.ajax({
            url:'http://wx.youyoumob.com/api/order',
            type:'get',
            data:data,
            dataType:'jsonp',
            jsonp: 'jsonpCallback',
            jsonpCallback: 'jsonpCallback',
            success:function(d){
                if(d.status==1){
                    window.location.href='pay.html?order_id='+d.id
                }else{
                    alert(d.info);
                }
            }
        });    
    		
    },
	render:function(){
		if(this.state.load){
			return (
				<div>
					<div className="content">
				    	<BuyNewsPay data={this.state.data}/>
				    	<BuyListPay data={this.state.data}/>
				    	<p className="buy_btn"><a href=" " onClick={this.handlerSubmit}>购买</a></p>
				    </div>
				</div>
			)
		}else{
			return (
				<div>
				</div>
			)
		}
	}
})

module.exports = BuyContentPay