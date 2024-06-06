import { useState } from "react";
import Form from "./components/form";
import Table from "./components/table";
import exp from "./data/content.json";
import React from "react";

interface DataType {
  id: number;
  name: string;
}

const DataContext = React.createContext<DataType[]>([]);

function App() {
  const [expenses, setExpenses] = useState(exp);

  return (
    <div className="d-flex flex-column">
      <h1 className="text-center m-2">Expense Tracker</h1>
      <>
        <Form />
        <Table />
      </>
    </div>
  );
}

export default App;
