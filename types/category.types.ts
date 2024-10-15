// /src/types/categoryTypes.ts

import { Question } from './questions.types'; // Import the Question type

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
