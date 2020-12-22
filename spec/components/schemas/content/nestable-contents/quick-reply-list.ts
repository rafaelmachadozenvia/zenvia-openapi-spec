import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as postBackRef } from './postback';
import { ref as webUrlRef } from './web-url';
import { ref as calendarEventRef } from './calendar-event';
import { ref as dialRef } from './dial';
import { ref as shareLocationRef } from './share-location';
import { ref as viewLocationRef } from './view-location';

export const quickReplyList: SchemaObject = {
  type: 'object',
  title: 'Buttons',
  description: 'RCS buttons in quick reply format',
  oneOf: [{
    $ref: postBackRef,
  }, {
    $ref: webUrlRef,
  }, {
    $ref: calendarEventRef,
  }, {
    $ref: dialRef,
  }, {
    $ref: shareLocationRef,
  }, {
    $ref: viewLocationRef,
  }],
  required: ['type'],
  discriminator: {
    propertyName: 'type',
    mapping: {
      postback: postBackRef,
      web_url: webUrlRef,
      calendar_event: calendarEventRef,
      dial: dialRef,
      share_location: shareLocationRef,
      view_location: viewLocationRef,
    },
  },
};

export const ref = createComponentRef(__filename);
export default quickReplyList;
