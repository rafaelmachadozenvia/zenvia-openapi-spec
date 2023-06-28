// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const automation: SchemaObject = {
  title: 'Automation',
  description: 'Automation trigger',
  type: 'object',
  properties: {
    channels: {
      title: 'Channels',
      description: 'Contact communication channels. At least one communication channel must be provided.',
      type: 'object',
      minProperties: 1,
      properties: {
        channel: {
          title: 'Channel',
          description: 'Automation channel',
          type: 'string',
          example: 'sms',
        },
        recipient: {
          title: 'Recipient',
          description: 'Final recipient of the message',
          type: 'string',
          example: '5510888883333',
        },
      },
    },
    variables: {
      title: 'Variables',
      description: 'List of variables configured in automation',
      type: 'array',
      items: {
        type: 'string',
      },
      example: ['john', 'carter', '08/02/2001'],
    },
  },
};

export const ref = createComponentRef(__filename);
export default automation;
