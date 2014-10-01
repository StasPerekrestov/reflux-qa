/** @jsx React.DOM */
var React = require('react'),
	Input = require('react-bootstrap').Input;

var Editor = React.createClass({
	render: function(){
		debugger;
		return (<div>
			        <Input
				          type="text"
				          value={this.props.question}
				          placeholder="Enter text"
				          label="Working example with validation"
				          />
          		</div>);
	}
});

module.exports = Editor;