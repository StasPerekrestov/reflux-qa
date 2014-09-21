/** @jsx React.DOM */
/*jshint node:true, browser: true*/

var React = require('react');
debugger;
var TestComponent =  React.createClass({
	render: function(){
		return  (<span>hello again</span>);
	}
});

React.renderComponent(<TestComponent/>, document.getElementById("app"));