import { NodeInitializer } from 'node-red';
import { TransformTextNode, TransformTextNodeDef } from './modules/types.js';
import { TransformTextOperation } from './shared/types.js';

const nodeInit: NodeInitializer = (RED): void => {
  function TransformTextNodeConstructor(
    this: TransformTextNode,
    config: TransformTextNodeDef
  ): void {
    RED.nodes.createNode(this, config);

    switch (config.operation) {
      case TransformTextOperation.UpperCase: {
        this.on('input', (msg, send, done) => {
          if (typeof msg.payload === 'string') {
            msg.payload = msg.payload.toUpperCase();
          }
          send(msg);
          done();
        });
        break;
      }
      case TransformTextOperation.LowerCase: {
        this.on('input', (msg, send, done) => {
          if (typeof msg.payload === 'string') {
            msg.payload = msg.payload.toLowerCase();
          }
          send(msg);
          done();
        });
        break;
      }
    }
  }

  RED.nodes.registerType('transform-text', TransformTextNodeConstructor);
};

export default nodeInit;
