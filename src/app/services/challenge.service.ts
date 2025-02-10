import {Injectable} from '@angular/core';
import {Recipe, recipes} from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  calcRecipes: Recipe[] = [];

  fixTsLv(val: number) {
    if (val <= 0) return 0;
    if (val <= 3) return 3;
    if (val <= 5) return 5;
    return 8;
  }

  init() {
    if (this.calcRecipes.length == 0) {
      this.calcRecipes = recipes.map((r) => {
        const r2: Recipe = {...r};

        const warn = this.fixTsLv(r2.base.baseTs!.warn + r2.main.mainTs.warn + r2.sub.subTs.warn);
        const cool = this.fixTsLv(r2.base.baseTs!.cool + r2.main.mainTs.cool + r2.sub.subTs.cool);
        const sweet = this.fixTsLv(r2.base.baseTs!.sweet + r2.main.mainTs.sweet + r2.sub.subTs.sweet);
        const acerbity = this.fixTsLv(r2.base.baseTs!.acerbity + r2.main.mainTs.acerbity + r2.sub.subTs.acerbity);

        if (r2.warn != undefined) {
          if (r2.warn != warn) {
            console.log("warn", r2.name, r2.warn, warn);
          }

          if (r2.cool != cool) {
            console.log("cool", r2.name, r2.cool, cool);
          }

          if (r2.sweet != sweet) {
            console.log("sweet", r2.name, r2.sweet, sweet);
          }

          if (r2.acerbity != acerbity) {
            console.log("acerbity", r2.name, r2.acerbity, acerbity);
          }
        }

        r2.warn = warn;
        r2.cool = cool;
        r2.sweet = sweet;
        r2.acerbity = acerbity;


        return r2;
      });
    }
  }
}
