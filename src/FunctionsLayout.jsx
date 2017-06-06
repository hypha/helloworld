import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Toolbar} from 'react-onsenui';
import FunctionsHeader from "./FunctionsHeader";
import FunnctionsTable from "./FunctionsTable";


export default class FunctionsLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Functions > Hair Dryer",
    }
  };




  changeTitle(title) {
    this.setState({title});
  }

  render() {

    const container = document.querySelector("#container");

    const tableModel = {
        cols: ["Name", "Age"],
        rows: [{
            "Name": "Chase",
                "Age": "27"
        }],

    }
    return (
      <div>
        <FunctionsHeader changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <FunctionsTable tableModel={tableModel} container={container}/>
      </div>
    );
  }
}
