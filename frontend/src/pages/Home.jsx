import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

function Home() {
  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default Home;