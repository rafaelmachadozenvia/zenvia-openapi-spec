import { PathItemObject, OperationObject, ResponsesObject, ResponseObject } from 'openapi3-ts';
import { ref as errorResponseRef } from '../../components/responses/error';
import { ref as flowBatchIdRef } from '../../components/parameters/flowBatchId';

const get: OperationObject = {
  description: 'Get itens of flow batch',
  tags: ['Flows'],
  parameters: [{
    $ref: flowBatchIdRef,
  }],
  responses: {
    200: {
      description: 'Items found as csv file',
      content: {
        'text/csv': {},
      },
    } as ResponseObject,
    default: {
      $ref: errorResponseRef,
    },
  } as ResponsesObject,
};

const path: PathItemObject = {
  get,
};

export default path;
