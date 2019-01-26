import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  TouchableOpacity } from 'react-native'

import {Icon} from 'native-base'

export default class Users extends React.Component {
  state = {
    users: [],
  }
  componentDidMount = async () => {
    // Call the list of all users
    await this.fetchAllUsers()
  }
  fetchAllUsers = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then((users) => users.json())
    .then((myJson) => {
      this.setState({users: myJson})
    })
  }
  gotTopUserPosts = (id) => {
    // Passing the user's id to the Posts screen
    this.props.navigation.navigate('Posts', {userId: id})
  }
  
  render() {
    let {users} = this.state
    return (
      <View style={styles.container}>
        <FlatList
					data={users}
          keyExtractor={(item, index) => index.toString()}
					renderItem={(item) => {	
						return (
							<View style={styles.usersListStyle}>
								<Icon
									name="ios-person"
									style={{ color: 'blue', marginRight: 12 }}
								/>
                <TouchableOpacity 
                  onPress={() => this.gotTopUserPosts(item.item.id)}>
                  <Text style={{fontSize: 19}}>
                    {item.item.username}
                  </Text>
                </TouchableOpacity>
							</View>
						)
					}
					}
				/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  usersListStyle: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row', 
  }
})


