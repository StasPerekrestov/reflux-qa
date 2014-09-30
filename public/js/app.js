/** @jsx React.DOM */
/*jshint node:true, browser: true*/

var React   = require('react'),
	Reflux  = require('reflux'),
	Button  = require('react-bootstrap').Button,
	Panel   = require('react-bootstrap').Panel,
	qaStore = require('./qa-store.js'),
	actions = require('./qa-actions.js');

var QA = React.createClass({
    onLoadChange: function(qa) {
        this.setState({
            qa: qa
        });
    },
    getInitialState: function(){
    	return {qa: []};
    },
    componentDidMount: function() {
        this.unsubscribe = qaStore.listen(this.onLoadChange);
    },
    componentWillUnmount: function() {
        this.unsubscribe();
    },
    handleDoActionClick: function(){
    	actions.load();
    },
    render: function() {
    	var title = (<h3>Test</h3>);

		var panelsInstance = (
		    <div>
		      <Panel header={title}>
		        <Button  bsStyle="primary" onClick={this.handleDoActionClick}>Do action</Button>
		      </Panel>
		    </div>
		  );
        return panelsInstance;
    }
});

React.renderComponent(<QA/>, document.getElementById("app"));
