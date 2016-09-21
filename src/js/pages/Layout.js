import React from "react";
import { Link } from "react-router";

// import Footer from "../components/layout/Footer";
// import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  navigate(){
    this.props.history.replaceState('/',null)
  }
  render() {
   
    return (
      <div>
        Hello from layout
        <Link to="archieve" class="btn btn-success">archives</Link>
        <Link to="settings" class="btn btn-danger">settings</Link>
        <button onClick={this.navigate.bind(this)}>Featured</button>
        
        {this.props.children}
      </div>
    );
  }
}
