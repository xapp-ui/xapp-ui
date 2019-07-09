# XForm Input

## XForm
The ```<x-form>``` component provides a form object through vue scoped slot props, that can bind with any child components.

## Input

This is an input field

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
    </x-form-group>
    <div class='mt-2'>
        <x-button size='small' @click.prevent='reset'>Reset Form</x-button>
        <x-button size='small' type='submit'>Submit</x-button>
    </div>
</x-form>
```