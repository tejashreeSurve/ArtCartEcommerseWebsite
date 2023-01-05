export interface LoginFormSchema {
  username: string;
  password: string;
}

export interface ForgotPasswordSchema {
  email: string;
}

export interface RegisterSchema {
  username: string;
  mobileNo: string;
  email: string;
  password: string;
  confirmPassword: string;
}
