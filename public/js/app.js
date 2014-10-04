/** @jsx React.DOM */
/*jshint node:true, browser: true*/

var React = require('react'),
    Reflux = require('reflux'),
    Button = require('react-bootstrap').Button,
    Panel = require('react-bootstrap').Panel,
    TabbedArea = require('react-bootstrap').TabbedArea,
    TabPane = require('react-bootstrap').TabPane,
    qaStore = require('./qa-store.js'),
    actions = require('./qa-actions.js'),
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
    	return {qa: Immutable.fromJS({groups:{}})};
    },
    handleDoActionClick: function(){

    },
    handleGroupSelection: function(g){
        actions.changeSelectedGroup(g);
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
        var key = this.state.qa.get('selectedGroup');
        var quesionGroups = (
                    <TabbedArea activeKey={this.state.qa.get('selectedGroup')} onSelect={this.handleGroupSelection}>
                     {this.state.qa.get('groups').map((qa, groupName) => {
                        return (<TabPane tab={groupName} key={groupName}>
                                    <Group questions={this.state.qa.get('questions')} />
                                </TabPane>);}).toArray()}
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
