export type Question = {
  questionId: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
};

export type SubCategory = {
  subCategoryId: string;
  subCategoryName: string;
  questions: Question[];
};

export type Category = {
  categoryId: string;
  categoryName: string;
  subCategories: SubCategory[];
};

export const catgories: Category[] = [
  {
    categoryId: '1',
    categoryName: 'Science',
    subCategories: [
      {
        subCategoryId: '1',
        subCategoryName: 'Physics',
        questions: [],
      },
      {
        subCategoryId: '2',
        subCategoryName: 'Biology',
        questions: [],
      },
    ],
  },
  {
    categoryId: '2',
    categoryName: 'History',
    subCategories: [
      {
        subCategoryId: '1',
        subCategoryName: 'World Wars',
        questions: [],
      },
    ],
  },
];
