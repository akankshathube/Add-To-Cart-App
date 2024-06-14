import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { ADD_TO_CART } from "./redux/constants";
import { useDispatch, useSelector } from "react-redux";

import {addToCart,removeFromCart} from "./redux/action";
import { useEffect, useState } from "react";
export default function Product(props) {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.reducer);

  const [isAdded, setIsAdded] = useState(false);

  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
  };

  const removeToCartHandler =(item)=>{
    dispatch(removeFromCart(item.name))
  }
  useEffect(() => {
   let result = cartItem.filter((element)=>{
    return element.name === item.name
   });

   if(result.length){
    setIsAdded(true)
   }else{
    setIsAdded(false)
   }
  }, [cartItem]);
  return (
    <View style={styles.container}>
      <Text style={styles.productBox}>Name: {item.name}</Text>
      <Text style={styles.productBox}>Color: {item.color}</Text>
      <Text style={styles.productBox}>Price: {item.price}</Text>
      <Image style={styles.imageBox} source={{ uri: item.Image }} />

      {isAdded ? (
        <Button
          title="Remove From Cart"
          onPress={() => removeToCartHandler(item)}
        />
      ) : (
        <Button title="Add To Cart" onPress={() => addToCartHandler(item)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 3,
    margin: 25,
    paddingBottom:10,
    backgroundColor:'#fff'
  },
  productBox: {
    fontSize: 15,
    fontWeight:'bold',
    fontStyle: "normal",
    marginBottom: 5,
  },
  imageBox: {
    width: 60,
    height: 60,
    marginBottom: 4,
  },
});
