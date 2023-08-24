import SearchForm from "./components/SearchForm";
import Category from "./components/Category";
import ListItem from "./components/List";
import { store } from "./store";
import { Provider } from "react-redux";
import Edit from "./components/Edit";

function App() {
  return (
    <div>
      <Provider store={store}>
        <SearchForm />
        <Category />
        <ListItem />
        <Edit />
      </Provider>
    </div>
  );
}

export default App;
