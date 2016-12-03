import React from 'react';
import { Popover, PopoverInteractionKind, Position } from '@blueprintjs/core';
import { PAGE_URL } from '../data/api';

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
      return (
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
    }else if(this.props.isError){
      return (
        <div className="pt-callout .modifier">
          <h5>Error</h5>
          {this.props.message.message}
        </div>
      )
    }else{
      let popoverContent = (
        <div>
          <h5>{detail.photo.camera}</h5>
          <p>
            ISO {detail.photo.iso}
            <span className="pt-navbar-divider"></span>
            {detail.photo.shutter_speed}s
            <span className="pt-navbar-divider"></span>
            ƒ/{detail.photo.aperture}
          </p>
        </div>
      );

      return(
        <div className="photo-detail-wrapper">
          <br/>
          <br/>
          <div style={{fontSize: '20px', paddingBottom: '10px'}}>
            <a href={`${PAGE_URL}${detail.photo.url}`} target="_blank">
              {detail.photo.name}
            </a>
          </div>
          <div className="photo-detail">
            <img src={detail.photo.image_url} className="pt-elevation-3"/>
          </div>
          <div style={{paddingTop: '10px'}}>
            <span className="pt-icon-heart">&nbsp;{detail.photo.positive_votes_count}</span>
            <span className="pt-navbar-divider"></span>
            <span className="pt-icon-eye-open">&nbsp;{detail.photo.times_viewed}</span>
            <span className="pt-navbar-divider"></span>
            <Popover content={popoverContent}
                     interactionKind={PopoverInteractionKind.CLICK}
                     popoverClassName="pt-popover-content-sizing"
                     position={Position.TOP}
                     useSmartPositioning={false}>
                <span className="pt-icon-camera" style={{cursor: 'pointer'}}></span>
            </Popover>
          </div>          
        </div>
      )
    }
  }
});

export default PhotoDetail;
