import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'


interface ButtonProps {
    label:string,
    disabled?:boolean,
    onClick:()=>void
}
function Button({label, disabled, onClick}:ButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onClick} disabled={disabled}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
export default Button