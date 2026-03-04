export interface Album {
  id: number;
  title: string;
  band: string;
  genre:
    | 'rock'
    | 'pop'
    | 'hip-hop'
    | 'jazz'
    | 'classical'
    | 'electronic'
    | 'country'
    | 'reggae'
    | 'blues'
    | 'folk'
    | 'metal'
    | 'punk'
    | 'funk'
    | 'soul'
    | 'disco'
    | 'indie'
    | 'other';
  year: number;
  state: 'not listened' | 'listened';
  classification?: 1 | 2 | 3 | 4 | 5;
  cover?: string;
  notes?: string;
  dateAdded: Date;
}
