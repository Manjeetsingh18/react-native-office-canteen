/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from "react";
import { StatusBar, Platform } from "react-native";
import { SwitchNavigator, StackNavigator, TabNavigator } from "react-navigation";
import { Home, Profile, Transactions, History, Payment } from './src/containers'
import { HomeTab } from './src';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator onNavigationStateChange={() => undefined} />
    );
  }
}

const StackNavigatorOptions = {
  headerMode: "none",
  cardStyle: {
    backgroundColor: "white"
  }
};


const ExploreNavigator = StackNavigator({
  Home: { screen: Home },
  Payment: { screen: Payment }
}, StackNavigatorOptions);

const ProfileNavigator = StackNavigator({
  Profile: { screen: Profile }
}, StackNavigatorOptions);

const TransactionNavigator = StackNavigator({
  Transactions: { screen: Transactions },
  Payment: { screen: Payment },
  History: { screen: History }
}, StackNavigatorOptions);



const HomeTabs = TabNavigator({
  Home: { screen: ExploreNavigator },
  Transactions: { screen: TransactionNavigator },
  Profile: { screen: ProfileNavigator }
}, {
    animationEnabled: true,
    tabBarComponent: HomeTab,
    tabBarPosition: "bottom",
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'blue',
      },
    }
  });

const HomeNavigator = SwitchNavigator({
  Walkthrough: { screen: HomeTabs }
}, StackNavigatorOptions);


const AppNavigator = SwitchNavigator({
  Home: { screen: HomeNavigator }
}, StackNavigatorOptions);

export { AppNavigator };