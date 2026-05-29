function ExpenseItem({ expense }) {
  return (
    <div className="expense-card">
      <h3>{expense.title}</h3>

      <p>Amount: ₹{expense.amount}</p>

      <p>Category: {expense.category}</p>

      <p>Date: {expense.date}</p>

      <button>Edit</button>

      <button>Delete</button>
    </div>
  );
}

export default ExpenseItem;