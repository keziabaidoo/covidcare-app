import React, { Component } from "react";
import PatientProfile from "../Components/PatientDashboard/PatientProfile";
import PatientTest from "../Components/PatientDashboard/PatientTest";
import PatientRessources from "../Components/PatientDashboard/PatientRessources";
import PatientSetting from "../Components/PatientDashboard/PatientSetting";
import PatientHelp from "../Components/PatientDashboard/PatientHelp";
// import Test1 from "../Pages/Test1"

class PatientDashboard extends Component {
  render() {
    return (
      <div className="container wholeContainer">
        
            <div className="row">
              <div className="col-3 firstContainer text-center">
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Profile
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                   Test
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-messages-tab"
                    data-toggle="pill"
                    href="#v-pills-messages"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                   Ressources
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-settings-tab"
                    data-toggle="pill"
                    href="#v-pills-settings"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    Settings
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-gethelp-tab"
                    data-toggle="pill"
                    href="#v-pills-gethelp"
                    role="tab"
                    aria-controls="v-pills-gethelp"
                    aria-selected="false"
                  >
                    Get Help
                  </a>
                  <button className="btn btn-primary"> Log Out</button>
                </div>
              </div>
              <div className="col-9">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <PatientProfile />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <PatientTest/>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <PatientRessources/>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-settings"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                   <PatientSetting/>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-gethelp"
                    role="tabpanel"
                    aria-labelledby="v-pills-gethelp-tab"
                  >
                    <PatientHelp />
                  </div>
                </div>
              </div>
            </div>
          </div>
      
    );
  }
}
export default PatientDashboard;
