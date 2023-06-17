export interface Tax {
  name: string;
  value: number;
  isPercentage: boolean;
  printName: string;
}

export interface AppliedTaxInfo {
  taxName: string;
  value: number;
}
