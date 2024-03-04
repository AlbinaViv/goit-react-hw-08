import DocumentTitle from "../components/DocumentTitle";
import css from "./Home.module.css";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

export default function Home() {
  return (
    <>
      <DocumentTitle className={css.home}>Home</DocumentTitle>

      <div style={styles.container}>
        <h1 style={styles.title}>Welcome contacts page</h1>
      </div>
    </>
  );
}
