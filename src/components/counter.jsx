import React, { Component } from "react";

//type imrc and press enter, the extension will type the above line for us
// type cc for shortcut to create class

class Counter extends Component {
  state = {
    count: 0,

    // imageURL: "https://picsum.photos/200", //this will geenerate some randomm 200*200 image
  };
  //   styles = {
  //     //styles is a defined property
  //     fontSize: 10,

  //react will convert 10 to '10px' automatically
  //     fontWeight: "bold",
  //   };

  render() {
    return (
      <div>
        {" "}
        {/* <img src={this.state.imageURL} alt="" /> */}
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        {/* badge badge-primary are bootstrap classes, m-2 is margin 2 that gives margins between button and text */}
        <button className="btn btn-secondary btn-sm"> Increment </button>{" "}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-"; //properties that will be in common, irrespective of the count value
    //since classes has to be changed, it cant be a const, so let
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count; //we can return an <h1> element here or a string in "" or a const anything
  }
}

//the above is a simple component that when rendered, returns what is inside return();
export default Counter;
//we can remove the above line and make line 4 as: export default class Counter extends Component
