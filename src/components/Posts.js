import React from 'react'
import { 
  StyleSheet, 
  FlatList, 
  View} from 'react-native'

import { Footer, FooterTab, Text, Card, Button } from 'native-base'


// Import style
import styles from './Styles'

export default class Posts extends React.Component {
  state = {
    posts: []
  }
  componentDidMount = async () => {
    // Call all that user's posts
    await this.fetchAllPostsForOneUser()
  }
  fetchAllPostsForOneUser = async () => {
    // Fetch the posts of a specific user
    const { navigation } = this.props
    const id = await navigation.getParam('userId')
    await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id)
    .then((users) => users.json())
    .then((myJson) => {
      this.setState({posts: myJson})
    })
  }
  goToStats = () => {
    // Passing the user's id to the Stats screen
    this.props.navigation.navigate('Stats')
  }
  render() {
    let {posts} = this.state
    return (
      <View style={styles.container}>
        {/* List of posts per user */}
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item, index) => {	
						return (
              <Card key={index} style={styles.cardStyle}>
                {/* Post title */}
                <Text style={styles.postTitle}>
                  Post Title: {item.item.title}
                </Text>
                {/* Post body */}
                <Text style={styles.postBody}>
                  {item.item.body}
                </Text>                                    
                <Text style={styles.postUsername}>
                </Text>
                <View style={styles.cardFooterStyle}>                
                </View>      
              </Card>
						)
					}
					}
        />
        <Footer>
          <FooterTab>
            <Button 
              style={styles.buttonStyle}
              onPress={this.goToStats}>
              <Text style={{fontSize: 15, color: '#00ff'}}>
                View Stats
              </Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    )
  }
}


