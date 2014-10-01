/** @jsx React.DOM */
/*jshint node:true, browser: true*/

var React = require('react'),
    Reflux = require('reflux'),
    Button = require('react-bootstrap').Button,
    Panel = require('react-bootstrap').Panel,
    ListGroup = require('react-bootstrap').ListGroup,
    ListGroupItem = require('react-bootstrap').ListGroupItem,
    qaStore = require('./qa-store.js'),
    actions = require('./qa-actions.js');
    Immutable = require('immutable'),
    Editor = require('./q-editor.js');

var QA = React.createClass({
    mixins: [Reflux.listenTo(qaStore, "onLoadChange")],
    onLoadChange: function(qa) {
        this.setState({
            qa: qa
        });
    },
    getInitialState: function(){
    	return {qa: Immutable.Map()};
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
        var listgroupInstance = (
                    <ListGroup>
                     {this.state.qa.map(q => (<ListGroupItem><Editor question={q} /></ListGroupItem>)).toArray()}
                    </ListGroup>
                  );
        return (<div>
                {panelsInstance}
                {listgroupInstance}
                </div>);
    }
});

React.renderComponent(<QA/>, document.getElementById("app"));
