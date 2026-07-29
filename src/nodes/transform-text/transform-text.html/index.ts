import { EditorRED } from 'node-red';
import { TransformTextEditorNodeProperties } from './modules/types.js';
import { TransformTextOperation } from '../shared/types.js';

declare const RED: EditorRED;

RED.nodes.registerType<TransformTextEditorNodeProperties>('transform-text', {
  category: 'function',
  color: '#a6bbcf',
  defaults: {
    operation: { value: TransformTextOperation.UpperCase },
    name: { value: '' },
  },
  inputs: 1,
  outputs: 1,
  icon: 'transform-text.png',
  paletteLabel: 'transform text',
  label: function () {
    if (this.name) {
      return this.name;
    }
    switch (this.operation) {
      case TransformTextOperation.UpperCase: {
        return 'to upper case';
      }
      case TransformTextOperation.LowerCase: {
        return 'to lower case';
      }
    }
  },
});
