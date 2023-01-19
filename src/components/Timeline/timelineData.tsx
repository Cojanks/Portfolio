export const data = {
  title: 'Experence',
  items: [
    {
      date: '2022 - Sept',
      isCurrent: true,
      eventType: 'work',
      content: 'Vertebrae / Snap Inc',
      contentExtras: {
        type: 'list',
        list: ['derp', 'merp'],
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
        list: [
          'Designed, implemented and scaled a reusable & accessible Design System which leveraged design standards from the global Schwab UX team while establishing a community-driven standard of code re-usability, readability, and quality.',
          'Strategized future-state enterprise level JS framework solutions like a framework agnostic front end approach using Web Components.',
          'Co-designed and rapidly developed prototypes with the global user experience team to transition hero Schwab.com components like navigation and footer from an adaptive experience to a unified responsive solution.',
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
