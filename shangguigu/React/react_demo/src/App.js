import Welcome from "./page/Welcome"

function App() {
  console.log(this)
  return (
    <div className="App">
      <Welcome/>
    </div>
  );
}

export default App;
