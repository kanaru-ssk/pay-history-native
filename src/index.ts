import registerRootComponent from "expo/build/launch/registerRootComponent";
import { initFirebase } from "libs/initFirebase";

import App from "./App";

initFirebase();
registerRootComponent(App);
