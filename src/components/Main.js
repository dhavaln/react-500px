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
    changeFilter(e){
      const value = e.target.options[e.target.selectedIndex].value;
      this.props.loadPhotos(value, 1);
    },
    render(){
      return (
        <div className="App">
          <nav className="pt-navbar .modifier">
            <div className="pt-navbar-group pt-align-left">
              <div className="pt-navbar-heading">
                <Link to="/">
                  React-500px
                </Link>
              </div>
              <input className="pt-input" placeholder="Search..." type="text" />
              <span className="pt-navbar-divider"></span>
              <span>Category &nbsp;</span>
                <div className="pt-select">
                  <select onChange={this.changeFilter}>
                    {this.props.filters.map(f => <option key={f.key} value={f.key}>{f.label}</option>)}
                  </select>
                </div>
            </div>
          </nav>
          <div>
          {React.cloneElement(this.props.children, this.props)}
          </div>
        </div>
      )
    }
});

export default Main;
