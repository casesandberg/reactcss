'use strict';

import React from 'react';
import reactCSS from 'reactcss';

import Node from '../../helpers/Node';

export class Particles extends React.Component {
  componentDidMount() {
    this.paint();
  }

  paint() {
    const canvasNode = this.refs.canvas;
    const canvasContext = canvasNode.getContext('2d');

    const wrapNode = this.refs.wrap;
    const wrapWidth = wrapNode.clientWidth;
    const wrapHeight = wrapNode.clientHeight;

    // Set width and height 2x scaled back for retina
    canvasNode.width = wrapWidth * 2;
    canvasNode.height = wrapHeight * 2;
    canvasNode.style.width = `${ wrapWidth }px`;
    canvasNode.style.height = `${ wrapHeight }px`;
    canvasContext.scale(2, 2);

    canvasContext.clearRect(0, 0, wrapWidth, wrapHeight);

    const randomBetween = (min, max) => {
      Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const nodes = [];
    const tileSize = 75;
    const tilesWide = Math.ceil(wrapWidth / tileSize);
    const tilesTall = Math.ceil(wrapHeight / tileSize);

    // Lets draw the lines first
    for (node in nodes) {
      if (nodes.hasOwnProperty(node)) {
        for (otherNode in nodes) {
          if (nodes.hasOwnProperty(otherNode)) {
            if (node.distanceTo(otherNode) < 110 && !node.isConnectedTo(otherNode)) {
              node.connectTo(otherNode, canvasContext);
            }
          }
        }
      }
    }

    // And then come back and draw the nodes on top
    for (node in nodes) {
      node.draw(canvasContext);
    }
  }

  render() {
    const styles = reactCSS({
      'default': {
        particles: {
          Absolute: '0 0 0 0',
        },
      },
    });

    return (
      <div style={ styles.particles } ref="wrap">
        <canvas ref="canvas" />
      </div>
    );
  }
}

export default Particles;
