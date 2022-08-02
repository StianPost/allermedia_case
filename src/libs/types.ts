export interface Column {
  type: string;
  width: number;
  url: string;
  title: string;
  imageUrl: string;
}

export interface Array {
  columns: Column[];
}
