function ExpenseForm() {
  return (
    <div className="form-container">
      <h2>Add Expense</h2>

      <form>
        <input type="text" placeholder="Enter title" />

        <input type="number" placeholder="Enter amount" />

        <input type="text" placeholder="Enter category" />

        <input type="date" />

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;