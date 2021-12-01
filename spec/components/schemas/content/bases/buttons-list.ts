import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as buttonsRef } from './buttons/all';

export const buttonsList: SchemaObject = {
  type: 'array',
  title: 'Buttons',
  description: `Vertical list of buttons displayed inside a card. These will *not* fade away once one a button is clicked.<br>
    <br>*__RCS__: A maximum of 4 buttons is supported, but they might not be shown if they do not fit in the available space.*
    <br>*__Facebook__: A maximum of 3 buttons is supported. Only \`text\` and \`link\` buttons are supported.*`,
  maxItems: 4,
  items: {
    $ref: buttonsRef,
  },
};

export const ref = createComponentRef(__filename);
export default buttonsList;