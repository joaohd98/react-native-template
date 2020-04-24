import {RulesType} from "./rules-type";

export class Rules {
  private static required = (value: string): boolean => value.trim() != "";

  private static minLength = (value: string, size: number): boolean => value.length >= size;

  static validate = (ruleType: RulesType, value: string, arg: any = null): boolean => {
    const rules = {
      [RulesType.required]: Rules.required(value),
      [RulesType.minLength]: Rules.minLength(value, arg),
    };

    return rules[ruleType];
  };
}
