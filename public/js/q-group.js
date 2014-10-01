/** @jsx React.DOM */
var React = require('react'),
	Editor = require('./q-editor.js');

var  Group = React.createClass({

	render: function(){
		return (<div>
					{this.props.questions.map((question, id) =>	{
						//debugger;
						return <Editor question={question.set('id', id)}/>;}).toArray()}
				</div>);
	}
});

module.exports = Group;