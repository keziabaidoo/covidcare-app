import React, { Component } from "react";

export class ResultPage extends Component {
  next = (e) => {
    e.preventDefault();
    this.props.next();
  };
  prev = (e) => {
    e.preventDefault();
    this.props.prev();
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h4>Your Test Result</h4>

            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "15%" }}
                aria-valuenow="15"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              <div
                class="progress-bar bg-success"
                role="progressbar"
                style={{ width: "30%" }}
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              <div
                class="progress-bar bg-info"
                role="progressbar"
                style={{ width: "20%" }}
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        <p>Action Steps:</p>
        <div className="mt-3">
          <input className="line-text" type="radio" name="measures" />
          Stay safe and keep following COVID-19 measures
        </div>

        <div>
          <input className="line-text" type="radio" name="consultation" />
          Please request a consultation
          <button className="rounded-0">Click here</button>
        </div>

        <div>
          <input className="line-text" type="radio" name="request" />
          Please request a consultation
          <button className="rounded-0">Click here</button>
        </div>

        <div className="row">
          <div className="col">
            <div className=" mt-3">
              <button type="submit" className="btn btn-primary ">
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-pill"
                onClick={this.prev}
              >
                prev
              </button>
              <button
                type="submit"
                className="rounded-pill"
                onClick={this.next}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultPage;
