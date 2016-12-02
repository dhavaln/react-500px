import React from 'react';

const PhotoDetail = React.createClass({
  componentDidMount(){
    const {id} = this.props.params;
    this.props.loadPhotoDetail(id);
  },
  render(){
    const detail = this.props.detail;

    if(detail.isLoading){
      return (
        <div>
          Loading...
        </div>
      )
    }else if(this.props.isError){
      return (
        <div className="pt-callout .modifier">
          <h5>Error</h5>
          {this.props.message.message}
        </div>
      )
    }else{
      return(
        <div className="photo-detail-wrapper">
          <br/>
          <br/>
          <div className="photo-detail">
            <img src={detail.photo.image_url} />
          </div>
          <div>
            <span className="pt-icon-heart">&nbsp;{detail.photo.positive_votes_count}</span>
            <span className="pt-navbar-divider"></span>
            <span className="pt-icon-eye-open">&nbsp;{detail.photo.times_viewed}</span>
            <span className="pt-navbar-divider"></span>
            <span className="pt-icon-comment">&nbsp;{detail.comments.length}</span>
          </div>
        </div>
      )
    }
  }
});

export default PhotoDetail;
