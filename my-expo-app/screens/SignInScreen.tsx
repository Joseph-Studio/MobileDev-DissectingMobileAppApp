import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SignInScreen({ navigation }: { navigation: any }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const validateAndSubmit = () => {
    if (username.length < 5) {
    Alert.alert('Invalid Username', 'Username must be at least 5 characters long.');
    return;
    }
    const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    if (!passwordRegex.test(password)) {
    Alert.alert(
        'Invalid Password',
        'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.'
    );
    return;
    }
    Alert.alert('Success', 'You are signed in!', [
    { text: 'Go to Home', onPress: () => navigation.navigate('Home') },
    ]);
};

    return (
    <View style={styles.container}>
        <Text style={styles.label}>Username</Text>
        <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />

        <Button title="Sign In" onPress={validateAndSubmit} />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    },
    label: {
    marginTop: 12,
    marginBottom: 4,
    fontSize: 16,
    },
    input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    padding: 8,
    },
});