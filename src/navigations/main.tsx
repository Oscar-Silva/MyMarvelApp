import React from "react";
import Characters from "../screens/Main/Characters";
import CharacterNavigator from "./characters";
import SeriesNavigator from "./series";
import ComicsNavigator from "./comics";
import { createSideBarPin } from "./SideBarPin";

const SideBarPin = createSideBarPin();

const MainNavigator = () => {
  return (
    <SideBarPin.Navigator>
      <SideBarPin.Screen
        name={"Characters"}
        component={CharacterNavigator}
        options={{
          header: () => null,
          title: "Personagens",
        }}
      />
      <SideBarPin.Screen
        name={"Films"}
        component={SeriesNavigator}
        options={{
          header: () => null,
          title: "Filmes",
        }}
      />
      <SideBarPin.Screen
        name={"Comics"}
        component={ComicsNavigator}
        options={{
          header: () => null,
          title: "Quadrinhos",
        }}
      />
    </SideBarPin.Navigator>
  );
};
export default MainNavigator;
