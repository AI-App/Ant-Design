---
category: Components
type: General
title: Typography
cols: 1
cover: https://gw.alipayobjects.com/zos/alicdn/GOM1KQ24O/Typography.svg
---

Basic text writing, including headings, body text, lists, and more.

## When To Use

- When need to display a title or paragraph contents in Articles/Blogs/Notes.
- When you need copyable/editable/ellipsis texts.

## API

### Typography.Text

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| code | Code style | boolean | false |  |
| copyable | Whether to be copyable, customize it via setting an object | boolean \| [copyable](#copyable) | false | [copyable](#copyable) |
| delete | Deleted line style | boolean | false |  |
| disabled | Disabled content | boolean | false |  |
| editable | If editable. Can control edit state when is object | boolean \| [editable](#editable) | false | [editable](#editable) |
| ellipsis | Display ellipsis when text overflows，can't configure expandable、rows and onExpand by using object | boolean \| [Omit<ellipsis, 'expandable' \| 'rows' \| 'onExpand'>](#ellipsis) | false | [ellipsis](#ellipsis) |
| keyboard | Keyboard style | boolean | false | 4.3.0 |
| mark | Marked style | boolean | false |  |
| onClick | Set the handler to handle click event | (event) => void | - |  |
| strong | Bold style | boolean | false |  |
| italic | Italic style | boolean | false | 4.16.0 |
| type | Content type | `secondary` \| `success` \| `warning` \| `danger` | - | success: 4.6.0 |
| underline | Underlined style | boolean | false |  |

### Typography.Title

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| code | Code style | boolean | false |  |
| copyable | Whether to be copyable, customize it via setting an object | boolean \| [copyable](#copyable) | false | [copyable](#copyable) |
| delete | Deleted line style | boolean | false |  |
| disabled | Disabled content | boolean | false |  |
| editable | If editable. Can control edit state when is object | boolean \| [editable](#editable) | false | [editable](#editable) |
| ellipsis | Display ellipsis when text overflows, can configure rows and expandable by using object | boolean \| [ellipsis](#ellipsis) | false | [ellipsis](#ellipsis) |
| level | Set content importance. Match with `h1`, `h2`, `h3`, `h4`, `h5` | number: 1, 2, 3, 4, 5 | 1 | 5: 4.6.0 |
| mark | Marked style | boolean | false |  |
| onClick | Set the handler to handle click event | (event) => void | - |  |
| italic | Italic style | boolean | false | 4.16.0 |
| type | Content type | `secondary` \| `success` \| `warning` \| `danger` | - | success: 4.6.0 |
| underline | Underlined style | boolean | false |  |

### Typography.Paragraph

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| code | Code style | boolean | false |  |
| copyable | Whether to be copyable, customize it via setting an object | boolean \| [copyable](#copyable) | false | [copyable](#copyable) |
| delete | Deleted line style | boolean | false |  |
| disabled | Disabled content | boolean | false |  |
| editable | If editable. Can control edit state when is object | boolean \| [editable](#editable) | false | [editable](#editable) |
| ellipsis | Display ellipsis when text overflows, can configure rows and expandable by using object | boolean \| [ellipsis](#ellipsis) | false | [ellipsis](#ellipsis) |
| mark | Marked style | boolean | false |  |
| onClick | Set the handler to handle click event | (event) => void | - |  |
| strong | Bold style | boolean | false |  |
| italic | Italic style | boolean | false | 4.16.0 |
| type | Content type | `secondary` \| `success` \| `warning` \| `danger` | - | success: 4.6.0 |
| underline | Underlined style | boolean | false |  |

### copyable

    {
      text: string,
      onCopy: function,
      icon: ReactNode,
      tooltips: false | [ReactNode, ReactNode],
    }

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| icon | Custom copy icon: \[copyIcon, copiedIcon] | \[ReactNode, ReactNode] | - | 4.6.0 |
| text | The text to copy | string | - |  |
| tooltips | Custom tooltip text, hide when it is false | \[ReactNode, ReactNode] | \[`Copy`, `Copied`] | 4.4.0 |
| onCopy | Called when copied text | function | - |  |

### editable

    {
      icon: ReactNode,
      tooltip: boolean | ReactNode,
      editing: boolean,
      maxLength: number,
      autoSize: boolean | { minRows: number, maxRows: number },
      onStart: function,
      onChange: function(string),
      onCancel: function,
      onEnd: function,
      triggerType: ('icon' | 'text')[],
      enterIcon: ReactNode,
    }

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autoSize | `autoSize` attribute of textarea | boolean \| { minRows: number, maxRows: number } | - | 4.4.0 |
| editing | Whether to be editable | boolean | false |  |
| icon | Custom editable icon | ReactNode | &lt;EditOutlined /> | 4.6.0 |
| maxLength | `maxLength` attribute of textarea | number | - | 4.4.0 |
| tooltip | Custom tooltip text, hide when it is false | boolean \| ReactNode | `Edit` | 4.6.0 |
| onStart | Called when enter editable state | function | - |  |
| onChange | Called when input at textarea | function(event) | - |  |
| onCancel | Called when type ESC to exit editable state | function | - |  |
| onEnd | Called when type ENTER to exit editable state | function | - | 4.14.0 |
| triggerType | Edit mode trigger - icon, text or both (not specifying icon as trigger hides it) | Array&lt;`icon`\|`text`> | \[`icon`] |  |
| enterIcon | Custom "enter" icon in the edit field (passing `null` removes the icon) | ReactNode | `<EnterOutlined />` | 4.17.0 |

### ellipsis

    {
      rows: number,
      expandable: boolean,
      suffix: string,
      symbol: ReactNode,
      tooltip: boolean | ReactNode,
      onExpand: function(event),
      onEllipsis: function(ellipsis),
    }

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| expandable | Whether to be expandable | boolean | - |  |
| rows | Max rows of content | number | - |  |
| suffix | Suffix of ellipsis content | string | - |  |
| symbol | Custom description of ellipsis | ReactNode | `Expand` |  |
| tooltip | Show tooltip when ellipsis | boolean \| ReactNode | - | 4.11.0 |
| onEllipsis | Called when enter or leave ellipsis state | function(ellipsis) | - | 4.2.0 |
| onExpand | Called when expand content | function(event) | - |  |

## FAQ

### How to use Typography.Link in react-router?

`react-router` support [customize](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md#component-reactcomponent) render component:

```tsx
<Link to="/" component={Typography.Link} />
```
