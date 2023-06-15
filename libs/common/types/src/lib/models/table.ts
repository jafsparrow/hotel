export interface Table {
  id: number;
  tableNumber?: number;
  capacity?: number;
  password?: number;
  isOccupied?: boolean;
  tableSectionId?: string;
  customers?: Customer[];
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
