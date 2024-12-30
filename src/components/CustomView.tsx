import React, { ReactNode, useContext } from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { globalColors } from '../img/Themes';

//*Por definir
interface Props{
    style?: StyleProp<ViewStyle>;
    children?: ReactNode; 
    margin?: boolean
}
export const CustomViews = ({style, children, margin = false}:Props) => {

    return (
        <View style={[
            { backgroundColor: globalColors.white},
            style
        ]}>
            {children}
        </View>
        
    )
}