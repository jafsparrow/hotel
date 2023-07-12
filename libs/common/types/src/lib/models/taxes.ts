export interface Tax {
  name: string;
  value: number;
  isPercentage: boolean;
  printName: string;
  id?: number;
}

export interface AppliedTaxInfo {
  taxName: string;
  value: number;
}
