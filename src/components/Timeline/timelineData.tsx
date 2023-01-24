export const data = {
  title: 'Experience',
  items: [
    {
      date: '2022 - Sept',
      isCurrent: true,
      eventType: 'work',
      content: 'Snap Inc',
      contentExtras: {
        type: 'list',
        iconList: [
          {
            icon: 'shop',
            content:
              'Responsible for the bespoke front-end implementation of the patented Augmented Reality, 3D, and Virtual Try-On experiences while also integrating seemlesly into an existing client web channel.',
          },
          {
            icon: 'copyright',
            content:
              'Worked with client UX design teams to ensure that all experiences communicate a clients brand, design standards, and business objectives.',
          },
          {
            icon: 'conversation',
            content:
              'Optimized implementation decisions and designs using A/B testing data on user interaction, user conversion information, and client feedback.',
          },
        ],
      },
      additionalTimeframeEvents: [
        {
          date: '2021 - August',
          type: 'event',
          content: 'Vertebrae is acquired by Snap Inc',
        },
        {
          date: '2020 - January',
          content: 'Hired at Vertebrae, Austin based AR/Virtual Try-On startup',
        },
      ],
    },
    {
      date: '2019 - December',

      content: 'Charles Schwab',
      contentExtras: {
        type: 'list',
        iconList: [
          {
            icon: 'sitemap',
            content:
              'Designed, implemented and scaled a reusable & accessible Design System which leveraged design standards from the global Schwab UX team while establishing a community-driven standard of code re-usability, readability, and quality.',
          },
          {
            icon: 'file code',
            content:
              'Strategized future-state enterprise level JS framework solutions like a framework agnostic front end approach using Web Components.',
          },
          {
            icon: 'map',
            content:
              'Co-designed and rapidly developed prototypes with the global user experience team to transition hero Schwab.com components like navigation and footer from an adaptive experience to a unified responsive solution.',
          },
        ],
      },
      additionalTimeframeEvents: [
        {
          date: '2017 - May',
        },
      ],
    },
  ],
};
