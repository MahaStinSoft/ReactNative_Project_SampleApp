import React from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    StatusBar,
    Platform,
    TouchableOpacity,
} from 'react-native';

import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient';

import { AuthContext } from "../components/Context";

//import HomeScreen from "./HomeScreen";

const SignUpScreen = ({ navigation }) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confrim_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if (val.length >= 40) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfrimPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfrimSecureTextEntry = () => {
        setData({
            ...data,
            confrim_secureTextEntry: !data.confrim_secureTextEntry
        });
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Animatable.Text
                    animation="flash" style={styles.text_header}>Register Now!</Animatable.Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    {/*<FontAwesome 
                        name= "user-o"
                        color= "#05375a"
                        size={20}
                        />*/}
                    <TextInput
                        placeholder=" Your Email"
                        style={styles.TextInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                        {/*<Animation.View
                        animation="bounceIn"
                        >
                        <Feather
                        name="check-circle"
                        color="green"
                        size={2}
                        />
                        </Animation.View>*/}
                        : null}
                </View>
                <Text style={[styles.text_footer,
                { marginTop: 35 }]}>Password</Text>
                <View style={styles.action}>
                    {/*<FontAwesome 
                        name= "lock"
                        color= "#05375a"
                        size={20}
                        />*/}
                    <TextInput
                        placeholder=" Your Password"
                        style={styles.TextInput}
                        secureTextEntry={data.secureTextEntry ? true : false}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {/*{data.check_textInputChange ?
                      <Feather
                        name="eye-off"
                        color="grey"
                        size={2}
                        />
                        :
                        <Feather
                        name="eye"
                        color: "grey"
                        size{20}
                        />
                    }*/}
                    </TouchableOpacity>
                </View>

                <Text style={[styles.text_footer,
                { marginTop: 35 }]}>Confrim Password</Text>
                <View style={styles.action}>
                    {/*<FontAwesome 
                        name= "lock"
                        color= "#05375a"
                        size={20}
                        />*/}
                    <TextInput
                        placeholder="Confrim Your Password"
                        style={styles.TextInput}
                        secureTextEntry={data.confrim_secureTextEntry ? true : false}
                        autoCapitalize="none"
                        onChangeText={(val) => handleConfrimPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateConfrimSecureTextEntry}
                    >
                        {/*{data.secureTextEntry ? 
                      <Feather
                        name="eye-off"
                        color="grey"
                        size={20}
                        />
                        :
                        <Feather
                        name="eye"
                        color: "grey"
                        size{20}
                        />
                    }*/}
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                       // onPress={() => { }}
                       onPress={() => navigation.navigate('HomeScreen')}
                    >
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Sign Up</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#009387'
                        }]}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,

    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
