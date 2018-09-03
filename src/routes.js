import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import DashboardScreen from './screen/Dashboard';
import SiteScreen from './screen/Site';
import QuestionnaireScreen from './screen/Questionnaire';

import ProfileScreen from './screen/Profile';
import SettingScreen from './screen/Setting';

const HomeRoutes = {
  Home: {
    screen: DashboardScreen
  },
  Site: {
    screen: SiteScreen
  },
  Questionnaire: {
    screen: QuestionnaireScreen
  }
};

const HomeConfig = {
  initialRouteName: 'Home'
};

const HomeStackNavigator = createStackNavigator(HomeRoutes, HomeConfig);

const TabRoutes = {
  Home: {
    screen: HomeStackNavigator
  },
  Profile: {
    screen: ProfileScreen
  },
  Settings: {
    screen: SettingScreen
  }
};

const TabOptions = {
  animationEnabled: true,
  swipeEnabled: true
};

const AppStack = createBottomTabNavigator(TabRoutes, TabOptions);

export default AppStack;
