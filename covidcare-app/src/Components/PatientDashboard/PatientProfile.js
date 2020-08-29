import React, { Component } from "react";
//import {Redirect, Link} from "react-router-dom"

class PatientProfile extends Component {
    constructor(props){
        super(props)
        this.state={
            institution:"",
            firstname:"",
            lastname:"",
            streetaddress:"",
            streetaddresstwo:"",
            city:"",
            country:"",
            email:"",
            phone:""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange =(e)=>{
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
        
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
    }
    // success= (e)=>{
    //     //e.preventDefault()
    //     //this.props.history.push("/patienttest")
    //     ()=(<Redirect to="/patienttest"/>)
    // }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="institution" className="text-form">Insutitution / Family Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="institution"
                    name="institution"
                    value={this.state.institution}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-row">

                <div className="form-group col-md-6">
                  <label htmlFor="firstname" className="text-form">Firstname</label>
                  <input
                    type="textt"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.handleChange}

                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="lastname" className="text-form">Lastname</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="streetaddress" className="text-form">Street Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="streetaddress"
                    name="streetaddress"
                    value={this.state.streetaddress}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="streetaddresstwo" className="text-form">Street Address line 2</label>
                  <input
                    type="text"
                    className="form-control"
                    id="streetaddresstwo"
                    name="streetaddresstwo"
                    value={this.state.streetaddresstwo}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="city" className="text-form">City</label>
                  <input
                    type="textt"
                    className="form-control"
                    id="city"
                    name="city"
                    value={this.state.city}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="country" className="text-form">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    name="country"
                    value={this.state.country}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="email" className="text-form">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="phone" className="text-form">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
                 

                    
              <button 
              type="submit" 
              className="rounded-pill" 
              >
                Save Changes
              </button>
        
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientProfile;
