import React from "react";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import "react-native-gesture-handler";
import Navigator from "./routes/navigator";

Amplify.configure(config);
export default class App extends React.Component {
  render() {
    return <Navigator />;
  }
}
