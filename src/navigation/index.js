import React from 'react';
import { View, Text } from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import colors from '../shared/styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HeaderBack from '../shared/components/HeaderBack';
import Logo from '../shared/components/Logo';

import Auth from '../components/Auth';
import Landing from '../components/Landing';
import Login from '../components/Login';
import MyAlarms from '../components/MyAlarms';
import AddAlarm from '../components/AddAlarm';

const mainNav = createBottomTabNavigator({
  MyAlarms: {
    screen: createStackNavigator({
      MyAlarms: {
        screen: MyAlarms,
        navigationOptions: {
          headerLeft: () => <Logo width={75} moreStyles={{ marginLeft: 15 }} />,
          headerRight: () => null,
          headerTitle: () => null,
          headerStyle: {
            shadowOffset: { height: 0, width: 0 },
            backgroundColor: colors.black,
          }
        },
      },
      AddAlarm: {
        screen: AddAlarm,
        navigationOptions: {
          headerLeft: () => <HeaderBack screen="MyAlarms" />,
          headerRight: () => null,
          headerTitle: () => <View><Text style={{ fontSize: 22, fontWeight: '900', color: colors.white }}>Add Alarm</Text></View>,
          headerStyle: {
            shadowOffset: { height: 0, width: 0 },
            backgroundColor: colors.black,
          }
        },
      },
    }),
    navigationOptions: {
      title: 'My Alarms',
      activeTintColor: colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="clock" size={22} color={tintColor}/>
      )
    }
  },
},
{
  tabBarOptions: {
    showIcon: true,
    activeTintColor: colors.white,
    style: {
      paddingVertical: 4,
      backgroundColor: colors.black,
    }
  },
});

const authNav = createBottomTabNavigator({
  Auth: {
    screen: Auth,
  },
  Landing: {
    screen: Landing,
    navigationOptions: {
      title: 'Landing',
      activeTintColor: colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="clock" size={28} color={tintColor}/>
      )
    }
  },
  Login: {
    screen: createStackNavigator({
      Login: {
        screen: Login,
        navigationOptions: {
          headerLeft: () => <HeaderBack screen={'Landing'} />,
          headerTitle: () => <View><Text style={{ fontSize: 22, fontWeight: '900', color: colors.white }}>Login</Text></View>,
          headerRight: () => null,
          headerStyle: {
            shadowOffset: { height: 0, width: 0 },
            backgroundColor: colors.black,
          }
        },
      },
    }),
    navigationOptions: {
      title: 'Landing',
      activeTintColor: colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="clock" size={28} color={tintColor}/>
      )
    }
  },
},
{
  tabBarOptions: {
    activeTintColor: colors.main,
    style: {
      display: 'none'
    }
  },
});

const rootNavigator = createSwitchNavigator({
  AuthNav: authNav,
  // NoBottomNav: noBottomNav,
  Main: mainNav,
}, {
  initialRouteName: 'AuthNav',
});

export default createAppContainer(rootNavigator);
