import React, { Component } from "react";

class Test4 extends Component {

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

              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{width: "50%"}}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              
                <p>
                  <input type="radio" alt="submit"/> By submitting this test,<p>
                   I confirm that the information
                   provided is true, complete and accurate.
                 </p>
                   
                </p>
            
              

              </div>
          </div>

              <div className="row">
                <div className="col">
                  <h5>Signature</h5>

                  <textarea className="border"></textarea>
                  <button type="reset" className="rounded-0">
                
                 
                    clear
                  </button>

                 <div className="mt-3">
                  <button type="submit" className="rounded-0">
                    Get Result
                  </button>
                  </div>
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
export default Test4;
