import React from 'react'
import { View } from 'react-native'
import Filters from '../Filters/Filters'
import Search from '@/components/molecules/Search/Search'

function ToolBar() {
  return (
    <View>
        <Search/>
        <Filters/>
    </View>
  )
}

export default ToolBar