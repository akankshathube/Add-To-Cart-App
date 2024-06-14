import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { counterEvent } from "react-native/Libraries/Performance/Systrace";
import { useSelector } from "react-redux";

const Header = () => {
  const cartData = useSelector((state) => state.reducer);

  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);
  return (
    <View style={styles.container}>
      
        <View style={styles.headerBox}>
        
          <Text style={styles.cartBox}>{cartItems}</Text>
        </View>
      

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBox: {
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    padding: 5,
    backgroundColor: "#adb5bd",
  },
  cartBox:{
    backgroundColor:'#dee2e6',
    height:50,
    width:50,
    borderRadius:15,
    justifyContent:'center', 
    alignItems: 'center', 
    textAlign:'center',
    textAlignVertical:'center',
    fontWeight:'bold',
    fontSize:25
  },
 
});


export default Header;
