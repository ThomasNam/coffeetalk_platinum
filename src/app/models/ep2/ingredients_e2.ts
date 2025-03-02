import {Ingredient} from '../type/recipe_type';

// 음료 이름
// 음료 설명
// <도전 모드> 음료의 맛 - 0칸 해당하는 맛 없음, 1~3칸 해당하는 맛 약간 있음, 4~5칸 해당하는 맛 있음, 6~8칸 해당하는 맛 좀 더 있음
// <음료 재료>
// 0칸 따뜻함 - 따뜻함 없음
// 1~3칸 따뜻함 - 약간 따뜻함
// 4~5칸 따뜻함 - 따뜻함
// 6~8칸 따뜻함 - 좀 더 따뜻함



export const coffee: Ingredient = {
  name: '커피',
  isBase: true,
  baseTs: {
    warn: 3,
    cool: 0,
    sweet: 0,
    acerbity: 4,
  },
  mainTs: {
    warn: 2,
    cool: 0,
    sweet: 0,
    acerbity: 3,
  },
  subTs: {
    warn: 1,
    cool: 0,
    sweet: 0,
    acerbity: 2,
  }
};

export const bluetea: Ingredient = {
  name: '블루피',
  isBase: true,
  baseTs: {
    warn: 2,
    cool: 2,
    sweet: 1,
    acerbity: 3,
  },
  mainTs: {
    warn: 1,
    cool: 1,
    sweet: 0,
    acerbity: 2,
  },
  subTs: {
    warn: 0,
    cool: 0,
    sweet: 0,
    acerbity: 1,
  }
};

export const hibiscus: Ingredient = {
  name: '히비스커스',
  isBase: true,
  baseTs: {
    warn: 0,
    cool: 3,
    sweet: 2,
    acerbity: 2,
  },
  mainTs: {
    warn: 0,
    cool: 2,
    sweet: 1,
    acerbity: 1,
  },
  subTs: {
    warn: 0,
    cool: 1,
    sweet: 0,
    acerbity: 0,
  }
};

export const green: Ingredient = {
  name: '녹차',
  isBase: true,
  baseTs: {
    warn: 2,
    cool: 0,
    sweet: 0,
    acerbity: 4,
  },
  mainTs: {
    warn: 1,
    cool: 0,
    sweet: 0,
    acerbity: 3,
  },
  subTs: {
    warn: 0,
    cool: 0,
    sweet: 0,
    acerbity: 2,
  }
}

export const tea: Ingredient = {
  name: '차',
  isBase: true,
  baseTs: {
    warn: 4,
    cool: 2,
    sweet: 0,
    acerbity: 3,
  },
  mainTs: {
    warn: 3,
    cool: 1,
    sweet: 0,
    acerbity: 2,
  },
  subTs: {
    warn: 2,
    cool: 0,
    sweet: 0,
    acerbity: 1,
  }
}

export const cocoa: Ingredient = {
  name: '코코아',
  isBase: true,
  baseTs: {
    warn: 0,
    cool: 2,
    sweet: 2,
    acerbity: 4,
  },
  mainTs: {
    warn: 0,
    cool: 1,
    sweet: 1,
    acerbity: 3,
  },
  subTs: {
    warn: 0,
    cool: 0,
    sweet: 0,
    acerbity: 2,
  }
};

export const milk: Ingredient = {
  name: '우유',
  isBase: true,
  baseTs: {
    warn: 2,
    cool: 3,
    sweet: 1,
    acerbity: 0,
  },
  mainTs: {
    warn: 1,
    cool: 2,
    sweet: 0,
    acerbity: 0,
  },
  subTs: {
    warn: 0,
    cool: 1,
    sweet: 0,
    acerbity: 0,
  }
};

export const ginger: Ingredient = {
  name: '생강',
  isBase: false,
  mainTs: {
    warn: 3,
    cool: 0,
    sweet: 0,
    acerbity: 3,
  },
  subTs: {
    warn: 2,
    cool: 0,
    sweet: 0,
    acerbity: 1,
  }
};

export const mint: Ingredient = {
  name: '민트',
  isBase: false,
  mainTs: {
    warn: 0,
    cool: 4,
    sweet: 1,
    acerbity: 2,
  },
  subTs: {
    warn: 0,
    cool: 3,
    sweet: 0,
    acerbity: 0,
  }
};

export const lemon: Ingredient = {
  name: '레몬',
  isBase: false,
  mainTs: {
    warn: 0,
    cool: 2,
    sweet: 0,
    acerbity: 3,
  },
  subTs: {
    warn: 0,
    cool: 1,
    sweet: 0,
    acerbity: 2,
  }
};

export const honey: Ingredient = {
  name: '꿀',
  isBase: false,
  mainTs: {
    warn: 0,
    cool: 0,
    sweet: 4,
    acerbity: 0,
  },
  subTs: {
    warn: 0,
    cool: 0,
    sweet: 3,
    acerbity: 0,
  }
};

export const cinnamon: Ingredient = {
  name: '계피',
  isBase: false,
  mainTs: {
    warn: 3,
    cool: 0,
    sweet: 3,
    acerbity: 0,
  },
  subTs: {
    warn: 1,
    cool: 0,
    sweet: 2,
    acerbity: 0,
  }
};
