import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Toolbar} from 'react-onsenui';
import {Sigma, sigInst, NodeShapes, EdgeShapes, RandomizeNodePositions, RelativeSize, LoadJSON} from 'react-sigma';


export default class ModelPage extends React.Component {
  render() {
    return (
      <Page>
        <div>
          <b>Model > Design</b>
        </div>

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

      </Page>
    );
  }
}
