/**
 * Contains tempo label, increment/decrement tempo
 * buttons, and tempo slider.
 */

import React from 'react';

export default class TempoInputs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="tempo-input-row">
          <div style={{
            textAlign: "center",
            width: "100%",
            fontSize: "5rem",
          }}><b>{this.props.chord}</b></div>
        </div>
        <div className="tempo-input-row">
          <button 
            name={"decrement-tempo"} 
            onClick={this.props.onClick}  
            className="btn-circle"
          >–</button>

          <div className="tempo-label">
            <span id="tempo-label">{this.props.tempo}</span><span className="bpm-label">&nbsp;bpm</span>
          </div>

          <button 
            name={"increment-tempo"} 
            onClick={this.props.onClick} 
            className="btn-circle"
          >+</button>
        </div>

        <div className="slider-row">
          <input 
            type="range" 
            id="tempo" 
            min={this.props.minTempo} 
            max={this.props.maxTempo} 
            step="1"
            value={this.props.tempo}
            onChange={this.props.onChange}
          />
        </div>
      </>
    );
  }
}