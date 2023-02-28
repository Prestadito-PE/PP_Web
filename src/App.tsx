import { makeRemoteLoadSurveyList } from './main/factories/usecases/get-user-list' //@/main/factories/usecases
import { MainAuth } from './presentation/pages/shared/MainAuth';

function App() {
  const user = makeRemoteLoadSurveyList()
  user.loadAll().then(item => {
    console.log(item)
  })
  return (
    <>
    <MainAuth />
    </>
  );
}

export default App;
