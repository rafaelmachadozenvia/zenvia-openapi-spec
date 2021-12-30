import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as flowBatchesBaseRef } from './base';
import { ref as flowBatchesContentRef } from './content';

const json: SchemaObject = {
  title: 'Flow Batch Object for request with json request.',
  description: 'This is a Flow Batch object model for request with json request.',
  allOf: [
    {
      $ref: flowBatchesBaseRef,
    },
    {
      type: 'object',
      properties: {
        content: {
          allOf: [
            {
              $ref: flowBatchesContentRef,
            },
            {
              required: [
                'fieldNames',
                'fields'
              ]
            }
          ],
          type: 'object',
          properties: {
          fields: {
            description: 'A list of field values',
            type: 'array',
            minItems: 1,
            items: {
              type: 'string',
              example: ['5511999999999','John','Smartphone','20/07/2021'],
            },
            writeOnly: true
          },
        }
        },
      },
      required: ['content']
    }
  ],
};

export const ref = createComponentRef(__filename);
export default json;
