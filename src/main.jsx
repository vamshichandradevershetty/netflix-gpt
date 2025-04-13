import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { appStore}  from './utils/appStore';
/*import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './utils/appStore.jsx';
*/

createRoot(document.getElementById('root')).render(
    <Provider store={appStore}>  
   <App />
   </Provider>
  )
