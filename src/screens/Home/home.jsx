import { FlatList, View , SafeAreaView} from "react-native";
import React from "react";
import { Header } from "../../components";
import { CategoryItem } from "./components";
import styles from './home.style'
import { useGetCategoriesQuery } from "../../services/shopApi";

 
const Home = ({ navigation }) => {
    
  const {data, isLoading} = useGetCategoriesQuery()

    return (
      <SafeAreaView style={styles.container}>
        <Header title={'Categories'} />
        <View style={styles.listContainer}>
          {!isLoading && (
            <FlatList
              data={data}
              keyExtractor={category => category.title}
              renderItem={({ item }) => (
                <CategoryItem category={item.title} navigation={navigation} />
              )}
            />
          )}
        </View>
      </SafeAreaView>
    )
  }

export default Home