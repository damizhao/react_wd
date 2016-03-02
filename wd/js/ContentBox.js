var React = require('react');
var ContentList = require('./ContentList.js');
var Hotshop = require('./Hotshop.js');

var ContentBox = React.createClass({
	getInitialState:function(){
	    		return {
	    			data:[],
	    			load:false
	    		}
	    	},
			componentDidMount: function() {
					$.ajax({
						type:'GET',
						url:'http://wx.youyoumob.com/api/group_list',
						dataType:'jsonp',
						jsonp:'jsonpCallback',
						jsonpCallback:'jsonpCallback',
						success:function(data){
							this.setState({data:data,load:true});
						}.bind(this),
						error:function(e){
							alert('数据没有获取成功！');
						}.bind(this)
				    });
			},
	    	render:function(){
	    		if(this.state.load) {
		    		return (
		    			<div>
							<div className="content">
						    	<header>
						    		<span className="banner_pic"><img src="images/banner.jpg" alt="" className="banner_img"/></span>
						    		<span className="banner_logo"><img src="images/logo.jpg" alt=""/></span>
						    		<strong className="banner_title">游友</strong>
						    	</header>
						    	<ContentList />
						    	<Hotshop data={this.state.data}/>
						    	<footer>
						    		<a href="">店铺全部商品</a>
						    	</footer>
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

module.exports = ContentBox