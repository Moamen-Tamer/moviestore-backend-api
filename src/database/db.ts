import type { Movie, Customer, Staff } from "../models.js";

export let movies: Movie[] = [
    {
        id: "MO1",
        title: "Inception",
        genre: "Sci-Fi",
        releaseYear: "2010",
        stockQuantity: 7,
        rentalPrice: 3.5,
        rating: 8.8
    },
    {
        id: "MO2",
        title: "The Dark Knight",
        genre: "Action",
        releaseYear: "2008",
        stockQuantity: 5,
        rentalPrice: 4,
        rating: 9
    },
    {
        id: "MO3",
        title: "Interstellar",
        genre: "Sci-Fi",
        releaseYear: "2014",
        stockQuantity: 6,
        rentalPrice: 4,
        rating: 8.6
    },
    {
        id: "MO4",
        title: "Fight Club",
        genre: "Drama",
        releaseYear: "1999",
        stockQuantity: 4,
        rentalPrice: 3,
        rating: 8.8
    },
    {
        id: "MO5",
        title: "The Matrix",
        genre: "Sci-Fi",
        releaseYear: "1999",
        stockQuantity: 8,
        rentalPrice: 3.5,
        rating: 8.7
    },
    {
        id: "MO6",
        title: "Forrest Gump",
        genre: "Drama",
        releaseYear: "1994",
        stockQuantity: 6,
        rentalPrice: 3,
        rating: 8.8
    },
    {
        id: "MO7",
        title: "Gladiator",
        genre: "Action",
        releaseYear: "2000",
        stockQuantity: 5,
        rentalPrice: 3.5,
        rating: 8.5
    },
    {
        id: "MO8",
        title: "The Godfather",
        genre: "Crime",
        releaseYear: "1972",
        stockQuantity: 3,
        rentalPrice: 4,
        rating: 9.2
    },
    {
        id: "MO9",
        title: "The Shawshank Redemption",
        genre: "Drama",
        releaseYear: "1994",
        stockQuantity: 4,
        rentalPrice: 4,
        rating: 9.3
    },
    {
        id: "MO10",
        title: "Pulp Fiction",
        genre: "Crime",
        releaseYear: "1994",
        stockQuantity: 6,
        rentalPrice: 3.5,
        rating: 8.9
    },
    {
        id: "MO11",
        title: "Avengers: Endgame",
        genre: "Action",
        releaseYear: "2019",
        stockQuantity: 9,
        rentalPrice: 4.5,
        rating: 8.4
    },
    {
        id: "MO12",
        title: "Joker",
        genre: "Drama",
        releaseYear: "2019",
        stockQuantity: 5,
        rentalPrice: 4,
        rating: 8.4
    },
    {
        id: "MO13",
        title: "Parasite",
        genre: "Thriller",
        releaseYear: "2019",
        stockQuantity: 4,
        rentalPrice: 4,
        rating: 8.6
    },
    {
        id: "MO14",
        title: "Whiplash",
        genre: "Drama",
        releaseYear: "2014",
        stockQuantity: 5,
        rentalPrice: 3.5,
        rating: 8.5
    },
    {
        id: "MO15",
        title: "The Prestige",
        genre: "Mystery",
        releaseYear: "2006",
        stockQuantity: 6,
        rentalPrice: 3.5,
        rating: 8.5
    },
    {
        id: "MO16",
        title: "Django Unchained",
        genre: "Western",
        releaseYear: "2012",
        stockQuantity: 5,
        rentalPrice: 4,
        rating: 8.4
    },
    {
        id: "MO17",
        title: "The Lion King",
        genre: "Animation",
        releaseYear: "1994",
        stockQuantity: 7,
        rentalPrice: 3,
        rating: 8.5
    },
    {
        id: "MO18",
        title: "Toy Story",
        genre: "Animation",
        releaseYear: "1995",
        stockQuantity: 8,
        rentalPrice: 3,
        rating: 8.3
    },
    {
        id: "MO19",
        title: "Mad Max: Fury Road",
        genre: "Action",
        releaseYear: "2015",
        stockQuantity: 6,
        rentalPrice: 4,
        rating: 8.1
    },
    {
        id: "MO20",
        title: "Blade Runner 2049",
        genre: "Sci-Fi",
        releaseYear: "2017",
        stockQuantity: 4,
        rentalPrice: 4,
        rating: 8
    }
];

export let customers: Customer[] = [
    {
        id: "CU100",
        name: "Ahmed Hassan",
        gender: "male",
        email: "ahmed.hassan@gmail.com",
        password: "$2b$10$CwTycUXWue0Thq9StjUM0uJ8G8pE5YhK6G8FQH0E6v0lP0N6XrF5K",
        phone: "01012345678",
        status: "active",
        rentals: [
            {
                id: "RE198",
                customerId: "CU100",
                movieId: "MO1",
                rentalDate: new Date("2026-01-10"),
                dueDate: new Date("2026-01-17"),
                returnDate: new Date("2026-01-15"),
                price: 3.5
            },
            {
                id: "RE199",
                customerId: "CU100",
                movieId: "MO5",
                rentalDate: new Date("2026-02-01"),
                dueDate: new Date("2026-02-08"),
                returnDate: new Date("2026-02-06"),
                price: 3.5
            }
        ]
    },
    {
        id: "CU101",
        name: "Mona Ali",
        gender: "female",
        email: "mona.ali@gmail.com",
        password: "$2b$10$9s3KXy8FJ8o2x1Q6M9v2se6oA4XJ2u7kF1x8q5nQ0C9u1XvB3kYbS",
        phone: "01123456789",
        status: "active",
        rentals: [
            {
                id: "RE1003",
                customerId: "CU101",
                movieId: "MO3",
                rentalDate: new Date("2026-01-20"),
                dueDate: new Date("2026-01-27"),
                returnDate: new Date("2026-01-26"),
                price: 4
            },
            {
                id: "RE77",
                customerId: "CU101",
                movieId: "MO2",
                rentalDate: new Date("2026-02-01"),
                dueDate: new Date("2026-02-08"),
                returnDate: new Date("2026-02-07"),
                price: 4
            },
            {
                id: "RE108",
                customerId: "CU101",
                movieId: "MO7",
                rentalDate: new Date("2026-02-15"),
                dueDate: new Date("2026-02-22"),
                returnDate: new Date("2026-02-21"),
                price: 3.5
            }
        ]
    },
    {
        id: "CU102",
        name: "Omar Khaled",
        gender: "male",
        email: "omar.khaled@gmail.com",
        password: "$2b$10$N9qo8uLOickgx2ZMRZo5i.eZr9rY6G3Kz5F8l7Yp8K9L0F2qXkM1y",
        phone: "01234567890",
        status: "blocked",
        rentals: [
            {
                id: "RE283",
                customerId: "CU102",
                movieId: "MO7",
                rentalDate: new Date("2026-01-05"),
                dueDate: new Date("2026-01-12"),
                returnDate: new Date("2026-01-14"),
                price: 3.5
            }
        ]
    },
    {
        id: "CU103",
        name: "Sara Mahmoud",
        gender: "female",
        email: "sara.mahmoud@gmail.com",
        password: "$2b$10$e0MYzXyjpJS2n0Z5H8Jv9uR0C7sB0k9A1N5P0Y7X6A1bZ8T6S4cD2",
        phone: "01099887766",
        status: "active",
        rentals: []
    },
    {
        id: "CU104",
        name: "Youssef Adel",
        gender: "male",
        email: "youssef.adel@gmail.com",
        password: "$2b$10$6bG5X2mF7kTz9U8p5VJ3lQZ5r9yS4M1C8J2E7W0A6P9XnH0vB",
        phone: "01155667788",
        status: "active",
        rentals: []
    },
    {
        id: "CU105",
        name: "Aya Samir",
        gender: "female",
        email: "aya.samir@gmail.com",
        password: "$2b$10$h8Y7T9C5VJX2WZP3A6L0D1N9K8M5R4S7QF6B2E0pJZxY",
        phone: "01033445566",
        status: "active",
        rentals: [
            {
                id: "RE1913",
                customerId: "CU105",
                movieId: "MO2",
                rentalDate: new Date("2026-01-15"),
                dueDate: new Date("2026-01-22"),
                returnDate: new Date("2026-01-21"),
                price: 4
            },
            {
                id: "RE204",
                customerId: "CU105",
                movieId: "MO5",
                rentalDate: new Date("2026-02-05"),
                dueDate: new Date("2026-02-12"),
                returnDate: new Date("2026-02-11"),
                price: 3.5
            }
        ]
    },
    {
        id: "CU106",
        name: "Mahmoud Fathy",
        gender: "male",
        email: "mahmoud.fathy@gmail.com",
        password: "$2b$10$P0L9K8J7H6G5F4D3S2A1ZxC0VnBqWmE5T7R8Y9U",
        phone: "01177889900",
        status: "blocked",
        rentals: [
            {
                id: "RE502",
                customerId: "CU106",
                movieId: "MO4",
                rentalDate: new Date("2026-01-01"),
                dueDate: new Date("2026-01-08"),
                returnDate: new Date("2026-01-10"),
                price: 3
            },
            {
                id: "RE1021",
                customerId: "CU106",
                movieId: "MO6",
                rentalDate: new Date("2026-01-10"),
                dueDate: new Date("2026-01-17"),
                returnDate: new Date("2026-01-19"),
                price: 3
            },
            {
                id: "RE801",
                customerId: "CU106",
                movieId: "MO12",
                rentalDate: new Date("2026-02-01"),
                dueDate: new Date("2026-02-08"),
                returnDate: new Date("2026-02-12"),
                price: 4
            }
        ]
    },
    {
        id: "CU107",
        name: "Heba Nabil",
        gender: "female",
        email: "heba.nabil@gmail.com",
        password: "$2b$10$XK9A7D6M8YH3Q0F5J4B1PZL2T8C9V6E7R",
        phone: "01222334455",
        status: "active",
        rentals: [
            {
                id: "RE117",
                customerId: "CU107",
                movieId: "MO12",
                rentalDate: new Date("2026-01-18"),
                dueDate: new Date("2026-01-25"),
                returnDate: new Date("2026-01-26"),
                price: 4
            }
        ]
    },
    {
        id: "CU108",
        name: "Kareem Mostafa",
        gender: "male",
        email: "kareem.m@gmail.com",
        password: "$2b$10$A9M8FJ2Z5P0K7R3VYH4D1S6LQBC8WXTEN",
        phone: "01088990011",
        status: "active",
        rentals: [
            {
                id: "RE333",
                customerId: "CU108",
                movieId: "MO3",
                rentalDate: new Date("2026-01-10"),
                dueDate: new Date("2026-01-17"),
                returnDate: new Date("2026-01-15"),
                price: 4
            }
        ]
    },
    {
        id: "CU109",
        name: "Reem Ashraf",
        gender: "female",
        email: "reem.ashraf@gmail.com",
        password: "$2b$10$M2R9A8P6YJZ3L0Q5C7D4X1K9T8B",
        phone: "01111223344",
        status: "active",
        rentals: []
    },
    {
        id: "CU110",
        name: "Mostafa Saeed",
        gender: "male",
        email: "mostafa.saeed@gmail.com",
        password: "$2b$10$mostafahashed",
        phone: "01299887766",
        status: "inactive",
        rentals: []
    },
    {
        id: "CU111",
        name: "Salma Tarek",
        gender: "female",
        email: "salma.tarek@gmail.com",
        password: "$2b$10$salmahashed",
        phone: "01022113344",
        status: "active",
        rentals: [
            {
                id: "RE1500",
                customerId: "CU111",
                movieId: "MO19",
                rentalDate: new Date("2026-01-22"),
                dueDate: new Date("2026-01-29"),
                returnDate: new Date("2026-01-28"),
                price: 4
            }
        ]
    },
    {
        id: "CU112",
        name: "Hany Adel",
        gender: "male",
        email: "hany.adel@gmail.com",
        password: "$2b$10$hanyhashed",
        phone: "01166554433",
        status: "active",
        rentals: []
    },
    {
        id: "CU113",
        name: "Dina Emad",
        gender: "female",
        email: "dina.emad@gmail.com",
        password: "$2b$10$dinahashed",
        phone: "01233445566",
        status: "active",
        rentals: [
            {
                id: "RE182",
                customerId: "CU113",
                movieId: "MO10",
                rentalDate: new Date("2026-02-01"),
                dueDate: new Date("2026-02-08"),
                returnDate: new Date("2026-02-07"),
                price: 3.5
            }
        ]
    },
    {
        id: "CU114",
        name: "Islam Reda",
        gender: "male",
        email: "islam.reda@gmail.com",
        password: "$2b$10$islamhashed",
        phone: "01055667788",
        status: "blocked",
        rentals: [
            {
                id: "RE1999",
                customerId: "CU114",
                movieId: "MO8",
                rentalDate: new Date("2026-01-03"),
                dueDate: new Date("2026-01-10"),
                returnDate: new Date("2026-01-13"),
                price: 4
            }
        ]
    },
    {
        id: "CU115",
        name: "Farah Mohamed",
        gender: "female",
        email: "farah.m@gmail.com",
        password: "$2b$10$farahhashed",
        phone: "01122334455",
        status: "active",
        rentals: []
    },
    {
        id: "CU116",
        name: "Tamer Younis",
        gender: "male",
        email: "tamer.y@gmail.com",
        password: "$2b$10$tamerhashed",
        phone: "01255667788",
        status: "inactive",
        rentals: []
    },
    {
        id: "CU117",
        name: "Laila Samy",
        gender: "female",
        email: "laila.samy@gmail.com",
        password: "$2b$10$lailahashed",
        phone: "01066778899",
        status: "active",
        rentals: [
            {
                id: "RE177",
                customerId: "CU117",
                movieId: "MO14",
                rentalDate: new Date("2026-01-15"),
                dueDate: new Date("2026-01-22"),
                returnDate: new Date("2026-01-21"),
                price: 3.5
            }
        ]
    },
    {
        id: "CU118",
        name: "Adel Nasser",
        gender: "male",
        email: "adel.n@gmail.com",
        password: "$2b$10$adelhashed",
        phone: "01188990011",
        status: "active",
        rentals: []
    },
    {
        id: "CU119",
        name: "Nour ElDin",
        gender: "male",
        email: "nour.eldin@gmail.com",
        password: "$2b$10$nourhashed",
        phone: "01266778899",
        status: "active",
        rentals: [
            {
                id: "RE2001",
                customerId: "CU119",
                movieId: "MO1",
                rentalDate: new Date("2026-01-05"),
                dueDate: new Date("2026-01-12"),
                returnDate: new Date("2026-01-11"),
                price: 3.5
            }
        ]
    }
];

export let staff: Staff[] = [
    {
        id: "MA101",
        name: "Hossam Tarek",
        gender: "male",
        email: "hossam.tarek@company.com",
        password: "$2b$10$YQ8x9vGjKHH5LZKZvN5zO.VKzG3JF4KdHbBjEQNQKxZTCzF5rN5eW",
        role: "manager"
    },
    {
        id: "EM102",
        name: "Mona Ahmed",
        gender: "female",
        email: "mona.ahmed@company.com",
        password: "$2b$10$vN5zO.VKzG3JF4KdHbBjEQNQKxZTCzF5rN5eWYQ8x9vGjKHH5LZKZ",
        role: "employee"
    },
    {
        id: "EM103",
        name: "Omar Khaled",
        gender: "male",
        email: "omar.khaled@company.com",
        password: "$2b$10$KHH5LZKZvN5zO.VKzG3JF4KdHbBjEQNQKxZTCzF5rN5eWYQ8x9vGj",
        role: "employee"
    },
    {
        id: "MA104",
        name: "Sara Mahmoud",
        gender: "female",
        email: "sara.mahmoud@company.com",
        password: "$2b$10$G3JF4KdHbBjEQNQKxZTCzF5rN5eWYQ8x9vGjKHH5LZKZvN5zO.VKz",
        role: "manager"
    },
    {
        id: "EM105",
        name: "Youssef Adel",
        gender: "male",
        email: "youssef.adel@company.com",
        password: "$2b$10$HbBjEQNQKxZTCzF5rN5eWYQ8x9vGjKHH5LZKZvN5zO.VKzG3JF4Kd",
        role: "employee"
    },
    {
        id: "EM106",
        name: "Aya Samir",
        gender: "female",
        email: "aya.samir@company.com",
        password: "$2b$10$NQKxZTCzF5rN5eWYQ8x9vGjKHH5LZKZvN5zO.VKzG3JF4KdHbBjEQ",
        role: "employee"
    },
    {
        id: "MA107",
        name: "Mahmoud Fathy",
        gender: "male",
        email: "mahmoud.fathy@company.com",
        password: "$2b$10$TCzF5rN5eWYQ8x9vGjKHH5LZKZvN5zO.VKzG3JF4KdHbBjEQNQKxZ",
        role: "manager"
    },
    {
        id: "EM108",
        name: "Heba Nabil",
        gender: "female",
        email: "heba.nabil@company.com",
        password: "$2b$10$F5rN5eWYQ8x9vGjKHH5LZKZvN5zO.VKzG3JF4KdHbBjEQNQKxZTCz",
        role: "employee"
    },
    {
        id: "EM109",
        name: "Kareem Mostafa",
        gender: "male",
        email: "kareem.m@company.com",
        password: "$2b$10$N5eWYQ8x9vGjKHH5LZKZvN5zO.VKzG3JF4KdHbBjEQNQKxZTCzF5r",
        role: "employee"
    },
    {
        id: "MA110",
        name: "Reem Ashraf",
        gender: "female",
        email: "reem.ashraf@company.com",
        password: "$2b$10$WYQ8x9vGjKHH5LZKZvN5zO.VKzG3JF4KdHbBjEQNQKxZTCzF5rN5e",
        role: "manager"
    },
    {
        id: "EM111",
        name: "Mostafa Saeed",
        gender: "male",
        email: "mostafa.saeed@company.com",
        password: "$2b$10$Q8x9vGjKHH5LZKZvN5zO.VKzG3JF4KdHbBjEQNQKxZTCzF5rN5eWY",
        role: "employee"
    },
    {
        id: "EM112",
        name: "Salma Tarek",
        gender: "female",
        email: "salma.tarek@company.com",
        password: "$2b$10$X9vGjKHH5LZKZvN5zO.VKzG3JF4KdHbBjEQNQKxZTCzF5rN5eWYQ8",
        role: "employee"
    },
    {
        id: "MA113",
        name: "Hany Adel",
        gender: "male",
        email: "hany.adel@company.com",
        password: "$2b$10$9vGjKHH5LZKZvN5zO.VKzG3JF4KdHbBjEQNQKxZTCzF5rN5eWYQ8x",
        role: "manager"
    },
    {
        id: "EM114",
        name: "Dina Emad",
        gender: "female",
        email: "dina.emad@company.com",
        password: "$2b$10$VGjKHH5LZKZvN5zO.VKzG3JF4KdHbBjEQNQKxZTCzF5rN5eWYQ8x9",
        role: "employee"
    },
    {
        id: "EM115",
        name: "Islam Reda",
        gender: "male",
        email: "islam.reda@company.com",
        password: "$2b$10$GjKHH5LZKZvN5zO.VKzG3JF4KdHbBjEQNQKxZTCzF5rN5eWYQ8x9v",
        role: "employee"
    },
    {
        id: "MA116",
        name: "Farah Mohamed",
        gender: "female",
        email: "farah.m@company.com",
        password: "$2b$10$JKHh5LZKZvN5zO.VKzG3JF4KdHbBjEQNQKxZTCzF5rN5eWYQ8x9vG",
        role: "manager"
    },
    {
        id: "EM117",
        name: "Tamer Younis",
        gender: "male",
        email: "tamer.y@company.com",
        password: "$2b$10$KHH5LZKZvN5zO.VKzG3JF4KdHbBjEQNQKxZTCzF5rN5eWYQ8x9vGj",
        role: "employee"
    },
    {
        id: "EM118",
        name: "Laila Samy",
        gender: "female",
        email: "laila.samy@company.com",
        password: "$2b$10$HH5LZKZvN5zO.VKzG3JF4KdHbBjEQNQKxZTCzF5rN5eWYQ8x9vGjK",
        role: "employee"
    },
    {
        id: "MA119",
        name: "Adel Nasser",
        gender: "male",
        email: "adel.n@company.com",
        password: "$2b$10$H5LZKZvN5zO.VKzG3JF4KdHbBjEQNQKxZTCzF5rN5eWYQ8x9vGjKH",
        role: "manager"
    },
    {
        id: "EM120",
        name: "Nour ElDin",
        gender: "male",
        email: "nour.eldin@company.com",
        password: "$2b$10$5LZKZvN5zO.VKzG3JF4KdHbBjEQNQKxZTCzF5rN5eWYQ8x9vGjKHH",
        role: "employee"
    }
];

export const refreshTokens = new Set();