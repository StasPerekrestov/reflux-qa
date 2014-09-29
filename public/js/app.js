/** @jsx React.DOM */
/*jshint node:true, browser: true*/

var React = require('react'),
	Button = require('react-bootstrap').Button;

var TestComponent =  React.createClass({
	handleClick: function(e){
		alert('tada');
	},
	render: function(){
		return  (<Button bsStyle="primary" bsSize="large" onClick={this.handleClick}>Large button</Button>);
	}
});

React.renderComponent(<TestComponent/>, document.getElementById("app"));
