import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../presentational/Sidebar';
import { toggleSidebar } from '../../actions';

const mapStateToProps = state => {
  return {
    showSidebar: state.sidebarToggle
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      console.log('click');
      dispatch(toggleSidebar());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);