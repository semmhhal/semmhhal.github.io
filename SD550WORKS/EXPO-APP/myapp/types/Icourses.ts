export default interface ICourse {
  id?: string | number[];
  title: string;
  faculty: string;
  code: string;
  rating: number;
  reviews: Reviews[];
}

export interface Reviews {
  name: string;
  rating: number;
  comment: string;
}
