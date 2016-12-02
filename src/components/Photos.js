import React from 'react';
import Photo from './Photo';

const Photos = React.createClass({
  render(){
    return (
      <div>
      {this.props.photos.map( (p,i) =>{
        return <Photo {...p} key={i}/>
      })}
      </div>
    )
  }
});

export default Photos;
