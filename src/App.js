import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PropTypes from 'prop-types';
import Matter from 'matter-js';
import { Loop, Stage, World, Body } from 'react-game-kit';

class Ball extends Component
{
  static propTypes =
  {
    store: PropTypes.object,
  };

  static contextTypes =
  {
    engine: PropTypes.object,
    scale: PropTypes.number,
  };

  constructor(props)
  {
    super(props);
    this.update = this.update.bind(this);
  }

  componentDidMount()
  {
    Matter.Events.on(this.context.engine, 'afterUpdate', this.update);
  }

  componentWillUnmount()
  {
    Matter.Events.off(this.context.engine, 'afterUpdate', this.update);
  }

  render()
  {
    return(
      <div>
      <Body
        args={[50, 384, 64, 64]}
        inertia={Infinity}
        ref={b => {
          this.body = b;
        }}
      >
          <svg id="ball1" height="400" width="400">
            <ellipse cx="300" cy="150" rx="85" ry="85" fill="#c48476" />
          </svg>
        </Body>
      </div>
    );
  }

  update()
  {

  }
}

class Game extends Component
{
  render()
  {
    return (
      <Loop>
        <Stage style={{ background: '#231f20' }}>
          <World onInit={this.physicsInit}>
            <Ball />
          </World>
        </Stage>
      </Loop>
    );
  }

  physicsInit(engine) {
    { /* const circle = Matter.Bodies.circle(); */ }
    { /* Matter.World.addBody(engine.world, circle); */ }
  };
}

class App extends Component
{
  render() {
    return (
      <Game />
    );
  }
}

export default App;
