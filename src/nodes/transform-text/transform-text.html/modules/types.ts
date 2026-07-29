import { EditorNodeProperties } from 'node-red';
import { TransformTextOptions } from '../../shared/types.js';

export interface TransformTextEditorNodeProperties
  extends EditorNodeProperties, TransformTextOptions {}
