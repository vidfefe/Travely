export type RegisterFormState = {
  errors: {
    username?: string[];
    email?: string[];
    password?: string[];
  };
  message: string | null;
  values?: {
    username: string;
    email: string;
    password: string;
  };
};

export type LoginFormState = {
  errors: {
    email?: string[];
    password?: string[];
  };
  message: string | null;
  values?: {
    email: string;
    password: string;
  };
};
