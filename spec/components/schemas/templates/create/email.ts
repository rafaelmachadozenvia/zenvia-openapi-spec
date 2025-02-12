import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as categorySchemaRef } from '../category/all';
import { ref as emailComponents } from '../components/email-components';

const emailTemplate: SchemaObject = {
  type: 'object',
  allOf: [{
    type: 'object',
    properties: {
      components: {
        $ref: emailComponents,
      },
      category: {
        $ref: categorySchemaRef,
      },
    },
  }, {
    $ref: baseRef,
  }],

};

export const ref = createComponentRef(__filename);
export default emailTemplate;
