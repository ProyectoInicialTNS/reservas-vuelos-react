import React, { Component } from 'react';
import './css/Footer.css';
import PropTypes from 'prop-types';

class Footer extends Component {

    static propTypes={
        copyright: PropTypes.string
      };

  render() {
    const {copyright} = this.props;
    return (
      <div className="Footer">
        <p>{copyright}</p>
      </div>
    );
  }
}

export default Footer;