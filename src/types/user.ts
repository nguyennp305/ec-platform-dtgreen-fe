export interface User {
  id: string;
  username?: string;
  fullname?: string;
  email?: string;
  password?: string;
  role?: string;
  gender?: string;
  address?: string;
  phone_number?: string;
  avatar?: string;
  created_at?: string;
  updated_at?: string;
  created_by?: string;
  updated_by?: string;

  [key: string]: unknown;
}
