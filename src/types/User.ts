export type User = {
    id: number
    username: string
    profile: {
        name: string
        email: string
        address: {
            street: string
            city: string
            zipCode: string
        }
    }
}