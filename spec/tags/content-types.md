## Supported Channels

For each content type covered in the next section, the following table reflects the usability concerning the each Zenvia-supported channel:

| Content Type | SMS      | Facebook | WhatsApp | RCS      | Voice    | Telegram| GBM*     |Instagram| 
|:-------------|:---------|:---------|:---------|:---------|:---------|:--------|:--------|:--------|
| text         | &#10004; | &#10004; | &#10004; | &#10004; | &#10005; |&#10004; |&#10004; |&#10004; |
| file         | &#10005; | &#10004; | &#10004; | &#10004; | &#10005; |&#10004; |&#10004; |&#10004; |
| contacts     | &#10005; | &#10005; | &#10004; | &#10005; | &#10005; |&#10005; |&#10005; |&#10005; |
| location     | &#10005; | &#10005; | &#10004; | &#10005; | &#10005; |&#10005; |&#10005; |&#10005; | 
| template     | &#10005; | &#10005; | &#10004; | &#10005; | &#10005; |&#10005; |&#10005; |&#10005; |
| call         | &#10005; | &#10005; | &#10005; | &#10005; | &#10004; |&#10005; |&#10005; |&#10005; |
| card         | &#10005; | &#10005; | &#10005; | &#10004; | &#10005; |&#10005; |&#10005; |&#10005; |
| carousel     | &#10005; | &#10005; | &#10005; | &#10004; | &#10005; |&#10005; |&#10005; |&#10005; |

_*GBM stands for Google Business Messages_
## Text
This type of content is the most used one and is composed of plain text.

<SchemaDefinition schemaRef="#/components/schemas/content.text" showWriteOnly="true" />

## File
This type of content is used to send a file to the user. Depending on the file type, the file itself will be displayed with a different appearance. There are four types of presentation:
* Image
* Video
* Audio
* Document

<SchemaDefinition schemaRef="#/components/schemas/content.file" showWriteOnly="true" />

## Contacts
This type of content is used to send contact information to the user.

<SchemaDefinition schemaRef="#/components/schemas/content.contacts" showWriteOnly="true" />

## Location
This type of content is used to send location messages represented as a point on the map to the user.

<SchemaDefinition schemaRef="#/components/schemas/content.location" showWriteOnly="true" />

## Template
This type of content has an underlying fixed text content with some required variables. With the fields of the template properly filled, the template must be submitted for approval. This approval depends solely on WhatsApp, and the criteria are strict.

<SchemaDefinition schemaRef="#/components/schemas/content.template" showWriteOnly="true" />

### Submitting a template content for approval
You may submit templates for approval using our [template console](https://app.zenvia.com/home/templates) if you already own a WhatsApp Business account with us.

## Card

This type of content is rich and is composed of *at least one* of the following components (none of them are mandatory):
* Media
* Title
* Text

Additionally, it may include:
* Buttons
* Quick reply buttons (not part of the card itself, but are instead shown below it)

More information on each attribute may be found below:

<SchemaDefinition schemaRef="#/components/schemas/content.card" />

## Carousel

This type of content displays a horizontally scrollable sequence of [cards](#section/Card), with some differences and limitations.

More details may be found below.

<SchemaDefinition schemaRef="#/components/schemas/content.carousel" />

## WhatsApp buttons

<SchemaDefinition schemaRef="#/components/schemas/content.whatsapp.button.index" />

## WhatsApp list

<SchemaDefinition schemaRef="#/components/schemas/content.whatsapp.list" />
