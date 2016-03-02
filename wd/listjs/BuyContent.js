var React = require('react');
var BarList = require('./BarList.js');

var BuyContent = React.createClass({
	getInitialState:function(){
		return {
			data:[],
			sort:'asc'
		};
	},
	componentDidMount:function(){
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
        var str = Request['group_id'];
		$.ajax({
			type:'GET',
			url:'http://wx.youyoumob.com/product/group',
			data:{group_id:str,sort:'asc'},
			dataType:'jsonp',
			jsonp:'jsonpCallback',
			jsonpCallback:'jsonpCallback',
			success:function(data){
				this.setState({data:data,load:true});
			}.bind(this),
			error:function(e){
				alert('1');
			}.bind(this)
	    });
	},
	handlerClick:function(){
		var that=this;
		if(this.state.sort =='asc'){
			this.setState({sort:'dasc'},function(){
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
	            var str = Request['group_id'];
				var sort = this.state.sort;
				$.ajax({
					type:'GET',
					url:'http://wx.youyoumob.com/product/group',
					data:{group_id:str,sort:sort},
					dataType:'jsonp',
					jsonp:'jsonpCallback',
					jsonpCallback:'jsonpCallback',
					success:function(data){
						that.setState({data:data});
					}.bind(this),
					error:function(e){
						alert('1');
					}.bind(this)
			    });
			})		
		}else{
			this.setState({sort:'asc'},function(){
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
		            var str = Request['group_id'];
				var sort = this.state.sort;
				$.ajax({
					type:'GET',
					url:'http://wx.youyoumob.com/product/group',
					data:{group_id:str,sort:sort},
					dataType:'jsonp',
					jsonp:'jsonpCallback',
					jsonpCallback:'jsonpCallback',
					success:function(data){
						that.setState({data:data});
					}.bind(this),
					error:function(e){
						alert('1');
					}.bind(this)
			  });
			})
		}
	},
	render:function(){
		return (
			<div>
				<div className="content">
			    	<div className="bar">
			    		<span id="js_price" className="js_price act" onClick={this.handlerClick}>价格</span><span className="js_sale">销量</span><span>上架时间</span>
			    	</div>
			    	<BarList data={this.state.data}/>
			    </div>
			</div>
		)
	}
})

module.exports = BuyContent