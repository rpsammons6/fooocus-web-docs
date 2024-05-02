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
    title: 'Getting Started with Fooocus',
    children: [
      {
        title: 'Overview',
        slug: '/docs',
      },
      {
        title: 'Features',
        slug: '/docs/features',
      },
      {
        title: 'Efficient Prompting',
        slug: '/docs/efficient-prompting',
      },
    ],
  },
  {
    title: 'Advanced Features',
    children: [
      {
        title: 'List of Premium Features',
        slug: '/docs/premium-features',
      },
    ],
  },
];
