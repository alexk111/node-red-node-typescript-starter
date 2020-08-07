import { NodeInitializer } from "node-red";
import { TransformTextNode, TransformTextNodeDef } from "./modules/types";
import { TransformTextOperation } from "./shared/types";

const nodeInit: NodeInitializer = (RED): void => {
  function TransformTextNodeConstructor(
    this: TransformTextNode,
    config: TransformTextNodeDef
  ): void {
    RED.nodes.createNode(this, config);

    switch (config.operation) {
      case TransformTextOperation.UpperCase: {
        this.on("input", (msg, _send, _done) => {
          if (typeof msg.payload === "string") {
            msg.payload = msg.payload.toUpperCase();
          }
          this.send(msg);
        });
        break;
      }
      case TransformTextOperation.LowerCase: {
        this.on("input", (msg, _send, _done) => {
          if (typeof msg.payload === "string") {
            msg.payload = msg.payload.toLowerCase();
          }
          this.send(msg);
        });
        break;
      }
    }
  }

  RED.nodes.registerType("transform-text", TransformTextNodeConstructor);
};

export = nodeInit;
