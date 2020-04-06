export interface LoginScreenProps {
  raCPf?: string;
  type?: string;
  token?: string;
  functions?: {
    loginUser?: () => void;
  };
}
