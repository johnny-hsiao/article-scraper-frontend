import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Emotion from './Emotion'


export default class EmotionGraphs extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {
    console.log("emotions: will mount");
  }

  componentDidMount() {
    console.log("emotions: did mount");
  }
  
  componentWillReceiveProps() {
    console.log("emotion: will receive props");
    
  }

  componentWillUpdate() {
    console.log("emotions: will update");
  }

  componentDidUpdate() {
    console.log("emotions: did update");
  }


  render() {
    console.log("render emotion prop", this.props.anger)
    return (
      <div>
        <div id="anger" className="col-xs-2" height="173">
          <Emotion {...this.props } elementId="anger" emotionScore={ this.props.anger } color="#d62728" />
        </div>
        <div id="disgust" className="col-xs-2" height="173">
          <Emotion {...this.props } elementId="disgust" emotionScore={ this.props.disgust } color="#2ca02c" />
        </div>
        <div id="fear" className="col-xs-2" height="173">
          <Emotion {...this.props } elementId="fear" emotionScore={ this.props.fear } color="#9467bd" />
        </div>
        <div id="joy" className="col-xs-2" height="173">
          <Emotion {...this.props } elementId="joy" emotionScore={ this.props.joy } color="#FFB000" />
        </div>
        <div id="sadness" className="col-xs-2" height="173">
          <Emotion {...this.props } elementId="sadness" emotionScore={ this.props.sadness } color="#1f77b4" />
        </div>
      </div>
    );
  }
}



