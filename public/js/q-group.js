/** @jsx React.DOM */
var React = require('react'),
	Editor = require('./q-editor');

var  Group = React.createClass({

	render: function(){
		return (<div>
					{this.props.questions.map((question, id) =>	{
						var questionWithId = question.set('id', id);
						return (<Editor question={questionWithId}/>);
					}).toArray()}
				</div>);
	}
});

module.exports = Group;