import React from "react";
import { TextInput, View } from "react-native";

const Login = ({ label, ...inputProps}) => (
    <View style={styles.container}>
        <Text styles={styles.label}>{label}</Text>
        <TextInput
        styles={styles.input}
        {...inputProps}
        />
    </View>
)

export default Login