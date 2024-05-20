import { NavigationScreenProp } from '@core/navigation/Navigator';
import React, { useEffect } from 'react'
import FruitList from './ProductView';
import { useAppDispatch, useAppSelector } from '@core/redux/reduxUtils';
import { getProductData } from './ProductSelector';
import { getProduct } from '@core/redux/thunks/ProductThunk';

interface ProductContainerProps extends NavigationScreenProp {

}

const ProductContainer = (props: ProductContainerProps) => {
    const productData = useAppSelector(state => getProductData(state))
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProduct())
    }, [])
    console.log('[productData]', productData)
    return <FruitList />
}

ProductContainer.displayName = 'ProductContainer'
export default ProductContainer