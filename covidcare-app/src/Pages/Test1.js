import React, { Component } from "react";

class Test1 extends Component {
  next = (e) => {
    e.preventDefault();
    this.props.next();
  };
  prev = (e) => {
    e.preventDefault();
    this.props.prev();
  };
  render() {
    // const { next, prev } = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>COVID-19 ONLINE TEST</h3>
              <div className="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div>
                <h5>Please select ALL symptoms that apply.</h5>

                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <th scope="row"></th>
                      <td><input type="radio" alt="fever" /> Fever</td>
                      <td><input type="radio" alt="headache"/> Headache</td>
                    </tr>

                    <tr>
                      <th scope="row"></th>
                      <td><input type="radio" alt="dry cough"/> Dry Cough</td>
                      <td><input type="radio" alt="conjunctivities"/> Conjunctivities</td>
                    </tr>

                    <tr>
                      <th scope="row"></th>
                      <td><input type="radio" alt="tiredness"/> Tiredness</td>
                      <td><input type="radio" alt="rash"/> Skin rash</td>
                    </tr>

                    <tr>
                      <th scope="row"></th>
                      <td><input type="radio" alt="sore"/> Sore throat</td>
                      <td><input type="radio" alt="aches"/> Aches and Pains</td>
                    </tr>

                    <tr>
                      <th scope="row"></th>
                      <td><input type="radio" alt="loss of smell"/> Loss of taste and smell</td>
                      <td><input type="radio" alt="shortness of breath"/> Shortness of breath</td>
                    </tr>
                  </tbody>
                </table>

                <p>
                  How many individuals are experiences one or more of the
                  selected symptoms.?
                </p>
                <button type="submit" className="btn btn-primary">
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
      </div>
    );
  }
}

export default Test1;
