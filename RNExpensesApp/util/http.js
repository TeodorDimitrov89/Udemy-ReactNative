import axios from "axios";

const BASE_URL =
  "https://expense-tracker-app-74bc3-default-rtdb.firebaseio.com";

export const storeExpense = async (expenseData) => {
  const response = await axios.post(`${BASE_URL}/expenses.json`, expenseData);
  const id = response.data.name;
  return id;
};

export const fetchExpenses = async () => {
  const response = await axios.get(`${BASE_URL}/expenses.json`);
  const items = response.data;
  const expenses = [];
  for (const key in items) {
    const expenseObj = {
      id: key,
      amount: items[key].amount,
      date: new Date(items[key].date),
      description: items[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
};

export const updateExpense = (id, expenseData) => {
  return axios.put(`${BASE_URL}/expenses/${id}.json`, expenseData);
};

export const deleteExpense = (id) => {
  return axios.delete(`${BASE_URL}/expenses/${id}.json`);
};
