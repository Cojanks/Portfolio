export const listData = {
  header: {
    headerText: 'Projects',
    headerSubtext:
      'A list of projects displaying various Front-End & React-specific skillsets, filterable by the tags below',
    styles: { backgroundColor: '#5c9d9e' },
  },
  tags: [
    { name: 'Typescript', color: '#204f5a' },
    { name: 'React Hooks', color: '#283349' },
    { name: 'API', color: '#bf4144' },
    { name: 'Custom Component', color: '#de9542' },
    { name: 'Validation', color: '#2d0720' },
    { name: 'Favorite Books', color: '#fcfcfc' },
  ],
  items: [
    {
      name: 'This Page!',
      description:
        'Oh hey, come here often? With the exception of the progress bar and Icons, this site is entirely custom, all components, sections, etc.',
      tags: ['typescript', 'custom component'],
      externalLinks: [
        { name: 'Github', url: 'https://github.com/Cojanks/portfolio' },
        {
          name: 'Github README',
          url: 'https://github.com/Cojanks/portfolio/blob/main/README.md',
        },
      ],
    },
    {
      name: 'More coming soon',
      description:
        'Building a BETTER FUTURE (Portfolio)! (I will be adding more as soon as I can, lots to come)',
      tags: ['typescript', 'React Hooks', 'custom component', 'api'],
    },
    {
      name: 'House of Leaves',
      itemCustomHeader: {
        header: 'House of Leaves',
        subHeader: 'Mark Z. Danielewsi',
      },
      description:
        'If you are looking for a truly unique novel that not only confronts the medium of novels & books, meta-awareness in storytelling, unreliable narrators, and some slow burn cosmic horror wrapped around a mystery, get this book (a physical copy).',
      tags: ['Favorite Books'],
      secret: true,
    },
    {
      name: 'Children of Time',
      itemCustomHeader: {
        header: 'Children of Time',
        subHeader: 'Adrian Tchaikovsky',
      },
      description:
        'First in a trilogy, a saga of uplifting a species of spider to a space-faring civilation... Imaginative and incredible',
      tags: ['Favorite Books'],
      secret: true,
    },
    {
      name: 'The First Fifteen Lives of Harry August',
      itemCustomHeader: {
        header: 'The First Fifteen Lives of Harry August',
        subHeader: 'Claire North',
      },
      description: 'A unique take on time loops, simply a great story. ',
      tags: ['Favorite Books'],
      secret: true,
    },
  ],
};
