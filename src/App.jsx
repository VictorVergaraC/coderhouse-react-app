import React from 'react';
import styles from './app.module.css'
import stylesMain from './main.module.css'

const App = () => {

  const name = 'Victor'
  const edad = 12

  const person = {
    name : 'Cata',
    age  : 24
  }

  return (
    <div className='container'>
      <h1>Nombre: { name }</h1>
      <h2 className={styles.textBlue}>Estilos con css module</h2>
      <h2 className={stylesMain.textBlue}>Estilos con css module</h2>
      <h2 className={`${styles.textGreen} ${styles.fontSize}`}>Estilos con dos clases css module</h2>
      <h2 className='mt-5 text-primary border border-5 p-3 w-50'>Estilos con bootstrap</h2>

      {
        edad >= 18
        ? (<p>Eres mayor de edad</p>)
        : (<p>Eres menor de edad</p>)
      }

      {
        name === "Victor"
        ? <h3>Holaa { name }</h3>
        : <h3>Quién eri oee</h3>
      }

      <p>Nombre: { person.name }</p>
      <p>Name: { person.age } { person.age >= 18 && (<strong>(Mayor de edad)</strong>) }</p>

    </div>
  );
}

export default App;

