import { makeRemoteLoadSurveyList } from './main/factories/usecases/get-user-list' //@/main/factories/usecases

function App() {
  const user = makeRemoteLoadSurveyList()
  user.loadAll().then(item => {
    console.log(item)
  })
  return (
    <div className="App">
      <h3>Hola prestadito  </h3>
      <h1>KEVIN REVISA EL LOG :v</h1>
    </div>
  );
}

export default App;
