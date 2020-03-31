export interface LoginScreenProps {
  raCPf?: string;
  type?: string;
  functions?: {
    loginUser?: () => void;
  };
}
