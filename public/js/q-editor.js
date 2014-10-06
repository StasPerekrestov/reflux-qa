/** @jsx React.DOM */
var React = require('react'),
	Input = require('react-bootstrap').Input,
	actions = require('./qa-actions');

var Editor = React.createClass({
	handleValueChange: function(e){
		var newVal = e.target.value;
		actions.questionUpdated(this.props.question.get('id'), newVal);
	},
	render: function(){
		var q = this.props.question;
		return (<div>
			        <Input
				          type="text"
				          value={q.get('value')}
				          placeholder="Enter text"
				          label={q.get('name')}
				          onChange={this.handleValueChange}
				          />
          		</div>);
	}
});

module.exports = Editor;