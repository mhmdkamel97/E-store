export interface Cart {
    items: Array<CartItem>
}
export interface CartItem {
  
    id: number;
    title: string;
    price: number;
    description:string;
    category:string;
    image: string;
    quantity: number;

}



