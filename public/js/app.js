/** @jsx React.DOM */
/*jshint node:true, browser: true*/
'use strict';

var React = require('react');
var TestComponent =  React.createClass({
	render: function(){
		return  (<span>hello again</span>);
	}
});

React.renderComponent(new <TestComponent/>, document.getElementById("app"));
