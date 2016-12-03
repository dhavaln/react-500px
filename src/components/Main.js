import React from 'react';
import {Link} from 'react-router';

const Main = React.createClass({
    getInitialState(){
      return {
        search: ''
      }
    },
    componentDidMount(){
        window.addEventListener('scroll', (e)=>{
          if (document.body.scrollHeight == document.body.scrollTop + window.innerHeight) {
            if(this.props.search !== ''){
              this.props.searchPhotos(this.props.search, this.props.page + 1);
            }else{
              this.props.loadPhotos(this.props.selectedFilter, this.props.page + 1);
            }
          }
        });
    },
    changeFilter(e){
      const value = e.target.options[e.target.selectedIndex].value;
      this.props.loadPhotos(value, 1);
    },
    handleChange(e){
      this.setState({search: e.target.value});
    },
    handleFormSubmit(e){
      e.preventDefault();
      this.props.searchPhotos(this.state.search);
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
              <form onSubmit={this.handleFormSubmit}>
                <input className="pt-input" placeholder="Search..." type="text" onChange={this.handleChange}/>
                <input type="submit" style={{display: 'none'}} />
              </form>
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
