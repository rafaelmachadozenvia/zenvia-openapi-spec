import { SchemaObject } from 'openapi3-ts';
import { ref as textRef } from './text';
import { ref as fileRef } from './file';
import { createComponentRef } from '../../../../../../../utils/ref';

const header: SchemaObject = {
  title: 'Object header',
  oneOf: [{
    $ref: textRef,
  }, {
    $ref: fileRef,
  }],
  discriminator: {
    propertyName: 'type',
    mapping: {
      text: textRef,
      file: fileRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default header;
