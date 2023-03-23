import {useState} from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
 } from 'react-native';
 import { useRouter } from 'expo-router';

import styles from './welcome.style'
import{ icons, SIZES} from '../../../constants';

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style= {styles.container}>
        <Text style= {styles.userName}>Hello Prajwal</Text>
        <Text style= {styles.userName}>Finder your perfect job</Text>
      </View>

      <View style = {styles.searchContainer}>
        <View style = {searchWra}>

        </View>
      </View>
    </View>
  )
}

export default Welcome