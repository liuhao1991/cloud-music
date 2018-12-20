import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import logo from '../../assets/img/logo.svg';
import '../../assets/css/Header.css';

class Header extends Component {
  render () {
    const path = this.props.location.pathname;
    if (path === '/' || path === '/hotsongs' || path === '/search') {
      return (
        <div className='fixed-bar'>
          <Topbar></Topbar>
          <Tabbar></Tabbar>
        </div>
      )
    }
    return ''
  }
}

const Topbar = () => {
  return (
    <div className="top-bar">
      <div className="icon">
        <img src={logo} className="topsvg" alt="logo" />
      </div>
      <div className="download">下载APP</div>
    </div>
  )
}

const Tabbar = () => {
  return (
    <div className="tab-bar">
      <div className="tab-bar-item">
        <NavLink exact className="tab-bar-text" activeClassName="active" to='/'>推荐音乐</NavLink>
      </div>
      <div className="tab-bar-item">
        <NavLink exact className="tab-bar-text" activeClassName="active" to='/hotsongs'>热歌榜</NavLink>
      </div>
      <div className="tab-bar-item">
        <NavLink exact className="tab-bar-text" activeClassName="active" to='/search'>搜索</NavLink>
      </div>
    </div>
  )
}

export default withRouter(Header);