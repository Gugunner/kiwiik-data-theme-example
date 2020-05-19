import * as _ from "lodash";
export const getColorsFromTheme = obj =>
  _.map(_.keys(obj), key => ({
    [key]: obj[key]
  }));
