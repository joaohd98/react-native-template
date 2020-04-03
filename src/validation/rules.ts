import {RulesType} from "./rules-type";

export class Rules {
  private static required = (value: string): boolean => value.trim() != "";

  static validate = (ruleType: RulesType, value: string): boolean => {
    const rules = {
      [RulesType.required]: Rules.required(value),
    };

    return rules[ruleType];
  };
}
