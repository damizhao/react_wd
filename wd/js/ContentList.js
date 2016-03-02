var React = require('react')

var ContentList = React.createClass({
	render:function(){
		return (
			<div>
				<section className="list">
		    		<ul>
		    			<li><a href="list.html?group_id=400535960" id='400535960'>保温杯/壶</a></li>
		    			<li><a href="list.html?group_id=400551754" id='400551754'>美妆</a></li>
		    			<li><a href="list.html?group_id=400610085" id='400610085'>厨房用品</a></li>
		    			<li><a href="list.html?group_id=400611524" id='400611524'>个人护理</a></li>
		    		</ul>
		    	</section>
			</div>
		)
	}
})

module.exports = ContentList