export interface RuleInterface {
  readonly replacementString: string;
  numberMatchesRule(number: number): boolean | TypeError;
}
