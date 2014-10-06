/** @jsx React.DOM */
/*jshint node:true, browser: true*/

var React = require('react'),
    Reflux = require('reflux'),
    Button = require('react-bootstrap').Button,
    Panel = require('react-bootstrap').Panel,
    TabbedArea = require('react-bootstrap').TabbedArea,
    TabPane = require('react-bootstrap').TabPane,
    qaStore = require('./qa-store'),
    actions = require('./qa-actions'),
    Immutable = require('immutable'),
    Group = require('./q-group'),
    Grid = require('react-bootstrap').Grid,
    Row = require('react-bootstrap').Row,
    Col = require('react-bootstrap').Col;

var QA = React.createClass({
    mixins: [Reflux.listenTo(qaStore, "onQaStoreChange")],
    onQaStoreChange: function(qa) {
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
    	var title = (<h3>Test</h3>),
            key = this.state.qa.get('selectedGroup'),
            quesionGroups = (
                    <TabbedArea activeKey={this.state.qa.get('selectedGroup')} onSelect={this.handleGroupSelection}>
                     {this.state.qa.get('groups').map((qa, groupName) => {
                        return (<TabPane tab={groupName} key={groupName}>
                                    <Group questions={this.state.qa.get('questions')} />
                                </TabPane>);}).toArray()}
                    </TabbedArea>
                  );
        return (<div>
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={6} md={6}>
                                {quesionGroups}
                            </Col>
                        </Row>
                    </Grid>
                </div>);
    }
});

React.renderComponent(<QA/>, document.getElementById("app"));
actions.load();
