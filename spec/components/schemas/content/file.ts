import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { createComponentRef } from '../../../../utils/ref';

const file: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'file',
      },
      fileUrl: {
        type: 'string',
        description: 'URL of the file to be sent',
        example: 'https://example.com/document.pdf',
      },
      fileMimeType: {
        type: 'string',
        description: 'MIME type of the file to be sent. If not sent, the MIME type will be identified using the content type sent in the request header. For [WhatsApp channel](#tag/WhatsApp), see [supported contents and sizes.](#section/WhatsApp-limitations)',
        example: 'application/pdf',
      },
      fileCaption: {
        type: 'string',
        description: 'Some description for the file. Only applicable to [WhatsApp channel](#tag/WhatsApp) and [RCS channel](#tag/RCS) images and videos.',
        example: 'Some caption',
      },
      fileName: {
        type: 'string',
        description: 'The name of the file. Only applicable to [WhatsApp channel](#tag/WhatsApp) documents.',
        example: 'document.pdf',
      },
    },
    required: [
      'type',
      'fileUrl',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default file;
