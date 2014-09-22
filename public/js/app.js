/** @jsx React.DOM */
/*jshint node:true, browser: true*/

var React = require('react'),
	Button = require('react-bootstrap').Button;
var TestComponent =  React.createClass({
	render: function(){
		return  (<Button bsStyle="primary" bsSize="large">Large button</Button>);
	}
});

React.renderComponent(<TestComponent/>, document.getElementById("app"));
