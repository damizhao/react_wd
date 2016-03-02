var path = require('path');
module.exports = {
	entry:{
		page1:path.resolve(__dirname, 'js/main.js'),
		page2:path.resolve(__dirname, 'listjs/list.js'),
		page3:path.resolve(__dirname, 'detailjs/detailjs.js'),
		page4:path.resolve(__dirname, 'payjs/payjs.js'),
		page5:path.resolve(__dirname, 'buyjs/buyjs.js'),
		page6:path.resolve(__dirname, 'addresslist/address.js'),
		page7:path.resolve(__dirname, 'addressedit/editaddress.js')
	},
	output:{
		path:'dist',
		filename:'[name].js'
	},
	module:{
		loaders:[
			{ test: /\.jsx?$/, loader: 'jsx-loader?harmony' },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
		]
	}
}