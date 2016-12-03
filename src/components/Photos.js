import React from 'react';
import Photo from './Photo';
import Masonry from 'react-masonry-component';

const Photos = React.createClass({
  render(){
    let loadingEle = <div></div>;
    let errorEle = <div></div>;

    if(this.props.isLoading){
      loadingEle = (
        <div>
          <br/>
          <br/>
          <div className="pt-spinner .modifier">
            <div className="pt-spinner-svg-container">
              <svg viewBox="0 0 100 100">
                <path className="pt-spinner-track" d="M 50,50 m 0,-44.5 a 44.5,44.5 0 1 1 0,89 a 44.5,44.5 0 1 1 0,-89"></path>
                <path className="pt-spinner-head" d="M 94.5 50 A 44.5 44.5 0 0 0 50 5.5"></path>
              </svg>
            </div>
          </div>
        </div>
      );
    }

    if(this.props.isError){
      errorEle = (
        <div className="pt-callout .modifier">
          <h5>Error</h5>
          {this.props.message.message}
        </div>
      )
    }

    return (
      <div>
        <Masonry
          className={'photo-container'}
          elementType={'ul'}
          options={{}}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}>
          {this.props.photos.map( (p,i) =>{
            return <Photo {...p} key={i}/>
          })}
        </Masonry>
        <div>
          {loadingEle}
        </div>
        <div>
          {errorEle}
        </div>
      </div>
    )
  }
});

export default Photos;
