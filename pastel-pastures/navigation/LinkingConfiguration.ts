import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            }
          },
          Profile: {
            screens: {
              Profile: 'profile',
            },
          },
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },

          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          ManageGoals:{
            screens:{
              ManageGoalsScreen: 'manage',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
