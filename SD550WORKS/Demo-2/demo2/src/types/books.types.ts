export interface AuthorTypes {
  id: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  address: string;
}

export interface BookTypes {
  id: string;
  title: string;
  genre: string;
  isbn: string;
  format: string;
  summary: string;
  authors?: string[];
}
