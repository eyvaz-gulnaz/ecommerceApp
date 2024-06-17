export interface IProduct {
    id: number;
    title: string;
    price?: number;
    image?: string;
    isLiked?: boolean
}
export type RootStackParamList = {
    Home: undefined;
    productDetails: { item: IProduct };
};