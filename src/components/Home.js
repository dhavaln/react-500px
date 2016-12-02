import React from 'react';
import Photos from './Photos';

const Home = React.createClass({
  componentDidMount(){
      if(this.props.photos.length <= 0){
        this.props.loadPhotos(this.props.selectedFilter, 1);
      }
  },
  render(){
    return (
      <div>
        <div >

        </div>
        <div>
          <Photos {...this.props}/>
        </div>
      </div>
    )
  }
});

export default Home;
