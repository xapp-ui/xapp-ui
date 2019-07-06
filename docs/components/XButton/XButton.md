# XButton

The ```x-button``` component can be used instead of an html standard button.

### Usage
---

<x-button>Default</x-button>
<x-button variant='primary'>Primary</x-button>
<x-button variant='secondary'>Secondary</x-button>
<x-button variant='success'>Success</x-button>
<x-button variant='warning'>Warning</x-button>
<x-button variant='info'>Info</x-button>

```html
<x-button>Default</x-button>
<x-button variant='primary'>Primary</x-button>
<x-button variant='secondary'>Secondary</x-button>
<x-button variant='success'>Success</x-button>
<x-button variant='warning'>Warning</x-button>
<x-button variant='info'>Info</x-button>
```

<x-button variant='info' size='large'>LARGE Button</x-button>
<x-button variant='info' size='small'>SMALL Button</x-button>
```html
<x-button variant='info' size='large'>LARGE Button</x-button>
<x-button variant='info' size='small'>SMALL Button</x-button>
```
### Props
---
| Prop name | Type   | Default | Description                              |
|-----------|--------|---------|------------------------------------------|
| variant   | String | Default | Button variant to apply specific styles. |
| size      | String | normal  | Defines one of ```normal, small, medium, large``` as size|
