function App() {
  return (
    <>
      <h1 className="text-3xl">Title</h1>
      <div className="[--variable:5rem] [--foo:1rem;--bar:2rem]">
        <div className="w-(--variable) h-(--foo) pt-(--bar)">
          Hello world this is a sentence
        </div>
      </div>
    </>
  );
}

export default App;
