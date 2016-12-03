import React from 'react';

const PhotoDetail = React.createClass({
  componentDidMount(){
    const {id} = this.props.params;
    this.props.loadPhotoDetail(id);
  },
  render(){
    const detail = this.props.detail;

    let loadingEl = <div></div>;
    let errorEl = <div></div>;

    if(detail.isLoading){
      loadingEl = (
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
      )
    }

    if(this.props.isError){
      errorEl = (
        <div className="pt-callout .modifier">
          <h5>Error</h5>
          {this.props.message.message}
        </div>
      )
    }

    return(
      <div className="photo-detail-wrapper">
        {loadingEl}
        {errorEl}
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
});

export default PhotoDetail;
