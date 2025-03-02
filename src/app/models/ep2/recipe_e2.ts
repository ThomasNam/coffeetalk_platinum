import {
  bluetea,
  cinnamon,
  cocoa,
  coffee,
  ginger,
  green,
  hibiscus,
  honey,
  lemon,
  milk,
  mint,
  tea
} from './ingredients_e2';
import {Recipe} from '../type/recipe_type';

export const recipes: Recipe[] = [
  {name: '블랙 레몬', base: coffee, main: coffee, sub: lemon},
  {name: '블랙 매직', base: coffee, main: mint, sub: honey},
  {name: '카페라떼', base: coffee, main: milk, sub: milk},
  {name: '카푸치노', base: coffee, main: coffee, sub: milk},
  {name: '에스프레소', base: coffee, main: coffee, sub: coffee},
  {name: '진저브레드커피', base: coffee, main: ginger, sub: cinnamon},
  {name: '진저라떼', base: coffee, main: ginger, sub: milk},
  {name: '자헤 투브룩', base: coffee, main: coffee, sub: ginger},
  {name: '슈가앤스파이스', base: coffee, main: honey, sub: cinnamon},
  {name: '윙윙벌꿀', base: coffee, main: honey, sub: milk},
  {name: '시나몬라떼', base: coffee, main: milk, sub: cinnamon},
  {name: '스위트커피', base: coffee, main: coffee, sub: honey},
  {name: '퀘이마다', base: coffee, main: honey, sub: lemon},
  {name: '징글 빈즈', base: coffee, main: coffee, sub: cinnamon},

  // 히비스커스
  {name: '히비스커스 티', base: hibiscus, main: hibiscus, sub: hibiscus},
  {name: '비제프', base: hibiscus, main: ginger, sub: lemon},
  {name: '테 자헤 로젤라', base: hibiscus, main: ginger, sub: honey},
  {name: '스윗하트 라떼', base: hibiscus, main: milk, sub: honey},
  {name: '핑크 스파이스', base: hibiscus, main: milk, sub: cinnamon},
  {name: '조보', base: hibiscus, main: ginger, sub: ginger},
  {name: '베리블루 히비스커스 파이', base: hibiscus, main: honey, sub: mint},

  // 블루티
  {name: '버터플라이피', base: bluetea, main: bluetea, sub: bluetea},
  {name: '갤럭시 민트티', base: bluetea, main: mint, sub: lemon},
  {name: '드리밍블루', base: bluetea, main: milk, sub: honey},
  {name: '아쿠아즈 트랜퀼티', base: bluetea, main: mint, sub: mint},
  {name: '블루 라이트닝', base: bluetea, main: ginger, sub: ginger},
  {name: '플라워베드', base: bluetea, main: honey, sub: mint},
  {name: '갈라 티', base: bluetea, main: milk, sub: ginger},
  {name: '블루 마쉬멜로', base: bluetea, main: honey, sub: milk},

  {name: '갈라하드', base: tea, main: milk, sub: ginger},
  {name: '마살라 짜이', base: tea, main: ginger, sub: cinnamon},
  {name: '한여름 밤의 꿈', base: tea, main: lemon, sub: honey},
  {name: '러시안 티', base: tea, main: lemon, sub: cinnamon},
  {name: '짜이 아데니', base: tea, main: milk, sub: cinnamon},
  {name: '테 타릭', base: tea, main: tea, sub: milk},

  {name: '기침시럽', base: green, main: lemon, sub: honey},
  {name: '녹차라떼', base: green, main: milk, sub: milk},
  {name: '마라케시', base: green, main: mint, sub: mint},
  {name: '신 현미차', base: green, main: green, sub: cinnamon},
  {name: '그린치', base: green, main: ginger, sub: cinnamon},
  {name: '말차', base: green, main: green, sub: green},
  {name: '디톡스 티', base: green, main: ginger, sub: lemon},
  {name: '파이브 스타즈', base: green, main: honey, sub: milk},

  {name: '비터하트', base: cocoa, main: ginger, sub: cinnamon},
  {name: '초코비 밀크', base: cocoa, main: honey, sub: milk},
  {name: '다크 초콜릿', base: cocoa, main: cocoa, sub: cocoa},
  {name: '스페니쉬 사하라', base: cocoa, main: milk, sub: ginger},
  {name: '스파이스드 레이디', base: cocoa, main: milk, sub: cinnamon},
  {name: '299.792.458', base: cocoa, main: honey, sub: ginger},
  {name: '애프터 미드나잇', base: cocoa, main: honey, sub: mint},

  {name: '베드챔버', base: milk, main: cinnamon, sub: honey},
  {name: '르 멘톨', base: milk, main: mint, sub: lemon},
  {name: '레모니 스니펏', base: milk, main: honey, sub: lemon},
  {name: '은하수', base: milk, main: honey, sub: mint},
  {name: 'STMJ', base: milk, main: ginger, sub: honey},
  {name: '우유', base: milk, main: milk, sub: milk, noNote: true},
  {name: '허니밀크', base: milk, main: honey, sub: honey, noNote: true},

];
