import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Banner from './components/banner/banner';
import Menu from './components/menu/menu';
import Footer from './components/footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu
      line1="Harley-Davidson riders on how motorcycles helped them find their purpose"
      line2="I'm the only woman in my group and at times, I also lead the group"
      line3="Riding is a family affair"
      line4="More stories of freedom"/>
    <Banner />
    <Footer />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
