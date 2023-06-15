export interface Table {
  id: number;
  name?: string;
  capacity?: number;
  password?: number;
  isOccupied?: boolean;
  tableSectionId?: string;
  customers?: Customer[];
  floor?: any;
}

export interface Floor {
  id: number;
  name: string;
  tables?: Table[];
}

export interface TableSection {
  _id: string;
  name: string;
}

export interface Customer {
  firstName: string;
  lastName: string;
  id: number;
  type?: string;
}
