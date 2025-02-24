import { defineConfig } from 'vocs'

export default defineConfig({
  socials: [
    {
      icon: "warpcast",
      link: "https://warpcast.com/~/channel/betttr",
    },
  ],
  topNav: [
    { text: "Built by Builders Garden", link: "https://www.builders.garden/" },
  ],
  logoUrl: '/betttr-logo.png',
  title: 'Docs',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'How it works',
      link: '/how-it-works',
    },
    {
      text: 'Terms of Service',
      link: '/terms-of-service',
    },
  ],
})
