var React = require('react');
var BuyAddress = require('./BuyAddress.js');
var BuyNews = require('./BuyNews.js');

var BuyContent = React.createClass({
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
        var str = Request['order_id'];
        var add = Request['address_id'];
        $.ajax({
            type: 'GET',
            url: 'http://wx.youyoumob.com/api/order_info',
            data: {order_id:str,address_id:add},
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
	
	render:function(){
		if(this.state.load){
			return (
				<div>
					<div className="content">
				    	<BuyAddress data={this.state.data}/>
				    	<BuyNews data={this.state.data}/>
				    </div>
				</div>
			)
		}else{
			return (
				<div></div>
			)
		}
	}
})

module.exports = BuyContent