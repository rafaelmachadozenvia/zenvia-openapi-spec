/**
 * Example: https://github.com/zenvia/zenvia-sdk-node/blob/master/examples/telegram-send-text-message.js
 */

import { Client, TextContent } from '@zenvia/sdk';

const client = new Client('YOUR_API_TOKEN');

const telegram = client.getChannel('telegram');

const content = new TextContent('Some text message');

telegram.sendMessage('sender-identifier', 'recipient-identifier', content)
.then((response) => {
  console.log('Response:', response);
})
.catch((error) => {
  console.log('Error:', error);
});
