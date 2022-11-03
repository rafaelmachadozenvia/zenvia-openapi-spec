import { OperationObject, PathItemObject, ResponseObject } from 'openapi3-ts';
import { ref as tokenVerifyRef } from '../../components/schemas/two-fa/token/requests/code-verification-id';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as tokenResponseRef } from '../../components/schemas/two-fa/token/responses/token';

const post: OperationObject = {
  description: 'Verify a token using the configuration id',
  tags: ['Two Factor Authentication'],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: tokenVerifyRef,
        },
      },
    },
  },
  responses:{
    200: {
      description: 'Returns Information about the configuration status after sending a code to the user',
      content: {
        'application/json': {
          schema: {
            $ref: tokenResponseRef,
          },
        },
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  },
};

const path: PathItemObject = {
  post,
};

export default path;
