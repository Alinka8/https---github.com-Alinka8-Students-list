import "./App.css";
import MyButton from "./components/myButton/MyButton";
import CustomForm from "./components/customForm/CustomForm";

function App() {
  return (
    <div className="App">
      <h1>My App</h1>
      <MyButton name="Get Cash Here" type="large" />
      <MyButton name="Close" type="medium" />
      <CustomForm />
    </div>
  );
}

export default App;
