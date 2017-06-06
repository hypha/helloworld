import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Toolbar} from 'react-onsenui';
import ModelHeader from "./ModelHeader";
import {Sigma, sigInst, NodeShapes, EdgeShapes, RandomizeNodePositions, RelativeSize, LoadJSON} from 'react-sigma';

export default class ModelLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Model > Design",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <ModelHeader changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
          <Sigma renderer="canvas" settings={{labelSize:"fixed", maxNodeSize: 5}} >
            <EdgeShapes default="arrow"/>
            <NodeShapes default="def"/>
            <LoadJSON path ="./data.json">
              <RelativeSize initialSize={15}/>
            </LoadJSON>
          </Sigma>

          <Sigma renderer="canvas" graph={{nodes:[{id:"n1", label:"Alice"}, {id:"n2", label:"Rabbit"}], edges:[{id:"e1",source:"n1",target:"n2",label:"SEES"}]}} settings={{drawEdges:true}}>
              <RelativeSize initialSize={20}/>
              <RandomizeNodePositions/>
          </Sigma>
      </div>
    );
  }
}
