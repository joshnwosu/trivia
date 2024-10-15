import { Category } from '@/types/category.types';

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
