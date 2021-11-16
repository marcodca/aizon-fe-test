import React from "react";
import { Tabs } from "./components/Tabs/Tabs";
import { Tab } from "./components/Tabs/Tab/Tab";

function App() {
  return (
    <Tabs>
      <Tab title="Tab1">Content of tab 1</Tab>
      <Tab title="Tab2">Content of tab 2</Tab>
      <Tab title="Tab3">Content of tab 3</Tab>
    </Tabs>
  );
}

export default App;
