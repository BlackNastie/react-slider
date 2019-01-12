import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div>
          <SayMyName name='Slim Shady' appeal='what' link='vk.com' />
          <SayMyName name='Slim Shady' appeal='who' link='vk.com' />
          <SayMyName name='Slim Shady' appeal='huh' link='vk.com' />
      </div>
    );
  }
}

function SayMyName(props) {
  return (
      <div>
          <h1>My name is {props.appeal} ({props.name})</h1>
          <a href={props.link}>Go to here</a>
      </div>
  )
}


export default App;
