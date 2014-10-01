/** @jsx React.DOM */
/*jshint node:true, browser: true*/

var React = require('react'),
    Reflux = require('reflux'),
    Button = require('react-bootstrap').Button,
    Panel = require('react-bootstrap').Panel,
    TabbedArea = require('react-bootstrap').TabbedArea,
    TabPane = require('react-bootstrap').TabPane,
    qaStore = require('./qa-store.js'),
    actions = require('./qa-actions.js');
    Immutable = require('immutable'),
    Group = require('./q-group.js');

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
        var quesionGroups = (
                    <TabbedArea>
                     {this.state.qa.map((q, gName) => (<TabPane tab={gName} key={gName}>
                                                            <Group group={q} />
                                                        </TabPane>)).toArray()}
                    </TabbedArea>
                  );
        return (<div>
                {panelsInstance}
                {quesionGroups}
                </div>);
    }
});

React.renderComponent(<QA/>, document.getElementById("app"));
actions.load();
