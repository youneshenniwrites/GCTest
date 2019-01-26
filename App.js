import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import {createStackNavigator} from 'react-navigation'

// Screen imports
import Users from './src/components/Users.js'
import Stats from './src/components/Stats.js'
import Posts from './src/components/Posts.js'

// App stack: Users, Posts, Stats
export default createStackNavigator({
  Users: {
    screen: Users,
    navigationOptions: () => ({
      title: `List of all users`,
      headerBackTitle: 'Back'
    }),
  },
  Posts: {
    screen: Posts,
    navigationOptions: () => ({
      title: `List of posts`,
    }),
  },
  Stats: {
    screen: Stats,
    navigationOptions: () => ({
      title: `Some statistics`,
    }),
  },
})


