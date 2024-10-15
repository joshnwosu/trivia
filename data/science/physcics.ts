import { Question } from '@/types/questions.types';

const physicsQuestions: Question[] = [
  {
    questionId: '1',
    questionText: 'What is the speed of light?',
    options: [
      '299,792,458 meters per second',
      '150,000,000 meters per second',
      '1,000 meters per second',
    ],
    correctAnswer: '299,792,458 meters per second',
  },
  {
    questionId: '2',
    questionText: 'Who developed the theory of relativity?',
    options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei'],
    correctAnswer: 'Albert Einstein',
  },
];

export default physicsQuestions;
