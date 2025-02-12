import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as aggregatedStatus } from './aggregated-status';
import { ref as schedule } from './schedule';

const base: SchemaObject = {
  title: 'Flow Batch Status Object',
  description: 'This is a Flow Batch Status object model.',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      description: 'The flow batch identifier.',
      example: '853c2b58-8367-4fcb-8d16-d42208e15942',
      readOnly: true,
    },
    flowId: {
      type: 'string',
      description: 'The the flow identifier. You can view your <a href="https://app.zenvia.com/flows" target="_blank"> Flow IDs here.</a>',
      example: 'c2c3e42d-6fb7-4ad6-897a-dd7613469f58',
    },
    name: {
      type: 'string',
      description: 'The batch name.',
      example: 'Sales campaing',
    },
    status: {
      description: 'The batch status: \
        \n `LOADING`:  Loading the batch \
        \n `READY`: Batch loaded and ready to be dispatched \
        \n `QUEUED`: Batch sent to dispatch queue \
        \n `PROCESSING`: Batch dispatch in progress \
        \n `WAITING`: Waiting confirmation of the batch status \
        \n `COMPLETED`: Batch completed \
        \n `CANCELING`: Batch being canceled \
        \n `CANCELED`: Batch canceled \
        \n `TIMEOUT`: Timeout to process the batch \
        \n `ERROR`: Error to proceed with the batch',
      enum: [
        'LOADING',
        'READY',
        'QUEUED',
        'PROCESSING',
        'WAITING',
        'COMPLETED',
        'CANCELING',
        'CANCELED',
        'TIMEOUT',
        'ERROR',
      ],
      type: 'string',
      example: 'READY',
      readOnly: true,
    },
    errorCode: {
      description: 'The batch error',
      type: 'string',
      enum: [
        'ERROR_SAVING_FILE',
        'ERROR_INVALID_MEDIA_TYPE',
        'ERROR_IN_MEDIA_TYPE_DETECTION',
        'ERROR_FILE_NOT_FOUND',
        'ERROR_IN_FILE_PROCESSING',
        'ERROR_PROCESSING_CONTACTS',
        'ERROR_INVALID_BULK_HEADERS',
        'ERROR_INVALID_CHARACTER',
        'ERROR_INVALID_TELEPHONE_NUMBER',
        'ERROR_SEEKING_CONTACTS',
        'ERROR_MAX_TPS',
        'UNSUPPORTED_CONTENT',
        'HEADER_SIZE_MISMATCH',
        'INVALID_MESSAGE_FORMAT',
        'FLOW_ID_NOT_FOUND',
        'GATEWAY_ERROR',
        'FLOW_ERROR',
        'INVALID_CONTENTS',
        'RECIPIENT_NOT_FOUND',
        'ERROR_REQUEST_STANDARD_ANSWER',
        'RESCHEDULE_PROCESS_ERROR',
      ],
      example: 'FLOW_ID_NOT_FOUND',
      readOnly: true,
    },
    size: {
      description: 'The quantity of recived registers',
      type: 'number',
      example: 1,
      readOnly: true,
    },
    aggregatedStatus: {
      type: 'object',
      readOnly: true,
      allOf: [
        {
          $ref: aggregatedStatus,
        },
      ],
    },
    progress: {
      description: 'Progress of batch. 0-100',
      type: 'number',
      example: 100,
      readOnly: true,
    },
    schedule: {
      type: 'object',
      $ref: schedule,
    },
    createdAt: {
      type: 'string',
      description: 'The created date.',
      example: '2021-08-03T16:26:23.616Z',
      readOnly: true,
    },
    createdByUserEmail: {
      type: 'string',
      description: 'The creator e-mail',
      example: 'user@mail.com',
      readOnly: true,
    },
  },
  required: [
    'flowId',
    'name',
  ],
};

export const ref = createComponentRef(__filename);
export default base;
