
export interface ItemDetailsSchema {
    _id: number,
    image: string,
    name?: string,
    description: string,
    price: number,
    count: number,
    last_update: number
    category: string,
    last_updated_by: string
}
