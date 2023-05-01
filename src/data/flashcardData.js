// const monthsCards = [
//   {
//     section: {
//       id: 1,
//       english: 'Months of the Year',
//       teReo: "Te Au Marama ō te Mata'iti",
// cards: [
//   {
//     question: 'January',
//     answer: 'Tiānuare',
//   },
//   {
//     question: 'February',
//     answer: 'Pēperuare',
//   },
//   {
//     question: 'March',
//     answer: 'Māti',
//   },
//   {
//     question: 'April',
//     answer: 'Āperirā',
//   },
//   {
//     question: 'May',
//     answer: 'Mē',
//   },
//   {
//     question: 'June',
//     answer: 'Tiūnu',
//   },
//   {
//     question: 'July',
//     answer: 'Tiurai',
//   },
//   {
//     question: 'August',
//     answer: 'Aukute',
//   },
//   {
//     question: 'September',
//     answer: 'Tepetema',
//   },
//   {
//     question: 'October',
//     answer: 'Okotopa',
//   },
//   {
//     question: 'November',
//     answer: 'Noema',
//   },
//   {
//     question: 'December',
//     answer: 'Tītema',
//   },
// ],
//     },
//   },
// ]

// const daysOfWeekCards = [
//   {
// section: {
//   id: 2,
//   english: 'Days of the Week',
//   teReo: "Au rā o te 'epetoma",
//   cards: [
//     {
//       id: 1,
//       question: 'Monday',
//       answer: 'Monitē',
//     },
//     {
//       id: 2,
//       question: 'Tuesday',
//       answer: "Ru'irua",
//     },
//     {
//       id: 3,
//       question: 'Wednesday',
//       answer: "Ru'itoru",
//     },
//     {
//       id: 4,
//       question: 'Thursday',
//       answer: 'Paraparau',
//     },
//     {
//       id: 5,
//       question: 'Friday',
//       answer: 'Varaire',
//     },
//     {
//       id: 6,
//       question: 'Saturday',
//       answer: "Ma'anākai",
//     },
//     {
//       id: 7,
//       question: 'Sunday',
//       answer: 'Tāpati',
//     },
//   ],
// },
//   },
// ]

// //id: 3
// const bodyPartsCards = [
//   {
//     section: {
//       id: 3,
//       english: 'Parts of the Body',
//       teReo: "Au Mero 'Ō Te Kōpapa",
//     },
//     cards: [
//       {
//         id: 1,
//         question: 'Head',
//         answer: 'Katu',
//       },
//       {
//         id: 2,
//         question: 'Neck',
//         answer: 'Kakī',
//       },
//       {
//         id: 3,
//         question: 'Eye',
//         answer: 'Mata',
//       },
//       {
//         id: 4,
//         question: 'Mouth',
//         answer: "Va'a",
//       },
//       {
//         id: 5,
//         question: 'Ear',
//         answer: 'Taringa',
//       },
//       {
//         id: 6,
//         question: 'Hand',
//         answer: 'Rima',
//       },
//       {
//         id: 7,
//         question: 'Leg',
//         answer: 'Vaevae',
//       },
//     ],
//   },
// ]

// //id: 4
// const meetAndGreetCards = [
//   {
//     section: {
//       id: 4,
//       english: 'Meet and Greet',
//       teReo: "Au Tū 'Ārāvei'anga",
//     },
//     cards: [
//       {
//         id: 1,
//         engQuestion: 'How are you?',
//         teReoAnswer: "Pē'ea koe?",
//       },
//       {
//         id: 2,
//         engQuestion: "I'm good thank you",
//         teReoAnswer: "Meitaki 'ua au",
//       },
//       {
//         id: 3,
//         engQuestion: 'What is your name?',
//         teReoAnswer: "Ko'ai tō'ou ingoa?",
//       },
//       {
//         id: 4,
//         engQuestion: 'My name is ______?',
//         teReoAnswer: 'Ko ______ tokū ingoa',
//       },
//       {
//         id: 5,
//         engQuestion: 'Where are you from?',
//         teReoAnswer: "Nō'ea mai koe?",
//       },
//       {
//         id: 6,
//         engQuestion: 'Where are you going?',
//         teReoAnswer: "Ka 'aere koe ki 'ea?",
//       },
//       {
//         id: 7,
//         engQuestion: 'Pleased to meet you',
//         teReoAnswer: "Mataora i te 'āravei 'iā koe",
//       },
//     ],
//   },
// ]

// const flashcardData = {
//   months: monthsCards,
//   daysOfWeek: daysOfWeekCards,
//   bodyParts: bodyPartsCards,
//   meetAndGreet: meetAndGreetCards,
// }

const flashcardData = {
  sections: [
    {
      id: 1,
      english: 'Months of the Year',
      teReo: "Te Au Marama ō te Mata'iti",
      cards: [
        {
          question: 'January',
          answer: 'Tiānuare',
        },
        {
          question: 'February',
          answer: 'Pēperuare',
        },
        {
          question: 'March',
          answer: 'Māti',
        },
        {
          question: 'April',
          answer: 'Āperirā',
        },
        {
          question: 'May',
          answer: 'Mē',
        },
        {
          question: 'June',
          answer: 'Tiūnu',
        },
        {
          question: 'July',
          answer: 'Tiurai',
        },
        {
          question: 'August',
          answer: 'Aukute',
        },
        {
          question: 'September',
          answer: 'Tepetema',
        },
        {
          question: 'October',
          answer: 'Okotopa',
        },
        {
          question: 'November',
          answer: 'Noema',
        },
        {
          question: 'December',
          answer: 'Tītema',
        },
      ],
    },
    {
      id: 2,
      english: 'Days of the Week',
      teReo: "Au rā o te 'epetoma",
      cards: [
        {
          id: 1,
          question: 'Monday',
          answer: 'Monitē',
        },
        {
          id: 2,
          question: 'Tuesday',
          answer: "Ru'irua",
        },
        {
          id: 3,
          question: 'Wednesday',
          answer: "Ru'itoru",
        },
        {
          id: 4,
          question: 'Thursday',
          answer: 'Paraparau',
        },
        {
          id: 5,
          question: 'Friday',
          answer: 'Varaire',
        },
        {
          id: 6,
          question: 'Saturday',
          answer: "Ma'anākai",
        },
        {
          id: 7,
          question: 'Sunday',
          answer: 'Tāpati',
        },
      ],
    },
    {
      id: 3,
      english: 'Parts of the Body',
      teReo: "Au Mero 'Ō Te Kōpapa",
      cards: [
        {
          id: 1,
          question: 'Head',
          answer: 'Katu',
        },
        {
          id: 2,
          question: 'Neck',
          answer: 'Kakī',
        },
        {
          id: 3,
          question: 'Eye',
          answer: 'Mata',
        },
        {
          id: 4,
          question: 'Mouth',
          answer: "Va'a",
        },
        {
          id: 5,
          question: 'Ear',
          answer: 'Taringa',
        },
        {
          id: 6,
          question: 'Hand',
          answer: 'Rima',
        },
        {
          id: 7,
          question: 'Leg',
          answer: 'Vaevae',
        },
      ],
    },
    {
      id: 4,
      english: 'Meet and Greet',
      teReo: "Au Tū 'Ārāvei'anga",
      cards: [
        {
          id: 1,
          question: 'How are you?',
          answer: "Pē'ea koe?",
        },
        {
          id: 2,
          question: "I'm good thank you",
          answer: "Meitaki 'ua au",
        },
        {
          id: 3,
          question: 'What is your name?',
          answer: "Ko'ai tō'ou ingoa?",
        },
        {
          id: 4,
          question: 'My name is ______?',
          answer: 'Ko ______ tokū ingoa',
        },
        {
          id: 5,
          question: 'Where are you from?',
          answer: "Nō'ea mai koe?",
        },
        {
          id: 6,
          question: 'Where are you going?',
          answer: "Ka 'aere koe ki 'ea?",
        },
        {
          id: 7,
          question: 'Pleased to meet you',
          answer: "Mataora i te 'āravei 'iā koe",
        },
      ],
    },
  ],
}
export default flashcardData
