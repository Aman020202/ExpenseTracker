import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  const expenses = [
    {
      id: 1,
      title: "Pizza",
      amount: 300,
      category: "Food",
      date: "2026-05-30",
    },
    {
      id: 2,
      title: "Movie",
      amount: 500,
      category: "Entertainment",
      date: "2026-05-29",
    },
  ];

  return (
    <div className="list-container">
      <h2>All Expenses</h2>

      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
}

export default ExpenseList;