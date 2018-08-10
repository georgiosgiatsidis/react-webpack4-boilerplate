import React from 'react';
import { connect } from 'react-redux';
import { test } from './actions';

const HomePage = ({ test }) => {
  test();
  return (
    <div>
      HomePage
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
      test: () => dispatch(test()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
