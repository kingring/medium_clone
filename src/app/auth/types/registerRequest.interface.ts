interface NewUser {
    username: string;
    email: string;
    password: string;
}

export interface RegisterRequestInterface {
    user: NewUser;
}
