/** @jsx React.DOM */
var React = require('react'),
	Editor = require('./q-editor.js');

var  Group = React.createClass({

	render: function(){
		return (<div>
					{this.props.group.map((question, id) =>	<Editor question={question.set('id', id)}/>).toArray()}
				</div>);
	}
});

module.exports = Group;