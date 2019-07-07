# XButton

The ```x-button``` component can be used instead of an html standard button.

### Basic Examples
***

<x-button>Default</x-button>
<x-button variant='primary'>Primary</x-button>
<x-button variant='secondary'>Secondary</x-button>
<x-button variant='success'>Success</x-button>
<x-button variant='warning'>Warning</x-button>
<x-button variant='danger'>Danger</x-button>
<x-button variant='info'>Info</x-button>

```html
<x-button>Default</x-button>
<x-button variant='primary'>Primary</x-button>
<x-button variant='secondary'>Secondary</x-button>
<x-button variant='success'>Success</x-button>
<x-button variant='warning'>Warning</x-button>
<x-button variant='danger'>Danger</x-button>
<x-button variant='info'>Info</x-button>
```

### Outline buttons
***

####
<x-button outline>Default</x-button>
<x-button outline variant='primary'>Primary</x-button>
<x-button outline variant='secondary'>Secondary</x-button>
<x-button outline variant='success'>Success</x-button>
<x-button outline variant='warning'>Warning</x-button>
<x-button outline variant='danger'>Danger</x-button>
<x-button outline variant='info'>Info</x-button>

```html
<x-button outline>Default</x-button>
<x-button outline variant='primary'>Primary</x-button>
<x-button outline variant='secondary'>Secondary</x-button>
<x-button outline variant='success'>Success</x-button>
<x-button outline variant='warning'>Warning</x-button>
<x-button outline variant='danger'>Danger</x-button>
<x-button outline variant='info'>Info</x-button>
```

### Button sizes
***
####
<x-button variant='info' size='xlarge'>EXTRA LARGE</x-button>
<x-button variant='info' size='large'>LARGE</x-button>
<x-button variant='info' size='normal'>NORMAL</x-button>
<x-button variant='info' size='small'>SMALL</x-button>
```html
<x-button variant='info' size='xlarge'>EXTRA LARGE</x-button>
<x-button variant='info' size='large'>LARGE</x-button>
<x-button variant='info' size='normal'>NORMAL</x-button>
<x-button variant='info' size='small'>SMALL</x-button>
```

### Button Elements
***
Default element of the button is just a normal button, but you can switch it to an input or anchor tag using ```element``` attribute.  

 #### 
<x-button element='button'>Button</x-button>
<x-button element='a' href='#/btn-link'>Link</x-button>
<x-button element='input' value='Submit' type='submit' />

```html
<x-button element='button'>Button</x-button>
<x-button element='a' href='#/btn-link'>Link</x-button>
<x-button element='input' value='Submit' type='submit' />
```

### Button Spread
***
add the attribute ```spread``` to make the button spread across its parent container.

####

<x-button spread variant='primary'>Primary</x-button>
<x-button spread variant='secondary'>Secondary</x-button>
<x-button spread variant='success'>Success</x-button>

```html
<x-button spread variant='primary'>Primary</x-button>
<x-button spread variant='secondary'>Secondary</x-button>
<x-button spread variant='success'>Success</x-button>
```

### Custom styles
***
You may use the ```class``` attribute to set your own classes.  

###
<x-button class='bg-purple-400-accent hover:bg-blue-400 text-white'>Example</x-button>
<x-button class='shadow-md border-amber-900 border-2'>Example</x-button>
<x-button class='text-2xl text-green hover:bg-green hover:text-white'>Example</x-button>

```html

<x-button class='bg-purple-400-accent hover:bg-blue-400 text-white'>Example</x-button>
<x-button class='shadow-md border-amber-900 border-2'>Example</x-button>
<x-button class='text-2xl text-green hover:bg-green hover:text-white p-0'>Example</x-button>
```