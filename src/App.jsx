import Card from './components/Card/card';
import HookUseState from './components/HookUseState/HookUseState';
import Layout from './components/Layout/Layout';
import Padre from './components/Padre';

const App = () => {

  return (
    <>
      <h1>Componente App</h1>
      {/* <Padre/> */}
      {/* <HookUseState/> */}
      <Layout>
        <h4>Chlidren</h4>
        <Card/>
      </Layout>
    </>
  );
}

export default App;

