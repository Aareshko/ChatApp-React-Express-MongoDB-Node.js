import React from 'react';
import { Switch, Route, } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

import Dashboard from '../../../routes/Dashboard';
import Channel from '../../../routes/Channel';

class PrivateApp extends React.Component {
  componentDidMount() {
    this.props.loadProfile();
  }

  render() {
    const { loading, currentUser } = this.props;

    if(loading) {
      return <div>loading...</div>
    }

    return (
      <div className="app">
        <Header user={currentUser} logout={this.props.logoutUser} />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/messages/:channelId" component={Channel} />
            </Switch>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default PrivateApp;
