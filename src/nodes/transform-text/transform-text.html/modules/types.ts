import { EditorNodeProperties } from "node-red";
import { TransformTextOptions } from "../../shared/types";

export interface TransformTextEditorNodeProperties
  extends EditorNodeProperties,
    TransformTextOptions {}
