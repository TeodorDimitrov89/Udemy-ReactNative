import { View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 12 : 36,
    marginHorizontal: 24,
    borderRadius: 6,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 4,
  },
});
