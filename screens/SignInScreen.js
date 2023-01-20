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
    Alert
} from 'react-native';

import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient';

import AsyncStorage from '@react-native-async-storage/async-storage';
import users from "./users";
import { AuthContext } from "../components/Context";

const SignInScreen = ({ navigation }) => {


    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if (val.trim().length >= 30) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }

    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false  
            });
        }
    }

    const loginHandle = (userName, password) => {

        const foundUser = users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }


return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content" />
        <View style={styles.header}>
            <Animatable.Text
                animation="flash"
                style={styles.text_header}>Welcome!</Animatable.Text>
        </View>
        <Animatable.View
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
                {/*<FontAwesome 
                        name= "user-o"
                        color= "#05375a"
                        size={20}
                        />*/}
                <TextInput
                    placeholder=" Your name"
                    style={styles.TextInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
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
            {data.isValidUser ? null :
                <Animatable.View animation="fadeInLeft" >
                    <Text style={styles.errorMsg}>Username must be 4 character long.</Text>
                </Animatable.View>}


            <Text style={[styles.text_footer,
            { marginTop: 35 }]}>Password</Text>
            <View style={styles.action}>
                {/*<Feather
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
                    {/*{data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    } */}
                </TouchableOpacity>
            </View>

            {data.isValidPassword ? null :
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>Password must be 8 character long.</Text>
                </Animatable.View>}

            <TouchableOpacity>
                <Text style={{ color: '#009387', marginTop: 15 }}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {loginHandle( data.username, data.password )}}
                   //onPress = {() => navigation.navigate('HomeScreen')}
                >
                    <LinearGradient
                        colors={['#08d4c4', '#01ab9d']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff'
                        }]}>Sign In</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
    </View>
);
};

export default SignInScreen;

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
