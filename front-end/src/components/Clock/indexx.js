import React from 'react';
import { Nav, Dropdown } from 'rsuite';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
       
          <h5>It is {this.state.date.toLocaleTimeString()}.</h5>
        </div>
      );
    }
  }

export default Clock;


