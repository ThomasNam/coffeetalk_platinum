import {Injectable} from '@angular/core';
import {Recipe, RecipeSearch} from '../../models/type/recipe_type';
import {recipes} from '../../models/ep2/recipe_e2';

@Injectable({
  providedIn: 'root'
})
export class ChallengeEp2Service {
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

        /*if (r2.warn != undefined) {
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
        }*/

        r2.warn = warn;
        r2.cool = cool;
        r2.sweet = sweet;
        r2.acerbity = acerbity;


        return r2;
      });
    }
  }

  search(search: RecipeSearch) {
    if (search.warn === '' && search.cool === '' && search.sweet === '' && search.acerbity === '') {
      return [];
    }
    return this.calcRecipes.filter((r) => {
      if (search.warn != '') {
        if (r.warn !== +search.warn) {
          return false;
        }
      }

      if (search.cool != '') {
        if (r.cool !== +search.cool) {
          return false;
        }
      }

      if (search.sweet != '') {
        if (r.sweet !== +search.sweet) {
          return false;
        }
      }

      if (search.acerbity != '') {
        if (r.acerbity !== +search.acerbity) {
          return false;
        }
      }

      return true;
    });
  }
}
