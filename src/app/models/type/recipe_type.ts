import {Taste, TasteType} from './taste';

export interface RecipeKey {
  key: TasteType;
  name: string;
}

export type RecipeSearch = {
  [key in TasteType]: string;
};

export interface Recipe {
  name: string;
  base: Ingredient;
  main: Ingredient;
  sub: Ingredient;
  noNote?: boolean;

  warn?: number;
  cool?: number;
  sweet?: number;
  acerbity?: number;
}

export interface SectionRecipes {
  section: Ingredient;
  recipes: Recipe[];
}

export const recipeTypeList: RecipeKey[] = [
  {'key': 'warn', 'name': '따뜻함',},
  {'key': 'cool', 'name': '차가움',},
  {'key': 'sweet', 'name': '달콤함',},
  {'key': 'acerbity', 'name': '씀',},
];

export interface Ingredient {
  name: string;
  isBase: boolean,
  baseTs?: Taste;
  mainTs: Taste;
  subTs: Taste;
}
