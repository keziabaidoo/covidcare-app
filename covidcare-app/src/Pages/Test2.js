import React, { Component } from "react";


 class Test2 extends Component {
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
              <h3>COVID-19 ONLINE TEST</h3>
              <div className="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="16"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p>
                In the past 14 days, have individuals had any contact with a
                known COVID-19 patient?
              </p>
              <button type="submit" className="rounded-pill">
                  NO
                </button>

                <button type="submit" className="rounded-pill">
                  YES
                </button>
            </div>
            
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
  export default Test2