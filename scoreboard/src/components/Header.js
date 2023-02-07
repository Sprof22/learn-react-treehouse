import React from 'react'
import PropTypes from 'prop-types'

import Stats from './Stats';
import StopWatch from './StopWatch';

const Header = (props) => {
    return (
      <header>
      <Stats players={props.players}/>
        <h1>{props.title}</h1>
        <StopWatch />
      </header>
    );
  }

  Header.propTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.object)
  }

export default Header 