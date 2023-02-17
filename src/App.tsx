import { makeRemoteLoadSurveyList } from './main/factories/usecases/get-user-list' //@/main/factories/usecases

function App() {
  const user = makeRemoteLoadSurveyList()
  console.log(user)
  return (
    <div className="App">
      <h3>Hola prestadito  </h3>
    </div>
  );
}

export default App;
