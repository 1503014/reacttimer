import React, {PureComponent} from 'react';
import {render} from 'react-dom';

export default class Timer extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      currentDate : new Date().toTimeString()
    };
}
private refreshState()
{
  this.setState(
    {
      currentDate : new Date().toTimeString()
    }
  );
}
componentDidMount()
{
  this.functionHandler = setInterval(() => this.refreshState(), 1000);
}
componentWillUnmount()
{
  clearInterval(this.functionHandler);
}
  render() {
    return (
      <div>
        <div>{this.state.currentDate}</div> 
      </div>
    );
  }
}