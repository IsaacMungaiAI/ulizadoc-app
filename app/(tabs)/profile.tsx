import { styles } from '@/styles/home'
import {View, Text} from 'react-native'

export default function profile(){
    return(
       <View style={styles.container}>
        <Text style={{color: 'white', fontSize: 30}}>Profile</Text>
       </View> 
    )
}