

module.exports = {
  title: 'xapp-ui',
  description: 'Just playing around',
  postcss: require('../../postcss.config'),

  themeConfig: {
    nav: [
      { text: 'Getting Started', link: '/guide' },
      { text: 'Components', link: '/components/' },
      // external link to git repo...again
      { text: 'GitHub', link: 'https://github.com/xapp-ui/xapp-ui' }
    ],
  
    sidebar: {
      '/components/': [
        {
          title: 'Components',
          collapsable: false,
          children: ['Card']
        }
      ]
    }
  }

}