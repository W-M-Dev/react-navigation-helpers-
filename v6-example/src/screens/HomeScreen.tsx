import React, {useEffect} from "react"
import { View, Text, Button, StyleProp, ViewStyle } from "react-native";
import * as NavigationService from "react-navigation-helpers";
/**
 * ? Local Imports
 */
import styles from "./HomeScreen.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IHomeScreenProps {
  style?: CustomStyleProp;
}

const HomeScreen: React.FC<IHomeScreenProps> = ({ style }) => {

    useEffect(() => {
        return NavigationService.addNavigationListener("transitionEnd", () => {
            // stack navigation transition ended
            // https://reactnavigation.org/docs/stack-navigator#events
        })
    }, [])

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => {
          NavigationService.navigate("Settings");
        }}
      />
    </View>
  );
};

export default HomeScreen;
