import { StyleSheet, Text } from 'react-native';

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: '#ece9e9',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ece9e9',
    padding: 12,
  },
});
