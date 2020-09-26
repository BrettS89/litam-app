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
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';

import HeaderBack from '../shared/components/HeaderBack';
import Logo from '../shared/components/Logo';
import NextButton from '../shared/components/NextButton';

import Auth from '../components/Auth';
import Landing from '../components/Landing';
import Login from '../components/Login';
import MyAlarms from '../components/MyAlarms';
import AddAlarm from '../components/AddAlarm';
import PickSong from '../components/PickSong';
import Alarms from '../components/Alarms';
import WriteMessage from '../components/WriteMessage';
import Messages from '../components/Messages';

const mainNav = createBottomTabNavigator({
  Alarms: {
    screen: createStackNavigator({
      Alarms: {
        screen: Alarms,
        navigationOptions: {
          headerShown: false,
          headerLeft: () => <Logo width={75} moreStyles={{ marginLeft: 15 }} />,
          headerRight: () => null,
          headerTitle: () => null,
          headerStyle: {
            shadowOffset: { height: 0, width: 0 },
            backgroundColor: colors.black,
          }
        },
      },
      PickSong: {
        screen: PickSong,
        navigationOptions: {
          headerShown: true,
          headerLeft: () => <HeaderBack screen="Alarms" />,
          headerRight: () => <NextButton screen="WriteMessage" />,
          headerTitle: () => <View><Text style={{ fontSize: 22, fontWeight: '900', color: colors.white }}>Pick a song</Text></View>,
          headerStyle: {
            shadowOffset: { height: 0, width: 0 },
            backgroundColor: colors.black,
          }
        },
      },
      WriteMessage: {
        screen: WriteMessage,
        navigationOptions: {
          headerShown: true,
          headerLeft: () => <HeaderBack screen="PickSong" />,
          headerRight: () => null,
          headerTitle: () => <View><Text style={{ fontSize: 22, fontWeight: '900', color: colors.white }}>Finish</Text></View>,
          headerStyle: {
            shadowOffset: { height: 0, width: 0 },
            backgroundColor: colors.black,
          }
        },
      },
    }),
    navigationOptions: {
      title: 'Discover',
      activeTintColor: colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search" size={22} color={tintColor}/>
      )
    }
  },
  MyAlarms: {
    screen: createStackNavigator({
      MyAlarms: {
        screen: MyAlarms,
        navigationOptions: {
          headerShown: false,
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
          headerShown: true,
          headerLeft: () => <HeaderBack screen="MyAlarms" />,
          headerRight: () => null,
          headerTitle: () => <View><Text style={{ fontSize: 22, fontWeight: '900', color: colors.white }}>Add Alarm</Text></View>,
          headerStyle: {
            shadowOffset: { height: 0, width: 0 },
            backgroundColor: colors.black,
          }
        },
      },
      PickSong2: {
        screen: PickSong,
        navigationOptions: {
          headerShown: true,
          headerLeft: () => <HeaderBack screen="AddAlarm" />,
          headerRight: () => <NextButton screen={"AddAlarm"} />,
          headerTitle: () => <View><Text style={{ fontSize: 22, fontWeight: '900', color: colors.white }}>Pick a song</Text></View>,
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
        <Alarm name="alarm-multiple" size={28} color={tintColor}/>
      )
    }
  },
  Messages: {
    screen: createStackNavigator({
      Messages: {
        screen: Messages,
        navigationOptions: {
          headerShown: false,
          headerLeft: () => <Logo width={75} moreStyles={{ marginLeft: 15 }} />,
          headerRight: () => null,
          headerTitle: () => null,
          headerStyle: {
            shadowOffset: { height: 0, width: 0 },
            backgroundColor: colors.black,
          }
        },
      },
    }),
    navigationOptions: {
      title: 'Message history',
      activeTintColor: colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="comment-dots" size={26} color={tintColor}/>
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

const noBottomNav = createBottomTabNavigator({
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
      title: 'Login',
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

const authNav = createBottomTabNavigator({
  Auth: {
    screen: Auth,
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
  NoBottomNav: noBottomNav,
  Main: mainNav,
}, {
  initialRouteName: 'AuthNav',
});

export default createAppContainer(rootNavigator);
