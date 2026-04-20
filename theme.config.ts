import { defineThemeConfig } from '@utils/defineThemeConfig'

export default defineThemeConfig({
  name: 'Julian Kasimir',
  id: 'juliankasimir.github.io',
  logo: null,
  seo: {
    title: 'Julian Kasimir',
    description:
      'Julian Kasimir is a passionate app & web developer.',
    author: 'Julian Kasimir',
    image: null,
  },
  colors: {
    primary: '#D9B480',
    secondary: '#A4BBAF',
    neutral: '#95948F',
    outline: '#E66A6A',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '/',
      },
      {
        type: 'link',
        label: 'Go to my GitHub profile, opens in new tab',
        href: 'https://github.com/juliankasimir',
        icon: 'lucide:github',
        external: true,
        excludeFromLauncher: true,
      },
      {
        type: 'link',
        label: 'Go to my LinkedIn profile, opens in new tab',
        href: 'https://www.linkedin.com/in/juliankasimir/',
        icon: 'lucide:linkedin',
        external: true,
        excludeFromLauncher: true,
      },
    ],
  },
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/juliankasimir',
      icon: 'lucide:github',
    },
  ],
})
