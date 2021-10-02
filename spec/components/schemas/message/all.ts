import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as allContentsRef } from '../content/whatsapp/all';
import { createComponentRef } from '../../../../utils/ref';
import { ref as visitorSchemaRef } from './visitor';
import { ref as referralSchemaRef } from './referral';

const all: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      visitor: {
        $ref: visitorSchemaRef,
      },
      referral: {
        $ref: referralSchemaRef,
      },
      contents: {
        title: 'Message Contents',
        description: 'A list of content to be sent',
        type: 'array',
        items: {
          $ref: allContentsRef,
        },
        minItems: 1,
      },
      idRef: {
        description: `When a user sends a message quoting a previous message, the identifier of the quoted message will be provided here.
                      On [SMS channel](#tag/SMS), this is the ID of the last message sent to the contact.
                      <br><br>*Only applicable to [WhatsApp](#tag/WhatsApp), [Instagram](#tag/Instagram) and [SMS](#tag/SMS) channels.*`,
        type: 'string',
        readOnly: true,
      },
    },
  }],
};

export const ref = createComponentRef(__filename);
export default all;
