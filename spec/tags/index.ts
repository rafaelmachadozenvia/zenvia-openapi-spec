import { TagObject } from 'openapi3-ts';
import { rawLoad } from '../../utils/raw-load';

const contentTypesDescription = rawLoad(__dirname, './content-types.md');
const smsDescription = rawLoad(__dirname, './sms.md');
const whatsappDescription = rawLoad(__dirname, './whatsapp.md');
const facebookDescription = rawLoad(__dirname, './facebook.md');
const batchesDescription = rawLoad(__dirname, './batches.md');
const subscriptionsDescription = rawLoad(__dirname, './subscriptions.md');
const templatesDescription = rawLoad(__dirname, './templates.md');
const messageReportDescription = rawLoad(__dirname, './message-report.md');
const flowReportDescription = rawLoad(__dirname, './flow-report.md');
const rcsDescription = rawLoad(__dirname, './rcs.md');
const telegramDescription = rawLoad(__dirname, './telegram.md');
const voiceDescription = rawLoad(__dirname, './voice.md');
const gbmDescription = rawLoad(__dirname, './gbm.md');
const instagramDescription = rawLoad(__dirname, './instagram.md');

const tags: TagObject[] = [{
  name: 'Content types',
  description: contentTypesDescription,
}, {
  name: 'SMS',
  description: smsDescription,
}, {
  name: 'WhatsApp',
  description: whatsappDescription,
}, {
  name: 'Facebook',
  description: facebookDescription,
}, {
  name: 'Instagram',
  description: instagramDescription,
}, {
  name: 'Google Business Messages',
  description: gbmDescription,
}, {
  name: 'RCS',
  description: rcsDescription,
}, {
  name: 'Telegram',
  description: telegramDescription,
}, {
  name: 'Voice',
  description: voiceDescription,
}, {
  name: 'Batches',
  description: batchesDescription,
}, {
  name: 'Webhooks',
  description: subscriptionsDescription,
}, {
  name: 'Templates',
  description: templatesDescription,
}, {
  name: 'Message Report',
  description: messageReportDescription,
}, {
  name: 'Flow Report',
  description: flowReportDescription,
}];

export default tags;
