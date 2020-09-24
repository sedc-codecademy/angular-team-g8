import { Action } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product.interface';

export enum eProductsAction
{
	LOAD_PRODUCTS = '[Products] Load products',
	LOAD_PRODUCTS_SUCCESS = '[Products] Products loaded successfully',
	LOAD_PRODUCTS_ERROR = '[Products] Products load failed',
	ADD_PRODUCT = '[Product] Add new product',
	ADD_PRODUCT_SUCCESS = '[Product] Add product success',
	ADD_PRODUCT_ERROR = '[Product] Add product error'
}

export class LoadProductsAction implements Action
{
	readonly type = eProductsAction.LOAD_PRODUCTS;
}

export class LoadProductsSuccessAction implements Action
{
	readonly type = eProductsAction.LOAD_PRODUCTS_SUCCESS;

	constructor(public payload:Product[]){}
}

export class LoadProductsErrorAction implements Action
{
	readonly type = eProductsAction.LOAD_PRODUCTS_ERROR;

	constructor(public payload:any){}
}

export class AddProductAction implements Action
{
	readonly type = eProductsAction.ADD_PRODUCT;

	constructor(public payload:Product){}
}

export class AddProductSuccessAction implements Action
{
	readonly type = eProductsAction.ADD_PRODUCT_SUCCESS;

	constructor(public payload:Product){}
}

export class AddProductErrorActions implements Action
{
	readonly type = eProductsAction.ADD_PRODUCT_ERROR;

	constructor(public payload: any){}
}

export type ProductsActions = LoadProductsAction | 
	LoadProductsSuccessAction | 
	LoadProductsErrorAction | 
	AddProductAction |
	AddProductErrorActions |
	AddProductSuccessAction