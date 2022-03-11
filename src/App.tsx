import React, { createContext, FC } from "react";
import { Person, HairColor } from "./components/Person";

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const ContextValue: AppContextInterface = {
    name: "tanvir",
    age: 23,
    country: "bangladesh",
  };

  return (
    <div className="App">
      <Person
        name="tanvir"
        age={23}
        email="tanvir@gmail.com"
        hairColor={HairColor.Brown}
      />
    </div>
  );
};

export default App;
