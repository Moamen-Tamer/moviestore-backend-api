export type Movie = {
    id: string,
    title: string,
    genre: string,
    releaseYear: string,
    stockQuantity: number,
    rentalPrice: number,
    rating: number
}

export type Rental = {
    id: string,
    customerId: string,
    movieId: string,
    rentalDate: Date,
    dueDate: Date,
    returnDate?: Date,
    price: number
}

interface User {
    id: string,
    name: string,
    gender: Gender,
    email: string,
    password: string
}

export interface Customer extends User {
    phone: string,
    rentals: Rental[],
    status: Status
}

export interface Staff extends User {
    role: Role
}

export type Gender = "male" | "female";
type Role = "manager" | "employee";
type Status = "active" | "inactive" | "blocked";

export interface statusError extends Error {
    status?: number
}