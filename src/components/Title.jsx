import { Component } from 'react';
import { PropTypes } from 'prop-types';

const React = require('react');

export default class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{headline}</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
