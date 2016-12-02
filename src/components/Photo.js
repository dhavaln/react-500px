import React from 'react';
import {Link} from 'react-router';

const Photo = React.createClass({
  render(){
    return (
      <Link to={`/photo/${this.props.id}`}>        
          <img src={this.props.image_url} className="photo" />
      </Link>
    )
  }
});

export default Photo;
