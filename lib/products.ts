export type Product = {
  slug: string;
  name: string;
  sku: string;
  brand: string;
  description: string;
  features: string[];
  images: string[];
  details: [string, string][];
  alternateConfiguration?: {
    eyebrow: string;
    title: string;
    description: string;
    images: { src: string; label: string }[];
  };
};

export const products: Product[] = [
  {
    slug: 'hw-g-214',
    name: '10x20 Kit G-214',
    sku: 'HW-G-214',
    brand: 'Looboo',
    description: '10x20 kit featuring an extended locking storage room, a four-panel backlit display, a side return attached with L-connectors, and a standard counter. Kit includes printed graphics.',
    features: ['Storage Room', 'Backlit'],
    images: ['/product/view-1.webp', '/product/view-2.webp', '/product/view-3.webp'],
    alternateConfiguration: {
      eyebrow: 'Expand the footprint',
      title: 'Also works as a 20x20 kit',
      description: 'By applying graphics to the back side of the exhibit, G-214 can also be used within a 20x20 space. These reference views show how the same structure can present a finished experience from multiple approaches in a larger island-style footprint.',
      images: [
        { src: '/product/g214-20x20/default.jpeg', label: 'Front perspective' },
        { src: '/product/g214-20x20/alt.jpeg', label: 'Alternate perspective' },
        { src: '/product/g214-20x20/top.jpeg', label: '20x20 floor-plan view' },
        { src: '/product/g214-20x20/rear.jpeg', label: 'Rear graphic area' },
        { src: '/product/g214-20x20/side.jpeg', label: 'Side elevation' },
      ],
    },
    details: [
      ['Product Details', 'A complete 10x20 modular exhibit kit with an extended locking storage room, four-panel backlit display, side return, L-connectors, and standard counter. Printed graphics are included.'],
      ['Dimensions', '20 ft wide × 10 ft deep. Components pack down for streamlined transport and repeat use.'],
      ['What’s Included', 'Backlit display, storage room, side return, connectors, counter, hardware, and printed graphics.'],
      ['Shipping & Setup', 'Designed for trade show installation with reusable modular components and labeled hardware.'],
    ],
  },
  {
    slug: 'hw-g-107',
    name: '10x10 Kit G-107',
    sku: 'HW-G-107',
    brand: 'Looboo',
    description: '10x10 kit featuring a 1x1 locking storage room, a two-panel backlit display, side-panel return attached with L-connectors, a monitor bracket, and a standard counter. Kit includes printed graphics.',
    features: ['Backlit', 'Storage Room'],
    images: Array.from({ length: 7 }, (_, index) => `/product/g107/view-${index + 1}.webp`),
    details: [
      ['Product Details', 'A compact 10x10 exhibit kit combining illuminated graphics, secure storage, a monitor bracket, and a practical counter in one coordinated footprint.'],
      ['Dimensions', '10 ft wide × 10 ft deep, sized for a standard inline trade show booth.'],
      ['What’s Included', 'Two-panel backlit display, 1x1 locking storage room, side return, L-connectors, monitor bracket, counter, hardware, and printed graphics.'],
      ['Shipping & Setup', 'Modular construction keeps the kit reusable and makes individual components easier to pack, transport, and assemble.'],
    ],
  },
];

export const g214 = products[0];
export const g107 = products[1];
