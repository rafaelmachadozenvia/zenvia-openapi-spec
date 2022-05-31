import { PathItemObject, OperationObject, ResponseObject, ResponsesObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as contactListRef } from '../../components/schemas/contacts/contact-list';

const post: OperationObject = {
  summary: 'Create a new contact list',
  description: 'Allows the creation of contact lists.',
  tags: ['Contact Lists'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          allOf: [
            {
              $ref: contactListRef,
            }, {
              type: 'object',
              required: ['name'],
            },
          ],
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Created contact list',
      content: {
        'application/json': {
          schema: {
            $ref: contactListRef,
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const get: OperationObject = {
  summary: 'List contact lists',
  description: 'Lists all contact lists available.',
  tags: ['Contact Lists'],
  responses: {
    200: {
      description: 'Contact lists available',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: contactListRef,
            },
          },
        },
      },
    } as ResponseObject,
  } as ResponsesObject,
};

const path: PathItemObject = {
  post,
  get,
};

export default path;