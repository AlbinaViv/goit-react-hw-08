import DocumentTitle from "../components/DocumentTitle";

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
      <DocumentTitle>Home</DocumentTitle>

      <div>
        <h1>Welcome contacts page</h1>
      </div>
    </>
  );
}
