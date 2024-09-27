// pages/_app.js
import '../styles/globals.css';
import { DateProvider } from '../context/DateContext';

function MyApp({ Component, pageProps }) {
    return (
        <DateProvider>
            <Component {...pageProps} />
        </DateProvider>
    );
}

export default MyApp;
