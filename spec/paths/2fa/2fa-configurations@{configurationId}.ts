import { OperationObject, PathItemObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as tokenConfigRef } from '../../components/schemas/2fa/configuration/requests/all';
import { ref as configurationIdRef } from '../../components/parameters/configurationId';

const del: OperationObject = {
  description: 'Delete a configuration given the configuration id',
  tags: ['Two Factor Authentication'],
  responses:{
    204: {
      description: 'Returns success',
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  },
};

const get: OperationObject = {
  description: 'List configuration given the configuration id',
  tags: ['Two Factor Authentication'],
  responses:{
    200: {
      description: 'Return the specific configuration by id',
      content: {
        'application/json': {
          schema: {
            $ref: tokenConfigRef,
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
  get,
  delete: del,
  parameters: [{
    $ref: configurationIdRef,
  }],
};

export default path;
