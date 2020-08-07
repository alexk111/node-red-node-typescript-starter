import { Node, NodeDef } from "node-red";
import { TransformTextOptions } from "../shared/types";

export interface TransformTextNodeDef extends NodeDef, TransformTextOptions {}
export type TransformTextNode = Node;
