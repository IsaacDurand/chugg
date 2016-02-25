import React, {Component} from 'react';
import {ButtonToolbar} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Well} from 'react-bootstrap';
import {Input} from 'react-bootstrap';
import {Collapse} from 'react-bootstrap';


export default class Gulpoptions extends Component{
	render() {
		return (
			<div id='Gulpoptions' className="col-md-5">

        <div className="centered">
          <h2 className="brand redcallout centered">Build Your Gulpfile</h2>
          <h3 className="centered blueheader display">
            Need a gulpfile<br />
            for your next React, Angular,<br />
            or Node project?<br />
            We'll walk you through it.
          </h3>
        </div>

        <div>
          <div className="headerbutton centered">
            <Button value="paths" bsSize="large" onClick={this.props.accordionSection.bind(this)} >Start With Your Basic App Setup</Button>
          </div>

          <Collapse in={this.props.accordionState.paths}>
            <div className="pad2 dottedblue">
              <h3 className="centered blueheader display">Where Are Your Files Located?</h3>

              <Well className="optsWell" bsSize="large">
                <Input type="text" name="css" label="Path to CSS" placeholder="styles/" defaultValue={this.props.paths.css} />
                <Input type="text" name="js" label="Path to Javascript" placeholder="js/" defaultValue={this.props.paths.js} />
                <Input type="text" name="app" label="Your Application" placeholder="App.js" defaultValue={this.props.paths.app} />
                <Input type="text" name="server" label="Your Server" placeholder="server/server.js" defaultValue={this.props.paths.server} />
                <Input type="text" name="server" label="Output File Location" placeholder="./build/" defaultValue={this.props.paths.build} onChange={this.props.gulpUpdateBuild.bind(this)} />
              </Well>
            </div>
          </Collapse>

        </div>

        <div>
          <div className="headerbutton centered">
            <Button bsSize="large" onClick={this.props.accordionSection.bind(this)} value="frameworks">Add Frameworks</Button>
          </div>

          <Collapse in={this.props.accordionState.frameworks}>
            <div className="pad2 dottedblue">
              <h3 className="centered blueheader display">Use These Common Frameworks?</h3>

              <Well className="optsWell" bsSize="large">
                <Button bsStyle="info" bsSize="large" block>React</Button>

                <Button bsStyle="info" bsSize="large" block>Angular</Button>

                <Button bsStyle="info" bsSize="large" block>Bootstrap</Button>

                <Button bsStyle="info" bsSize="large" block>jQuery</Button>
              </Well>
            </div>
          </Collapse>

        </div>

        <div>
          <div className="headerbutton centered">
            <Button bsSize="large" onClick={this.props.accordionSection.bind(this)} value="commontasks">Carry Out Common Tasks</Button>
          </div>

          <Collapse in={this.props.accordionState.commontasks}>
            <div className="pad2 dottedblue">
              <h3 className="centered blueheader display">Process Your Code:</h3>

              <Well className="optsWell" bsSize="large">
                <Button bsStyle="info" bsSize="large" block>Minify CSS</Button>

                <Button bsStyle="info" bsSize="large" block>Minify javascript</Button>

                <Button bsStyle="info" bsSize="large" block>Lint with JSHint</Button>

                <Button bsStyle="info" bsSize="large" block>Convert CoffeeScript</Button>

                <Button bsStyle="info" bsSize="large" block>Convert ES6 to ES5</Button>
              </Well>
            </div>
          </Collapse>

        </div>

        <div>
          <div className="headerbutton centered">
            <Button bsSize="large" onClick={this.props.accordionSection.bind(this)} value="poweroptions">Power User Options</Button>
          </div>

          <Collapse in={this.props.accordionState.poweroptions}>
            <div className="pad2 dottedblue">
              <h3 className="centered blueheader display">Try These Tools?</h3>

              <Well className="optsWell" bsSize="large">
                <Button bsStyle="info" bsSize="large" block>Google Closure Compiler</Button>

                <Button bsStyle="info" bsSize="large" block>Use BrowserSync</Button>
              </Well>
            </div>
          </Collapse>

        </div>
			</div>
		);
	}
}
