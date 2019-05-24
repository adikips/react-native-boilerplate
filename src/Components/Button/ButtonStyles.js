import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#777',
    marginTop: 10
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  }
})
