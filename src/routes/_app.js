import { store } from '@/services/store';
import { Provider } from 'react-redux';
import studio from '@theatre/studio';
import '@theatre/core';
import Loader2 from '@/layouts/Loader2';
import useDetectScroll, { Direction } from '@smakss/react-scroll-direction';
//
import extension from '@theatre/r3f/dist/extension';

studio.extend(extension);
// studio.initialize()

export default function App({ Component, pageProps }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        console.log('Scrolling up');
      } else {
        console.log('Scrolling down');
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.onscroll = handleScroll;

    return () => {
      window.onscroll = null;
    };
  }, [prevScrollPos]);

  //
  //
  //
  return (
    <Provider store={store}>
      <Loader2>
        <Component {...pageProps} />
      </Loader2>
    </Provider>
  );
}
