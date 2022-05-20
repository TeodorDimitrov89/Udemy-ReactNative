import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 6,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 4,
  },
});
