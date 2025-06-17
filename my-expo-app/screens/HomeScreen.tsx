import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome Home!</Text>
        <Text>You’ve successfully signed in.</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    },
    title: {
    fontSize: 24,
    marginBottom: 12,
    textAlign: 'center',
    },
});