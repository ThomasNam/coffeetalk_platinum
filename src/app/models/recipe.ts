import {cinnamon, cocoa, coffee, ginger, green, honey, Ingredient, lemon, milk, mint, tea} from './ingredients';


export interface Recipe {
  name: string;
  base: Ingredient;
  main: Ingredient;
  sub: Ingredient;

  warn: number;
  cool: number;
  sweet: number;
  acerbity: number;
}

export interface SectionRecipes {
  section: Ingredient;
  recipes: Recipe[];
}

export const recipes: Recipe[] = [
  {name: '블랙 레몬', base: coffee, main: coffee, sub: lemon, warn: 5, cool: 3, sweet: 0, acerbity: 8},
  {name: '블랙 매직', base: coffee, main: mint, sub: honey, warn: 3, cool: 5, sweet: 5, acerbity: 8},
  {name: '카페라떼', base: coffee, main: milk, sub: milk, warn: 5, cool: 3, sweet: 0, acerbity: 5},
  {name: '카푸치노', base: coffee, main: coffee, sub: milk, warn: 5, cool: 3, sweet: 0, acerbity: 8},
  {name: '에스프레소', base: coffee, main: coffee, sub: coffee, warn: 8, cool: 0, sweet: 0, acerbity: 8},
  {name: '진저브레드커피', base: coffee, main: ginger, sub: cinnamon, warn: 8, cool: 0, sweet: 3, acerbity: 8},
  {name: '진저라떼', base: coffee, main: ginger, sub: milk, warn: 8, cool: 0, sweet: 3, acerbity: 8},
  {name: '자헤 투브룩', base: coffee, main: coffee, sub: ginger, warn: 8, cool: 0, sweet: 0, acerbity: 8},
  {name: '슈가앤스파이스', base: coffee, main: honey, sub: cinnamon, warn: 5, cool: 0, sweet: 8, acerbity: 5},

  {name: '갈라하드', base: tea, main: milk, sub: ginger, warn: 8, cool: 5, sweet: 0, acerbity: 5},
  {name: '마살라 짜이', base: tea, main: ginger, sub: cinnamon, warn: 8, cool: 3, sweet: 3, acerbity: 8},
  {name: '한여름 밤의 꿈', base: tea, main: lemon, sub: honey, warn: 5, cool: 5, sweet: 3, acerbity: 8},
  {name: '러시안 티', base: tea, main: lemon, sub: cinnamon, warn: 5, cool: 5, sweet: 3, acerbity: 8},
  {name: '짜이 아데니', base: tea, main: milk, sub: cinnamon, warn: 8, cool: 5, sweet: 3, acerbity: 3},
  {name: '테 타릭', base: tea, main: tea, sub: milk, warn: 8, cool: 5, sweet: 0, acerbity: 5},

  {name: '기침시럽', base: green, main: lemon, sub: honey, warn: 3, cool: 3, sweet: 3, acerbity: 8},
  {name: '녹차라떼', base: green, main: milk, sub: milk, warn: 3, cool: 3, sweet: 0, acerbity: 5},
  {name: '마라케시', base: green, main: mint, sub: mint, warn: 3, cool: 8, sweet: 3, acerbity: 8},
  {name: '신 현미차', base: green, main: green, sub: cinnamon, warn: 5, cool: 0, sweet: 3, acerbity: 8},
  {name: '그린치', base: green, main: ginger, sub: cinnamon, warn: 5, cool: 0, sweet: 3, acerbity: 8},

  {name: '비터하트', base: cocoa, main: ginger, sub: cinnamon, warn: 5, cool: 3, sweet: 5, acerbity: 8},
  {name: '초코비 밀크', base: cocoa, main: honey, sub: milk, warn: 0, cool: 3, sweet: 8, acerbity: 5},
  {name: '다크 초콜릿', base: cocoa, main: cocoa, sub: cocoa, warn: 0, cool: 3, sweet: 3, acerbity: 8},
  {name: '스페니쉬 사하라', base: cocoa, main: milk, sub: ginger, warn: 3, cool: 5, sweet: 3, acerbity: 5},
  {name: '스파이스드 레이디', base: cocoa, main: milk, sub: cinnamon, warn: 3, cool: 5, sweet: 5, acerbity: 5},

  {name: '베드챔버', base: milk, main: cinnamon, sub: honey, warn: 5, cool: 3, sweet: 8, acerbity: 0},
  {name: '르 멘톨', base: milk, main: mint, sub: lemon, warn: 3, cool: 8, sweet: 3, acerbity: 5},
  {name: '레모니 스니펏', base: milk, main: honey, sub: lemon, warn: 3, cool: 5, sweet: 5, acerbity: 3},
  {name: '은하수', base: milk, main: honey, sub: mint, warn: 3, cool: 8, sweet: 5, acerbity: 0},
  {name: 'STMJ', base: milk, main: ginger, sub: honey, warn: 5, cool: 3, sweet: 5, acerbity: 3},
  {name: '우유', base: milk, main: milk, sub: milk, warn: 3, cool: 8, sweet: 3, acerbity: 0},
]
