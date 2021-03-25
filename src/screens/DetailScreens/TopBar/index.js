import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import PropTypes from 'prop-types';
export default class TopBar extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Icon
          name="arrow-left"
          size={30}
          color={'black'}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Icon name="shopping-cart" size={30} color={'black'} />
      </View>
    );
  }
}

TopBar.propTypes = {
  navigate: PropTypes.any,
};