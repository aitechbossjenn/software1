export interface Uniform {
  id: string;
  type: string;
  size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
  number: number;
  condition: 'New' | 'Good' | 'Fair' | 'Poor';
  status: 'Available' | 'Checked Out' | 'Damaged';
  lastCheckedOut?: Date;
  assignedTo?: string;
}

export interface Player {
  id: string;
  name: string;
  position: string;
  jerseyNumber: number;
  contact: string;
  assignedUniforms: string[];
}