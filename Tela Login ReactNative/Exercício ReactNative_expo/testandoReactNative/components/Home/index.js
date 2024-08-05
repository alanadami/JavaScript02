
import { View, Image, StyleSheet } from "react-native";
import logoResiduar from "../../assets/images/residuar_header.png"
import { Login } from "../Login";

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Image style={styles.logoResiduar} source={logoResiduar} />
            <Login />  
            </View>
            
        </View>

    );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#8AA626",
    },

    header: {
        width: 375,
        backgroundColor: "#F2F2F2",
        alignItems: "center",
        height: "100vh"
    },

    logoResiduar: {
        
    }
})