import 'styles/globals.css';
import Header from 'components/layout/Header';
import { Provider } from 'react-redux';
import store from 'store';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
