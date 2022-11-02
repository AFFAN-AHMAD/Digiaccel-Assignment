const QuizModel = require("../models/Quiz.model");

let onlyOneCorrect = [
  {
    category: "Entertainment: Video Games",
    difficulty: "1",
    question: "What is the main character of Metal Gear Solid 2?",
    answers: ["Solidus Snake", "Big Boss", "Venom Snake", "Raiden"],
    correct_answer: "Raiden",
  },
  {
    category: "Entertainment: Music",
    difficulty: "2",
    question:
      "Which member of the English band &quot;The xx&quot; released their solo album &quot;In Colour&quot; in 2015?",
    answers: ["Romy Madley Croft", "Oliver Sim", "Baria Qureshi", "Jamie xx"],
    correct_answer: "Jamie xx",
  },
  {
    category: "Science & Nature",
    difficulty: "3",
    question:
      "An organic compound is considered an alcohol if it has what functional group?",
    answers: ["Carbonyl", "Alkyl", "Aldehyde", "Hydroxyl"],
    correct_answer: "Hydroxyl",
  },
  {
    category: "Entertainment: Music",
    difficulty: "4",
    question: "Who won the 1989 Drum Corps International championships?",
    answers: [
      "Blue Devils",
      "The Academy",
      "The Bluecoats",
      "Santa Clara Vanguard",
    ],
    correct_answer: "Santa Clara Vanguard",
  },
  {
    category: "Animals",
    difficulty: "5",
    question: "What scientific family does the Aardwolf belong to?",
    answers: ["Canidae", "Felidae", "Eupleridae", "Hyaenidae"],
    correct_answer: "Hyaenidae",
  },
  {
    category: "Entertainment: Film",
    difficulty: "6",
    question: "Who plays the Nemesis in the Resident Evil movies?",
    answers: ["Jason Dip", "Eric Mabius", "Jimmy Matts", "Matthew Taylor"],
    correct_answer: "Matthew Taylor",
  },
  {
    category: "Entertainment: Video Games",
    difficulty: "7",
    question: "In Undertale, how much do Spider Donuts cost in Hotland?",
    answers: ["7G", "40G", "12G", "9999G"],
    correct_answer: "9999G",
  },
  {
    category: "Entertainment: Television",
    difficulty: "8",
    question:
      "How many seasons did the Sci-Fi television show &quot;Stargate Atlantis&quot; have?",
    answers: ["10", "2", "7", "5"],
    correct_answer: "5",
  },
  {
    category: "Entertainment: Comics",
    difficulty: "9",
    question:
      "In Calvin and Hobbes, what is the name of Susie&#039;s stuffed rabbit?",
    answers: ["Mr. Bunbun", "Mr. Rabbit", "Mr. Hoppy", "Mr. Bun"],
    correct_answer: "Mr. Bun",
  },
  {
    category: "Entertainment: Comics",
    difficulty: "10",
    question:
      "In Bionicle, who was formerly a Av-Matoran and is now the Toa of Light?",
    answers: ["Jaller", "Vakama", "Tahu", "Takua"],
    correct_answer: "Takua",
  },
];

let moreThanOneCorrect = [
  ({
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "1",
    question:
      "This movie contains the quote, &quot;I love the smell of napalm in the morning!&quot;",
    correct_answer: ["Apocalypse Now", "Platoon"],
    answers: [
      "Platoon",
      "The Deer Hunter",
      "Full Metal Jacket",
      "Apocalypse Now",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "2",
    question:
      "Which of the following languages is used as a scripting language in the Unity 3D game engine?",
    correct_answer: ["C#", "Objective-C", "Java"],
    answers: ["Java", "C++", "Objective-C"],
  },
  {
    category: "Entertainment: Cartoon & Animations",
    type: "multiple",
    difficulty: "3",
    question:
      "Who created the Cartoon Network series &quot;Adventure Time&quot;?",
    correct_answer: ["Pendleton Ward", "Ben Bocquelet"],
    answers: [
      "J. G. Quintel",
      "Ben Bocquelet",
      "Rebecca Sugar",
      "Pendleton Ward",
    ],
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "4",
    question: "What nucleotide pairs with guanine?",
    correct_answer: ["Cytosine", "Thymine"],
    answers: ["Thymine", "Adenine", "Uracil", "Cytosine"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "5",
    question: "In the Lego Island trilogy, who taught Pepper Roni how to read?",
    correct_answer: ["Officer Laura Brick", "Papa Brickolini"],
    answers: [
      "Papa Brickolini",
      "Officer Nick Brick",
      "Mama Brickolini",
      "Officer Laura Brick",
    ],
  },
  {
    category: "Entertainment: Musicals & Theatres",
    type: "multiple",
    difficulty: "6",
    question:
      "Who serves as the speaker of the prologue in Shakespeare&#039;s Romeo and Juliet?",
    correct_answer: ["Chorus", "Refrain", "Capulet"],
    answers: ["Montague", "Refrain", "Capulet", "Chorus"],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "7",
    question: "Why was The Green Monster at Fenway Park was originally built?",
    correct_answer: [
      "To provide extra seating.",
      "To prevent viewing games from outside the park.",
    ],
    answers: [
      "To make getting home runs harder.",
      "To display advertisements.",
      "To provide extra seating.",
      "To prevent viewing games from outside the park.",
    ],
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "8",
    question: "What nuts are used in the production of marzipan?",
    correct_answer: ["Peanuts", "Walnuts"],
    answers: ["Peanuts", "Walnuts", "Pistachios", "Almonds"],
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "9",
    question:
      "After his loss at the Battle of Waterloo, Napoleon Bonaparte was exiled to which island?",
    correct_answer: ["St. Helena", "Canary"],
    answers: ["Elba", "Corsica", "Canary", "St. Helena"],
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "10",
    question: "Which country has the union jack in its flag?",
    correct_answer: ["New Zealand", "South Africa"],
    answers: ["South Africa", "Canada", "Hong Kong", "New Zealand"],
  }),
];
const createQuiz = async (req, res) => {
  try {
    let { quest } = req.body;
    if (quest.length < 10) {
      return res.send("create a list of 10 questions");
    }

    let quiz = await QuizModel({ quest });
    quiz.save();

    res.status(200).send("quiz is created sucessfully");
  } catch (err) {
    res.send(err);
  }
};

module.exports = createQuiz;
