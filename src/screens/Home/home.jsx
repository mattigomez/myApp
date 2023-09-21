import { FlatList, View , SafeAreaView} from "react-native";
import React from "react";
import { Header } from "../../components";
import { CategoryItem } from "./components";
import dataCategories from "../../data/dataCategories";
import styles from './home.style'

 
const Home = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        <Header title={'Categories'} />
        <View style={styles.listContainer}>
          <FlatList
            data={dataCategories}
            keyExtractor={category => category.title}
            renderItem={({ item }) => (
              <CategoryItem category={item.title} navigation={navigation} />
            )}
          />
        </View>
      </SafeAreaView>
    )
  }

export default Home