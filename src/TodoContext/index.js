import { createContext } from "react";

const { Provider, Consumer } = createContext()

function TodoProvider(props) {
  return (
    <Provider value={{ 
      
     }}>
      {props.children}
    </Provider>
  )
}