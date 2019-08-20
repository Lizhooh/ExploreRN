/**
 * Created by supervons on 2019/08/12.
 * 设置页面
 * settings page
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Theme from '../../../styles/theme';

const list = [
  {
    key: 1,
    title: '修改密码',
    onPress: navigation => alert('暂无')
  },
  {
    key: 2,
    title: '系统信息',
    onPress: navigation => navigation.push('VersionInfo')
  },
  {
    key: 3,
    title: '更换皮肤',
    onPress: navigation =>
      navigation.push('VersionInfo', {
        transitionType: 'forFadeToBottomAndroid'
      })
  }
];

export default class Settings extends Component {
  static navigationOptions = {
    headerTitle: '设置'
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Theme.commonBackColor }}>
        {list.map((item, i) => (
          <ListItem
            onPress={() => item.onPress(this.props.navigation)}
            key={i}
            title={item.title}
            rightTitle={item.rightTitle}
            rightIcon={{ name: 'keyboard-arrow-right' }}
            bottomDivider={true}
          />
        ))}
      </View>
    );
  }
}