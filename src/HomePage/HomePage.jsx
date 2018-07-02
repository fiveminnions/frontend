import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Tabs, Tab} from 'react-bootstrap'

import { userActions } from '../_actions';
import ExpandRow from '../JobSearch/JobSearch'

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
        this.check = this.check.bind(this);
    
        this.state = {
          key: 1
        };
      }
    
      handleSelect(key) {
        alert(`selected ${key}`);
        this.setState({ key });
      }
      check(){
          console.log("A");
      }
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div>
                <Tabs
                    activeKey={this.state.key}
                    onSelect={this.handleSelect}
                    id="controlled-tab-example"
                >
                    <Tab eventKey={1} title="Job Search">
                        <ExpandRow/>
                </Tab>
                    <Tab eventKey={2} title="Jobs Applied">
                        Tab 2 content
        </Tab>
                    <Tab eventKey={3} title="Contact Us" disabled>
                        Tab 3 content
        </Tab>
                </Tabs>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };