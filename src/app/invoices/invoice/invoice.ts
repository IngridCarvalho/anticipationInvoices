export interface Invoice{
    _id?: number,
    number: number,
    description: string,
    billingDate: Date,
    paymentDate: Date,
    status: string
}