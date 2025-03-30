import React, { Fragment } from 'react';
import './App.css';

export const LayoutPage = ({ header, footer }) => {
    return (
        <Fragment>
            {header}
            <main>
                Здесь располагается другой JSX
            </main>
            {footer}
        </Fragment>
    );
}

export const Header = ({ title }) => (
    <header>
        {title}
    </header>
);

const header = <Header title="Заголовок" />;

function App() {
  
    return (
      <div className="App">
        <LayoutPage 
            header={header} 
            footer={<footer>Текст как текст...</footer>} 
        />
      </div>
    );
  }
  
export default App;
