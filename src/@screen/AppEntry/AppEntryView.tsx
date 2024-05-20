import Text from '@maui/Text';
import ProductContainer from '@screen/Product/ProductContainer';
import React, { useEffect } from 'react'
import { View } from 'react-native'

const AppEntryView = (props) => {

    useEffect(() => {
    }, []);
    return (
        <ProductContainer {...props} />
    )
}

AppEntryView.displayName = 'AppEntryView'
export default AppEntryView