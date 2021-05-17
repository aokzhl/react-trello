import React from "react";
import { Column } from "./components/Column";
import { AppContainer } from "./components/styles";
import { useAppState } from "./contexts/AppStateContext";
import { AddNewItem } from "./components/AddNewItem";
import { CustomDragLayer } from "./components/CustomDragLayer";

export const App = () => {
  const { state, dispatch } = useAppState();

  return (
    <AppContainer>
      <CustomDragLayer />
      {state.lists.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
      />
    </AppContainer>
  );
};
