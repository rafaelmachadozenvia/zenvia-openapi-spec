import { TagGroupObject } from 'openapi3-ts';

const groups: TagGroupObject[] = [
  {
    name: 'Messaging',
    tags: [
      'Content types',
      'SMS',
      'WhatsApp',
      'Facebook',
      'Instagram',
      'RCS',
      'Telegram',
      'Google Business Messages',
      'Voice',
      'Message Batches',
    ],
  },
  {
    name: 'Webhooks',
    tags: [
      'Webhooks',
    ],
  },
  {
    name: 'Templates',
    tags: [
      'Templates',
    ],
  },
  {
    name: 'Flow',
    tags: [
      'Flow Batches',
    ],
  },
  {
    name: 'Reports',
    tags: [
      'Message Report',
      'Flow Report',
    ],
  },
];

export default groups;
