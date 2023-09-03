import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Image } from "react-native";

//navigations
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.middle}>
s
          <View style={styles.container}>
            <Text style={styles.middleText}>
              An all purpose app
            </Text>
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate("Details", { productId: "800" })}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.middleText}>
              An all purpose app
            </Text>
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate("Details", { productId: "800" })}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.middleText}>
              An all purpose app
            </Text>
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate("Details", { productId: "800" })}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.middleText}>
              An all purpose app
            </Text>
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate("Details", { productId: "800" })}
            />
          </View>
        </View>
      </ScrollView>
      {/* Bottom Section */}
      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
          <Text style={styles.bottomText}>Contact us</Text>
        </View>
        <View style={styles.bottomRight}>
          <Text style={styles.bottomText}>My profile</Text>
        </View>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f0f0f0', // Greyish white background color
    padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  top: {
    alignItems: 'center',
    marginTop: 20,
  },
  topText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black', // Text color set to black
  },
  middle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey'
  },
  middleText: {
    fontSize: 24,
    color: 'black', // Text color set to black
    marginTop: 100,
    marginBottom: 100,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  bottomLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  bottomRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  bottomText: {
    fontSize: 16,
    color: 'black', // Text color set to black
  },
  sosBox: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  sosText: {
    color: 'black', // Text color set to black
    fontWeight: 'bold',
  },
})



export default Home