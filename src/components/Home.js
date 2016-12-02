import React from 'react';
import Photos from './Photos';

const Home = React.createClass({
  componentDidMount(){
      if(this.props.photos.length <= 0){
        this.props.loadPhotos(this.props.selectedFilter, 1);
      }
  },
  changeFilter(e){
    const value = e.target.options[e.target.selectedIndex].value;
    this.props.loadPhotos(value, 1);
  },
  render(){
    return (
      <div>
        <div>
          <select onChange={this.changeFilter}>
            {this.props.filters.map(f => <option key={f.key} value={f.key}>{f.label}</option>)}
          </select>
        </div>
        <div>
        <Photos {...this.props}/>
        </div>
      </div>
    )
  }
});

export default Home;
