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
        title: 'Installation',
        slug: 'installation',
      },
    ],
  },
  {
    title: 'Components',
    children: [
      {
        title: 'Callout',
        slug: '/docs/components/callout',
      },
    ],
  },
];
