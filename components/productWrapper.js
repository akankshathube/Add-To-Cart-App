import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import Header from './Header'
import Product from "./Product";
import { Provider } from "react-redux";
import store from './redux/store';



export default function ProductWrapper({navigation}) {
  const Products = [
    {
      name: "Samsung",
      price: 25000,
      color: "Black",
      Image:
        "https://th.bing.com/th/id/OIP.VlcxKV08Qp7th1tBUcClhgHaHa?w=157&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      name: "Redmi Mobile",
      price: 45000,
      color: "White",
      Image:
        "https://i5.walmartimages.com/asr/70410cd5-8293-4f5b-890b-1d0995200418_1.0839b8b77c5bbccbc50b60d354c64e19.jpeg",
    },
    {
      name: "Iphone",
      price: 135000,
      color: "Red",
      Image:
        "https://th.bing.com/th/id/OIP.m981000tTqZbyVNZGKDWqAHaOd?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <Provider store={store}>
      <ScrollView>
      <View style={styles.container}>
        <Button title="Go To UserList" onPress={()=>navigation.navigate("User")}/>
        <Header />
        {Products.map((item) =><Product item={item}/> )}
        
      </View>
    </ScrollView>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e9ecef'
  },
 
});
