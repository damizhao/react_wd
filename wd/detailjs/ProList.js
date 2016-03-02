var React = require('react');

var ProList = React.createClass({
	render:function(){
        return (
            <tr key={this.props.key}>
                <td>{this.props.pid}</td><td>{this.props.pvid}</td>
            </tr>
        )
    }
})

module.exports = ProList