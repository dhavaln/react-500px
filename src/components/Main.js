import React from 'react';
import {Link} from 'react-router';

const Main = React.createClass({
    componentDidMount(){
        window.addEventListener('scroll', (e)=>{
          if (document.body.scrollHeight == document.body.scrollTop + window.innerHeight) {
              this.props.loadPhotos(this.props.selectedFilter, this.props.page + 1);
          }
        });
    },

    render(){
      return (
        <div className="App">
          <h1 className="">
            React App using <a href="https://500px.com" target="_blank">500px API</a>
          </h1>
          <hr/>
          {React.cloneElement(this.props.children, this.props)}
        </div>
      )
    }
});

export default Main;
