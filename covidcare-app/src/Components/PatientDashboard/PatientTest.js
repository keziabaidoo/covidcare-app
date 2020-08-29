import React, { Component } from "react";
import Test1 from "../../Pages/Test1";
import Test2 from "../../Pages/Test2";
import Test3 from "../../Pages/Test3";
import Test4 from "../../Pages/Test4"
import Test5 from "../../Pages/Test5";
import LastPage from "../../Pages/LastPage";
import  ResultPage from "../../Pages/ResultPage"

class PatientTest extends Component {
    constructor(props){
        super(props)
        this.state={
            step:0
        }
    }
    next=(e)=>{
      
        const {step} =this.state
        this.setState({step: step+1})
    }
    prev=(e)=>{
      
        const {step} =this.state
        this.setState({step: step-1})
    }
    
  render() {
   switch(this.state.step){
       case 0:
        return (
            <div className="text-plane">
              <h3 className="text-test">COVID-19 ONLINE TEST</h3>
      
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="text-one">
                      The test will take less than 10 minutes and provide instant
                      results.<p className="text-outline">Please answer all questions.</p> 
                      <p className="text-line">Click below to start your test</p>
                    </div>
      
                    <button type="submit" className="btn btn-primary " onClick={this.next}>
                      Take Test
                    </button>
                  </div>
                </div>
               
              </div>
              <div />
            </div>
          );
        case 1:
            return(
                <Test1 next={this.next} prev={this.prev} />
            );

            case 2:
                return(
                    <Test2 next={this.next} prev={this.prev} />
                );
                case 3:
                    return(
                        <Test3 next={this.next} prev={this.prev} />
                    );
                    case 4:
                        return(
                            <Test4 next={this.next} prev={this.prev} />
                        )
                        case 5:
                        return(
                            <Test5 next={this.next} prev={this.prev} />
                            
                        
                        );

                    case 6:
                        return(
                            <LastPage next ={this.next} prev={this.prev}/>
                        );

                        case 7:
                        return(
                            <ResultPage next ={this.next} prev={this.prev}/>
                        )
        default:
            return (
                <div className="text-plane">
                  <h3 className="text-test">last Page</h3>
{/*           
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="text-one">
                          The test will take less than 10 minutes and provide instant
                          results.<p className="text-outline">Please answer all questions.</p> 
                          <p className="text-line">Click below to start your test</p>
                        </div>
          
                        <button type="submit" className="btn btn-primary " onClick={this.next}>
                          Take Test
                        </button>
                      </div>
                    </div>
                    
                  </div> */}
                  <div />
                </div>
              );
   }
  }
}
export default PatientTest;
