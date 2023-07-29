
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from '../redux/store';
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}
    
      
    <Toaster/>
    </Provider>
  );  
}
