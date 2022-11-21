import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../../utils/ref';

const email: SchemaObject = {
  title: 'Email configuration',
  description: 'Information to send the token using E-mail',
  type: 'object',
  properties: {
    from: {
      description: 'Email sender id',
      type: 'string',
    },
    type: {
      default: 'email',
      description: 'Channel used to send the token',
      example: 'email',
    },
    subject: {
      type: 'string',
      description: 'The E-mail subject',
      example: 'Authentication code',
    },
    html: {
      type: 'string',
      description: 'Default text to be sent',
      default: 'Olá {{name}}! Seu código de verificação é {{code}}',
    },
  },
  required: [
    'from',
    'type',
    'subject',
  ],
};

export const ref = createComponentRef(__filename);
export default email;