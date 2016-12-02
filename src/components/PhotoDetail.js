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
    }else{
      return(
        <div>
          <div>
            <img src={detail.photo.image_url} />
          </div>
          <div>
            Votes: {detail.photo.positive_votes_count} | Views: {detail.photo.times_viewed}
          </div>
        </div>
      )
    }
  }
});

export default PhotoDetail;
