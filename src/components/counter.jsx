import React, { Component } from "react";

//type imrc and press enter, the extension will type the above line for us
// type cc for shortcut to create class

class Counter extends Component {
  //   state = {    //state property removed so that reset functions, to have a single source of truth
  //     value: this.props.counter.value,
  //     // tags: [],

  //     // imageURL: "https://picsum.photos/200", //this will geenerate some randomm 200*200 image
  //   };
  //   styles = {
  //     //styles is a defined property
  //     fontSize: 10,

  //react will convert 10 to '10px' automatically
  //     fontWeight: "bold",
  //   };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p> There are no tags! </p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  //   constructor() {
  //     super();
  //     //call to base constructor is necessary
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  //   handleIncrement = (product) => {   //removed since no state exists, so no point of having it here
  //     console.log(product);
  //     this.setState({ value: this.state.value + 1 });
  //   };
  //   doHandleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   }; //this funcn not needed since  product is passed in this.handleIncrement()
  componentDidUpdate(prevProps, prevState) {
    //this can help us decide whether to make ajax call based on the change in 2 parameters
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    // if(prevProps.counter.value !== this.props.counter.value)
    //make AJAX call and get new data from the server
  }
  render() {
    // console.log("props", this.props);
    console.log("Counter Rendered");
    return (
      <div>
        {" "}
        {/* <img src={this.state.imageURL} alt="" /> */}
        {/* {this.props.children} */}
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        {/* badge badge-primary are bootstrap classes, m-2 is margin 2 that gives margins between button and text */}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          {" "}
          Increment{" "}
        </button>{" "}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    //classes contains properties that will be in common, irrespective of the count value
    //since classes has to be changed, it cant be a const, so let

    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value; //we can return an <h1> element here or a string in "" or a const anything
  }
}

//the above is a simple component that when rendered, returns what is inside return();

export default Counter;
//we can remove the above line and make line 4 as: export default class Counter extends Component
