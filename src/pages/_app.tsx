import  { wrapper } from "../store";
function MyApp({ Component, ...pageProps }: any) {

  return (
      <Component {...pageProps} />
  );
}
export default wrapper.withRedux(MyApp);
