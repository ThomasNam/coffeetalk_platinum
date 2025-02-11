import {Recipe} from './recipe';

export interface StoryOne {
  name: string;
  recipeName: string;
  recipe?: Recipe;
}

export interface Story {
  dateStr: string;
  storyList: StoryOne[];
}

export const allStory: Story[] = [
  // 프레야 : 에스프레소 <커피 + 커피 + 커피>
  // 루아 : 다크 초콜릿 <초콜릿 + 초콜릿 + 초콜릿>
  // 베일리스 : 카푸치노 <커피 + 커피 + 우유 + 라떼아트>
  // 베일리스 : 녹차라떼 <녹차 + 우유 + 우유>
  {
    dateStr: '2020년 9월 22일 화요일', storyList: [
      {name: '프레야', recipeName: '에스프레소'},
      {name: '루아', recipeName: '다크 초콜릿'},
      {name: '베일리스', recipeName: '카푸치노'},
      {name: '베일리스', recipeName: '녹차라떼'},
    ],
  },

  // 조르지 : 허니커피 <커피 + 꿀 + 꿀>
  // 프레야 : 에스프레소 <커피 + 커피 + 커피>
  // 갈라 : 자헤 투브룩 <커피 + 커피 + 생강>
  // 하이드 : 자헤 투브룩 <커피 + 커피 + 생강>
  {
    dateStr: '2020년 9월 23일 수요일', storyList: [
      {name: '조르지', recipeName: '허니커피'},
      {name: '프레야', recipeName: '에스프레소'},
      {name: '갈라', recipeName: '자헤 투브룩'},
      {name: '하이드', recipeName: '자헤 투브룩'},
    ],
  },

  // 머틀 : 허니밀크 <우유 + 꿀 + 꿀>
  // 레이첼 : 우유 <우유 + 우유 + 우유>
  // 프레야 : 에스프레소 <커피 + 커피 + 커피>
  // 조르지 : 기침시럽 <녹차 + 레몬 + 꿀>
  {
    dateStr: '2020년 9월 24일 목요일', storyList: [
      {name: '머틀', recipeName: '허니밀크'},
      {name: '레이첼', recipeName: '우유'},
      {name: '프레야', recipeName: '에스프레소'},
      {name: '조르지', recipeName: '기침시럽'},
    ],
  },

  // 4일차 : 2020년 9월 25일 금요일
  // 하이드 : 생강 녹차 <녹차 + 생강 + 생강>
  // 프레야 : STMJ <우유 + 생강 +꿀>
  // 루아 : 녹차라떼 <녹차 + 우유 + 우유>
  // 갈라 : 갈라하드 <차 + 우유 + 생강>
  {
    dateStr: '2020년 9월 25일 금요일', storyList: [
      {name: '하이드', recipeName: '생강 녹차'},
      {name: '프레야', recipeName: 'STMJ'},
      {name: '루아', recipeName: '녹차라떼'},
      {name: '갈라', recipeName: '갈라하드'},
    ],
  },

  // 5일차 : 2020년 9월 26일 토요일
  // 네일 : 블랙 레몬 <커피 + 커피 + 레몬>
  // 머틀 : 카페라떼 <커피 + 우유 + 우유>
  // 아쿠아 : 마살라 짜이 <차 + 생강 + 계피>
  {
    dateStr: '2020년 9월 26일 토요일', storyList: [
      {name: '네일', recipeName: '블랙 레몬'},
      {name: '머틀', recipeName: '카페라떼'},
      {name: '아쿠아', recipeName: '마살라 짜이'},
    ],
  },

  // 6일차 : 2020년 9월 27일 일요일
  // 아쿠아 : 러시안 티 <차 + 레몬 + 계피>
  // 프레야 : 에스프레소 <커피 + 커피 + 커피>
  // 헨드리 : STMJ <우유, 생강, 꿀>
  {
    dateStr: '2020년 9월 27일 일요일', storyList: [
      {name: '아쿠아', recipeName: '러시안 티'},
      {name: '프레야', recipeName: '에스프레소'},
      {name: '헨드리', recipeName: 'STMJ'},
    ],
  },

  // 7일차 : 2020년 9월 28일 월요일
  // 갈라 : 갈라하드 <차 + 우유 + 생강>
  // 베일리스 : 진저라떼 <커피 + 생강 + 우유>
  {
    dateStr: '2020년 9월 28일 월요일', storyList: [
      {name: '갈라', recipeName: '갈라하드'},
      {name: '베일리스', recipeName: '진저라떼'},
    ],
  },

  // 8일차 : 2020년 9월 29일 화요일
  // 갈라 : 갈라하드 <차 + 우유 + 생강>
  // 하이드 : 한여름 밤의 꿈 <차 + 레몬 + 꿀>
  // 네일 : 은하수 <우유, 꿀, 민트>
  {
    dateStr: '2020년 9월 29일 월요일', storyList: [
      {name: '갈라', recipeName: '갈라하드'},
      {name: '하이드', recipeName: '한여름 밤의 꿈'},
      {name: '네일', recipeName: '은하수'},
    ],
  },

  // 9일차 : 2020년 9월 30일 수요일
  // 아쿠아 : 마라케시 <녹차 + 민트 + 민트>
  // 머틀 : 테 타릭 <차 + 차 + 우유>
  // 레이첼 : 초코비 밀크 <초콜릿 + 꿀 + 우유>
  // 헨드리 : 스페니쉬 사하라 <초콜릿 + 우유 + 생강>
  {
    dateStr: '2020년 9월 30일 수요일', storyList: [
      {name: '아쿠아', recipeName: '마라케시'},
      {name: '머틀', recipeName: '테 타릭'},
      {name: '레이첼', recipeName: '초코비 밀크'},
      {name: '헨드리', recipeName: '스페니쉬 사하라'},
    ],
  },

  // 10일차 : 2020년 10월 1일 목요일
  // 프레야 : 블랙 매직 <커피 + 민트 + 꿀>
  // 머틀 : 자헤 투브룩 <커피 + 커피 + 생강>
  {
    dateStr: '2020년 10월 1일 목요일', storyList: [
      {name: '프레야', recipeName: '블랙 매직'},
      {name: '머틀', recipeName: '자헤 투브룩'},
    ],
  },

  // 11일차 : 2020년 10월 2일 금요일
  // 베일리스 : 비터하트 <초콜릿 + 생강 + 계피>
  // 프레야 : 베드챔버 <우유 + 생강 + 꿀>
  // 루아 : 진저브레드커피 <커피 + 생강 + 계피>
  // 갈라 : 갈라하드 <차 + 우유 + 생강>
  {
    dateStr: '2020년 10월 2일 금요일', storyList: [
      {name: '베일리스', recipeName: '비터하트'},
      {name: '프레야', recipeName: '베드챔버'},
      {name: '루아', recipeName: '진저브레드커피'},
      {name: '갈라', recipeName: '갈라하드'},
    ],
  },

  //
  // 12일차 : 2020년 10월 3일 토요일
  // 프레야 : 슈가앤스파이스 <커피 + 꿀 + 계피>
  // 갈라 : 갈라하드 <차 + 우유 + 생강>
  // 레이첼 : 카페라떼 <커피 + 우유 + 우유>
  // 헨드리 : 우유 <우유 + 우유 + 우유>
  {
    dateStr: '2020년 10월 3일 금요일', storyList: [
      {name: '프레야', recipeName: '슈가앤스파이스'},
      {name: '갈라', recipeName: '갈라하드'},
      {name: '레이첼', recipeName: '카페라떼'},
      {name: '헨드리', recipeName: '우유'},
    ],
  },

  // 13일차 : 2020년 10월 4일 일요일
  // 레이첼과 헨드리 이야기의 엔딩을 볼 수 있는 날입니다.
  // 조르지 : 에프스레소 <커피 + 커피 + 커피>
  // 레이첼 : 다크 초콜릿 <초콜릿 + 초콜릿 + 초콜릿>
  {
    dateStr: '2020년 10월 4일 일요일', storyList: [
      {name: '조르지', recipeName: '에스프레소'},
      {name: '레이첼', recipeName: '다크 초콜릿'},
    ],
  },
];
