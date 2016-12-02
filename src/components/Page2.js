import React from 'react';
import {Link} from 'react-router';

const Page2 = React.createClass({
  render(){
    return (
      <div>
        <h1>You are on Page2</h1>
        <div>
          Total Click: {this.props.page2.click}
        </div>
        <button onClick={this.props.page2Click}>Page2 Click</button>              
      </div>
    )
  }
});

export default Page2;
