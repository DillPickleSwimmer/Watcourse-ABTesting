import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      termLayout: "horizontal",
      shortlistLayout: "sidebar",
      searchLayout: "sidebar",
      sidebarOpen: true,
      searchModalOpen: false,
    }
  }

  changeLayout(type, event) {
    var obj = {};
    obj[type] = event.target.value;
    console.log(obj);
    this.setState(obj);
  }

  toggleSidebar() {
    this.setState({sidebarOpen: !this.state.sidebarOpen});
  }

  toggleModal() {
    this.setState({searchModalOpen: !this.state.searchModalOpen});
  }

  render() {
    const state = this.state;

    const courseCard = (
      <div className="course">
        <div>
          CS 100<br />
          Some CS Course
        </div>
      </div>
    )

    const termCard = (
      <div className="term">
        <div>Fall 2019 - 1A</div>
        <div className="term-courses">{courseCard}{courseCard}{courseCard}{courseCard}</div>
      </div>
    )

    return (
      <div className="app">
        {state.searchLayout === "modal" && state.searchModalOpen ?
          <div className="modal-background" onClick={this.toggleModal.bind(this)}></div>
        : null}
        {state.searchLayout === "modal" && state.searchModalOpen ?
          <div className="modal">
            <div className="sidebar-close" onClick={this.toggleModal.bind(this)}>X</div>
            <div>
              Search <input placeholder="search"></input> 🔍
              <div className="modal-courses">
                {courseCard}{courseCard}{courseCard}{courseCard}{courseCard}{courseCard}
                {courseCard}{courseCard}{courseCard}{courseCard}{courseCard}{courseCard}
                {courseCard}{courseCard}{courseCard}{courseCard}{courseCard}{courseCard}
                {courseCard}{courseCard}{courseCard}{courseCard}{courseCard}{courseCard}
                {courseCard}{courseCard}{courseCard}{courseCard}{courseCard}{courseCard}  
              </div>
            </div>
          </div>
        : null}
        <div className="header">
          {(state.shortlistLayout === "sidebar" || state.searchLayout === "sidebar") ?
            <div className="hamburger" onClick={this.toggleSidebar.bind(this)}>
              ☰
            </div>
          : null}
          {state.searchLayout === "modal" ?
            <div className="searchbar" onClick={this.toggleModal.bind(this)}>
              🔍
            </div>
          : null}
        </div>
        <div className="body">
          {(state.shortlistLayout === "sidebar" || state.searchLayout === "sidebar") && state.sidebarOpen ? 
            <div className="sidebar">
              <div className="sidebar-header">
                <div className="sidebar-close" onClick={this.toggleSidebar.bind(this)}>X</div>
              </div>
              {state.searchLayout === "sidebar" ?
                <div className="sidebar-option search-sidebar">
                  search side
                  {courseCard}{courseCard}{courseCard}
                </div>
              :null}
              {state.shortlistLayout === "sidebar" ?
                <div className="sidebar-option shortlist-sidebar">
                  shortlist side
                  {courseCard}{courseCard}{courseCard}
                </div>
              :null}
            </div> 
          : null}
          <div className="terms">
            <div className={function() {
              switch(state.termLayout) {
                case "horizontal":
                  return "terms-horizontal";
                case "vertical":
                  return "terms-vertical"
              }
            }()}>
              {termCard}{termCard}{termCard}{termCard}{termCard}
            </div>
          </div>
        </div>
        {state.shortlistLayout === "bottom" ?
          <div className="shortlist-bottom">
            shortlist
            <div>
              {courseCard}{courseCard}{courseCard}{courseCard}{courseCard}{courseCard}
              {courseCard}{courseCard}{courseCard}{courseCard}{courseCard}{courseCard}
              {courseCard}{courseCard}{courseCard}{courseCard}{courseCard}{courseCard}
              {courseCard}{courseCard}{courseCard}{courseCard}{courseCard}{courseCard}
              {courseCard}{courseCard}{courseCard}{courseCard}{courseCard}{courseCard}  
            </div>
          </div>
        :null}
        <div className="footer">
          Term layout: 
          <select onChange={this.changeLayout.bind(this, "termLayout")}>
            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
          </select>
          &nbsp;
          Shortlist layout:
          <select onChange={this.changeLayout.bind(this, "shortlistLayout")}>
            <option value="sidebar">Sidebar</option>
            <option value="bottom">Bottom</option>
          </select>
          &nbsp;
          Search layout: 
          <select onChange={this.changeLayout.bind(this, "searchLayout")}>
            <option value="sidebar">Sidebar</option>
            <option value="modal">Modal</option>
          </select>
        </div>
      </div>
    );
  }
}


export default App;
