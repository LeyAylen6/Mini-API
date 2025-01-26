export interface User {
    id?: number
    name: string
    email: string
    age: number | undefined
}

export interface CardProps {
    user: User;
}