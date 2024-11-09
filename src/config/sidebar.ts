export type SidebarItem = {
  title: string;
  slug?: string;
  children: Array<{
    title: string;
    slug: string;
    status?: string;
  }>;
};

export const SIDEBAR: Array<SidebarItem> = [
  {
    title: 'Getting Started',
    children: [
      {
        title: 'Overview',
        slug: '/docs',
      },
      {
        title: 'Privacy Policy',
        slug: '/docs/privacypolicy',
      },
      {
        title: 'Terms of Service',
        slug: '/docs/terms',
      },
      {
        title: 'Features and Commands',
        slug: '/docs/features',
      },
      {
        title: 'Efficient Prompting',
        slug: '/docs/efficient-prompting',
      },
      {
        title: 'Image Manipulation',
        slug: '/docs/image-manipulation',
      },
    ],
  },
  {
    title: 'Advanced Features',
    children: [
      {
        title: 'Advanced Features Overview',
        slug: '/docs/premium-features',
      },
    ],
  },
];
