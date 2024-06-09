import Form from "./components/form";
import Table from "./components/table";
import MyProvider from "./context/myProvider";

function App() {
  return (
    <MyProvider>
      <div className="d-flex flex-column">
        <h1 className="text-center m-2">Expense Tracker</h1>
        <>
          <Form />
          <Table />
        </>
      </div>
    </MyProvider>
  );
}

export default App;
