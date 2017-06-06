import React from 'react';
import ReactDOM from 'react-dom';
import {Tabbar, Tab} from 'react-onsenui';

import ModelLayout from './ModelLayout';
import FunctionsLayout from './FunctionsLayout';

export default class App extends React.Component {
  renderTabs() {
    return [
      {
        content: <ModelLayout />,
        tab: <Tab label='Model' icon='md-home' />
      },
      {
        content: <FunctionsLayout />,
        tab: <Tab label='Functions' icon='md-settings' />
      }
    ]
  }

  render() {
    return (
      <Tabbar initialIndex={0} renderTabs={this.renderTabs.bind(this)} />
    );
  }
}
