import { useEffect, useState } from "react";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout>
      <Component />
    </Layout>
  );
}
export default MyApp;
