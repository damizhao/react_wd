var React = require('react');

var Listsku = React.createClass({
	getInitialState:function(){
		return {
			choce:true
		}
	},
	choose:function(e){
		var a=e.target;
		var p=a.parentNode.children;
		if(this.state.choce==true){
			this.setState({choce:false},function(){
				for(var i=0;i<p.length;i++){
					if(p[i] != a){
						p[i].setAttribute('class', '');
					}else{
						p[i].setAttribute('class', 'active');
					}
				}
			})
		}else{						
			this.setState({choce:true},function(){
				for(var i=0;i<p.length;i++){
					if(p[i] != a){
						p[i].setAttribute('class', '');
					}else{
						p[i].setAttribute('class', 'active');
					}
				}
			})
		}

	},
	render:function(){
		return (
			<span id={this.props.lid} onClick={this.choose}>{this.props.lname}</span>
		)
	}
})

module.exports = Listsku