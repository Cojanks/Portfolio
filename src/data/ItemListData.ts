export const listData = {
  header: {
    headerText: 'Projects',
    headerSubtext:
      'A list of projects displaying various Front-End & React-specific skillsets, filterable by the tags below',
    styles: { backgroundColor: '#5c9d9e' },
  },
  tags: [
    { name: 'Typescript', color: '#204f5a', id: '1' },
    { name: 'React Hooks', color: '#283349', id: '2' },
    { name: 'Redux', color: '#283349', id: '3' },
    { name: 'Custom Component', color: '#283349', id: '4' },
    { name: 'Full App', color: '#283349', id: '5' },
    { name: 'State Management', color: '#283349', id: '6' },
    { name: 'API', color: '#bf4144', id: '7' },
    { name: 'Programming Acronym', color: '#bf4144', id: '8' },
    { name: 'Strict Typing', color: '#bf4144', id: '9' },
    { name: 'Validation', color: '#de9542', id: '10' },
    { name: 'Error Handling', color: '#de9542', id: '11' },
    { name: 'App Views', color: '#de9542', id: '12' },
    { name: 'Favorite Books', color: '#fcfcfc', id: '13' },
  ],
  secretTags: ['Favorite Books'],
  items: [
    {
      id: '1',
      name: 'This whole page application',
      description:
        'Oh hey, come here often? With the exception of the progress bar and Icons, this site is entirely custom, with all custom components, sections, views, etc.',
      tags: ['typescript', 'full app', 'app views'],
      externalLinks: [
        { name: 'Github Repo', url: 'https://github.com/Cojanks/portfolio' },
        {
          name: 'README',
          url: 'https://github.com/Cojanks/portfolio/blob/main/README.md',
        },
      ],
    },
    {
      id: '2',
      name: 'Grade_ Application -> (in active development)',
      description:
        'A Grading application for educators to keep track of student grades, assignments, etc. Features to be added: The ability for educators to add/remove students, switch between different classes, adding assignments & grades, and leaving notes. Logging in & auth will be added for parents/students to sign in and view their grades/notes. Built using MUI & using a static API/database (so no actual POST capabilitt, github pages and all..)',
      tags: [
        'typescript',
        'full app',
        'redux',
        'state management',
        'api',
        'validation',
        'app views',
      ],
      externalLinks: [
        { name: 'Github Repo', url: 'https://github.com/Cojanks/portfolio' },
        {
          name: 'README',
          url: 'https://github.com/Cojanks/portfolio/blob/main/README.md',
        },
      ],
    },
    {
      id: '3',
      name: '[View Components] - (the various sections and tab content blocks)',
      description:
        'I adopted the approach where a view component (within /views) will handle any kind of data fetching / procesing which are then just passed to the individual components to keep them lighter weight ',
      tags: [
        'typescript',
        'app views',
        'error handling',
        'Programming Acronym',
        'api',
        'state management',
        'custom component',
      ],
      externalLinks: [
        {
          name: 'Github Repo',
          url: 'https://github.com/Cojanks/portfolio/tree/main/src/views',
        },
        {
          name: 'README',
          url: 'https://github.com/Cojanks/portfolio/blob/main/src/components/ProfileCard/README.md',
        },
      ],
    },
    {
      id: '4',
      name: '[Item List] Component - (this right here)',
      description: 'A tag-based filterable list component',
      tags: [
        'typescript',
        'custom component',
        'state management',
        'Strict Typing',
      ],
      externalLinks: [
        {
          name: 'Github Repo',
          url: 'https://github.com/Cojanks/portfolio/tree/main/src/components/ItemList',
        },
        {
          name: 'README',
          url: 'https://github.com/Cojanks/portfolio/blob/main/src/components/ItemList/README.md',
        },
      ],
    },
    {
      id: '5',
      name: '[Tab] Component - (above)',
      description:
        'A container component that can change content based on the active tab. This content can be of type [`string` |` React.ReactNode` | `JSX.Element`] which gives a lot of flexability to developers. How I implemented this was with individual view components one of which fetches data from a static API to hydrate a [Timeline] component',
      tags: ['typescript', 'custom component', 'state management'],
      externalLinks: [
        {
          name: 'Github Repo',
          url: 'https://github.com/Cojanks/portfolio/tree/main/src/components/Tab',
        },
        {
          name: 'README',
          url: 'https://github.com/Cojanks/portfolio/blob/main/src/components/Tab/README.md',
        },
      ],
    },
    {
      id: '6',
      name: "[Timeine] Component - (seen within the 'Experience' tab above)",
      description: 'A visual time components with much of the content able to ',
      tags: ['typescript', 'custom component', 'api', 'Strict Typing'],
      externalLinks: [
        {
          name: 'Github Repo',
          url: 'https://github.com/Cojanks/portfolio/tree/main/src/components/Timeline',
        },
        {
          name: 'README',
          url: 'https://github.com/Cojanks/portfolio/blob/main/src/components/Timeline/README.md',
        },
      ],
    },
    {
      id: '7',
      name: '[Profile Card] Component - (above)',
      description: 'A tag-based filterable list component',
      tags: ['typescript', 'custom component', 'state management'],
      externalLinks: [
        {
          name: 'Github Repo',
          url: 'https://github.com/Cojanks/portfolio/tree/main/src/components/ProfileCard',
        },
        {
          name: 'README',
          url: 'https://github.com/Cojanks/portfolio/blob/main/src/components/ProfileCard/README.md',
        },
      ],
    },
    {
      id: 'b1',
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
      id: 'b2',
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
      id: 'b3',
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
