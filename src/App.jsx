// import Card from './components/Card/card';
// import HookUseState from './components/HookUseState/HookUseState';
// import Layout from './components/Layout/Layout';
// import MyMap from './components/Map/MyMap';
// import Padre from './components/Padre';
// import MyPromise from './components/Promises/MyPromise';
import Count from "./components/Count/Count";

import CharacterListContainer from "./components/CharacterListContainer/CharacterListContainer";

const App = () => {

  return (
    <div className="container">
      <h1 className="m-5">Componente App</h1>
      {/* <Padre/> */}
      {/* <HookUseState/> */}
      {/* <Layout>
        <h4>Chlidren</h4>
        <Card/>
      </Layout> */}
      {/* <MyPromise/> */}
      {/* <MyMap/> */}

      <Count />


      {/* <CharacterListContainer/> */}
      {/* <CharacterDetailContainer/> */}
    </div>
  );
}

export default App;

