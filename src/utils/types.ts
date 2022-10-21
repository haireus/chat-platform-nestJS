export enum Routes {
  AUTH = 'auth',
  USER = 'user',
}

export enum SERVICES {
  AUTH = 'AUTH_SERVICE',
  USER = 'USER_SERVICE',
}

export type CreateUserDetails = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export type ValidateUserDetails = {
  email: string;
  password: string;
};

export type FindUserParams = Partial<{
  id: number;
  email: string;
}>;
