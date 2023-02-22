import React from "react";
class Formula extends React.Component{
    constructor(props){
        super(props);
            this.state={
                p:10,
                n:4,
                r:3
            }
        }
         principle=()=>{
           this.setState({p:"24"});
        }
        no=()=>{
            this.setState({n:"7"});
        }
        rate=()=>{
            this.setState({r:"5"});
        }
        chang=()=>{
            this.setState({p:"12"});
            this.setState({n:"2"});
            this.setState({r:"4"});
        }

        render(){
            return(
                <>
                <h1>Principle : {this.state.p},No.of days : {this.state.n},Rate of Intrest : {this.state.r}</h1>
                <h1>Answer:{(this.state.p*this.state.n*this.state.r)/100}</h1>
                <button onClick={this.principle}>Principle</button>
                <button onClick={this.no}>No.of days</button>
                <button onClick={this.rate}>Rate of Intrest</button>
                <button onClick={this.chang}>Change all value</button>
                </>
            )
        }
    }
    export default Formula;