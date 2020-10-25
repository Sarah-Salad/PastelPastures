export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  ManageGoals: undefined;
  HomeScreen: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type ManageGoalsParamList = {
  ManageGoalsScreen: undefined;
}
export type HomeScreenParamList = {
  HomeScreen: undefined;
}

export type Goal = {
  text: string;
  completed: boolean;
}

export type ToggleGoal = (selectedGoal: Goal) => void;