export type Trainer = {
  name: string;
  role: string;
  paragraphs: string[];
};

export const trainers: Trainer[] = [
  {
    name: "Roman Garcia",
    role: "Lead trainer and management",
    paragraphs: [
      "Roman leads the coaching team and runs Ajax day to day. One Google review calls our trainers “top-notch, especially Roman.”",
    ],
  },
  {
    name: "Erin Young",
    role: "Personal trainer",
    paragraphs: [],
  },
  {
    name: "Alie James",
    role: "Personal trainer",
    paragraphs: [],
  },
];
