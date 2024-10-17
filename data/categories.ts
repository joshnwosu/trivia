import { Category } from '@/types/category.types';

export const categories: Category[] = [
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
  {
    categoryId: '3',
    categoryName: 'Sports',
    subCategories: [
      {
        subCategoryId: '1',
        subCategoryName: 'Football',
        questions: [],
      },
      {
        subCategoryId: '1',
        subCategoryName: 'Basketball',
        questions: [],
      },
    ],
  },
];
