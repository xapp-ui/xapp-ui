# XForm Input

## XForm
The ```x-form``` component provides a form object through vue scoped slot props, that can bind with any child components.

## Input

Use ```x-form-input``` just like a normal html input element.

### Example

<x-form v-slot='{form, errors, reset}' :validator='(attr, val) => { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? true : "Your email as invalid" }'>
<x-form-group>
<x-form-label>Your Email</x-form-label>
<x-form-input placeholder='name@example.com' v-model='form.email' />
<p v-if='errors.email' class='text-red-300 text-xs'>{{ errors.email }}</p>
</x-form-group>

<div v-if='form.email' style='padding: 10px; background: #eee' class='rounded'>{{ form }}</div>
<div v-if='!form.email' style='padding: 10px; background: #eee' class='rounded'>... form data will be shown here</div>
<div class='mt-2'>
<x-button size='small' @click.prevent='reset'>Reset Form</x-button>
<x-button size='small' type='submit'>Submit</x-button>
</div>
</x-form>

```html
<x-form 
v-slot='{form, errors, reset}'
:validator='(attr, val) => { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? true : "Your email as invalid" }' >
    <x-form-group>
        <x-form-label>Your Email</x-form-label>
        <x-form-input 
            placeholder='name@example.com' 
            v-model='form.email' 
            type="email" />
        <p v-if='errors.email' class='text-red-300 text-xs'>{{ errors.email }}</p>
    </x-form-group>
    <div class='mt-2'>
        <x-button size='small' @click.prevent='reset'>Reset Form</x-button>
        <x-button size='small' type='submit'>Submit</x-button>
    </div>
</x-form>
```
### Disabled & Readonly

Here is an example of disabling and making readonly on an input.
<x-form-group>
<x-form-input disabled value='I am disabled' class='mb-2' />
<x-form-input readonly value='I am readonly' />
</x-form-group>

```html
<x-form-group>
    <x-form-input disabled value='I am disabled' />
    <x-form-input readonly value='I am readonly' />
</x-form-group>
```
### Variants

We can apply ```variant``` attribute to distinguish between various styles.
In addition, you may add ```variant-border``` and ```variant-text``` to apply variant styles to
border and text of the input.

<x-form-group>
<x-form-input variant='default' placeholder='default' class='mb-2' />
<x-form-input variant='primary' variant-text placeholder='primary' value='text primary' class='mb-2' />
<x-form-input variant='secondary' variant-text placeholder='secondary' class='mb-2' />
<x-form-input variant='success' variant-border variant-text placeholder='success' class='mb-2' />
<x-form-input variant='info' placeholder='info' class='mb-2' />
<x-form-input variant='warning' variant-text placeholder='warning' class='mb-2' />
<x-form-input variant='danger' variant-border variant-text placeholder='danger' class='mb-2' />
</x-form-group>

```html
<x-form-group>
    <x-form-input variant='default' placeholder='default' class='mb-2' />
    <x-form-input variant='primary' variant-text placeholder='primary' value='text primary' class='mb-2' />
    <x-form-input variant='secondary' variant-text placeholder='secondary' class='mb-2' />
    <x-form-input variant='success' variant-border variant-text placeholder='success' class='mb-2' />
    <x-form-input variant='info' placeholder='info' class='mb-2' />
    <x-form-input variant='warning' variant-text placeholder='warning' class='mb-2' />
    <x-form-input variant='danger' variant-border variant-text placeholder='danger' class='mb-2' />
</x-form-group>
```

### Sizes

Use ```size``` attribute to set the size of the input.

<x-form-group>
<x-form-input size='small' placeholder='small' class='mb-2' />
<x-form-input size='normal' placeholder='normal' class='mb-2' />
<x-form-input size='large' placeholder='large' class='mb-2' />
<x-form-input size='xlarge' placeholder='xlarge' class='mb-2' />
</x-form-group>


### Inline Input and Label

Use ```inline ``` attribute on ```x-form-group``` component to switch the component to flex-inline.

<x-form-group inline>
<x-form-label class='flex-1'>Your Email</x-form-label>
<x-form-input s placeholder='name@example.com' :class='flex-grow' />
</x-form-group>

```html
<x-form-group inline>
    <x-form-label class='flex-1'>Your Email</x-form-label>
    <x-form-input placeholder='name@example.com' class='flex-grow' />
</x-form-group>
```