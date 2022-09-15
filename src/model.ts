export interface Purchase {
    id: number;
    description: string;
    category: Category;
    location: string;
    name: string;
    price: number
    purchaseDate: Date;
}

export enum Category {
    TECHNOLOGY = "Technology",
    FOOTWEAR = "Footwear",
    SHOPPING = "Shopping",
    ENTERTAINMENT = "Entertainment",
    AUTOMOTIVE = "Automotive",
    APPAREL = "Apparel",
    FOOD = "Food",
    TRAVEL = "Travel"
}
