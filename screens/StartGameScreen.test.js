import React from "react";
import StartGameScreen from "./StartGameScreen";
import { render, fireEvent } from "@testing-library/react-native";

describe("<StartGameScreen />", () => {
   it("Initial rendering", () => {
      const screen = render(<StartGameScreen />);
      expect(screen.getByText("Reset")).toBeTruthy();
      expect(screen.getByText("Confirm")).toBeTruthy();
   });
   it("alert message when added invalid value", () => {
      const screen = render(<StartGameScreen />);
      fireEvent.changeText(screen.getByTestId("userInput"), "-1");
      fireEvent.press(screen.getByText("Confirm"));
      //how to test alert appeared
   });
});
