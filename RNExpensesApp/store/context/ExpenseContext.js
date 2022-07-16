import { createContext, useReducer, useState } from "react";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-07-13"),
  },
  {
    id: "e2",
    description: "T-shirts",
    amount: 29.99,
    date: new Date("2022-06-07"),
  },
  {
    id: "e3",
    description: "Books",
    amount: 1359.99,
    date: new Date("2022-12-14"),
  },
  {
    id: "e4",
    description: "Laptop",
    amount: 3600,
    date: new Date("2021-12-08"),
  },
  {
    id: "e5",
    description: "A book",
    amount: 12.99,
    date: new Date("2021-07-14"),
  },

  {
    id: "e6",
    description: "Air Conditioning",
    amount: 1359.99,
    date: new Date("2022-10-07"),
  },
  {
    id: "e7",
    description: "Laptop",
    amount: 3600,
    date: new Date("2021-12-08"),
  },
  {
    id: "e8",
    description: "A book",
    amount: 12.99,
    date: new Date("2021-07-10"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];

      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;

      return updatedExpenses;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload.id);
    default:
      return state;
  }
};

export const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: { id } });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id, data: expenseData } });
  };

  const value = {
    expenses: expensesState,
    addExpense,
    updateExpense,
    deleteExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};
