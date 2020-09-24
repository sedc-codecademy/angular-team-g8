import { Action } from '@ngrx/store';
import { iProductState } from 'src/app/interfaces/product.interface';
import { eProductsAction, ProductsActions } from '../actions/products.actions';

export function ProductsReducer(state: iProductState, action: ProductsActions)
{
	switch(action.type)
	{
		case eProductsAction.LOAD_PRODUCTS: return {...state, loading: true, list: []};
		case eProductsAction.LOAD_PRODUCTS_SUCCESS: return {...state, loading: false, list: action.payload};
		case eProductsAction.LOAD_PRODUCTS_ERROR: return {...state, list: [], loading: false, error: action.payload};
		case eProductsAction.ADD_PRODUCT: return {...state, loading: true, list: [...state.list]};
		case eProductsAction.ADD_PRODUCT_SUCCESS: return {...state, loading: false, list: [...state.list, action.payload]};
		case eProductsAction.ADD_PRODUCT_ERROR: return {...state, loading: false, error: action.payload};
		default: return state;
	}
}