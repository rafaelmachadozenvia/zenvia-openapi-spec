import { ParameterObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';

const dispatchId: ParameterObject = {
  name: 'dispatchId',
  in: 'query',
  required: false,
  description: 'The ID generated at the time of the dispatch',
  schema: {
    title: 'Dispatch ID',
    type: 'string',
  },
};

export const ref = createComponentRef(__filename);
export default dispatchId;
