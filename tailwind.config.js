module.exports = {
  theme: {
    colors: {
      'white': 'var(--white)',
      'black': 'var(--black)',

      'gray-lightest': 'var(--gray-lightest)',
      'gray-lighter': 'var(--gray-lighter)',
      'gray-light': 'var(--gray-light)',
      'gray': 'var(--gray)',
      'gray-dark': 'var(--gray-dark)',
      'gray-darker': 'var(--gray-darker)',
      'gray-darkest': 'var(--gray-darkest)',
      

      'primary-light': 'var(--primary-light)',
      'primary': 'var(--primary)',
      'primary-dark': 'var(--primary-dark)',

      'secondary-light': 'var(--secondary-light)',
      'secondary': 'var(--secondary)',
      'secondary-dark': 'var(--secondary-dark)',

      'info-light': 'var(--info-light)',
      'info': 'var(--info)',
      'info-dark': 'var(--info-dark)',

      'warning-light': 'var(--warning-light)',
      'warning': 'var(--warning)',
      'warning-dark': 'var(--warning-dark)',

      'success-light': 'var(--success-light)',
      'success': 'var(--success)',
      'success-dark': 'var(--success-dark)',

      'danger-light': 'var(--danger-light)',
      'danger': 'var(--danger)',
      'danger-dark': 'var(--danger-dark)',
    },

    extend: {
      boxShadow: {
        'outline': '0 0 0 0.15rem var(--gray-light)',
        'outline-primary': '0 0 0 0.15rem var(--primary-light)',
        'outline-secondary': '0 0 0 0.15rem var(--secondary-light)',
        'outline-success': '0 0 0 0.15rem var(--success-light)',
        'outline-warning': '0 0 0 0.15rem var(--warning-light)',
        'outline-info': '0 0 0 0.15rem var(--info-light)',
        'outline-danger': '0 0 0 0.15rem var(--danger-light)',
      }
    }
  },
  variants: {},
  plugins: []
}
