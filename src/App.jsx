import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import appStore from "./utils/store";

function App() {
	return (
		<Provider store={appStore}>
			<Body></Body>;
		</Provider>
	);
}

export default App;
