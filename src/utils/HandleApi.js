// utils/HandleApi.js
import axios from "axios";

export const getAllToDo = async (setToDo) => {
  const response = await axios.get("http://localhost:5001/todos", {
    withCredentials: true,
  });
  setToDo(response.data);
};

export const addTodo = async (text, setText, setToDo) => {
  await axios.post(
    "http://localhost:5001/todos",
    { text },
    { withCredentials: true }
  );
  getAllToDo(setToDo);
  setText("");
};

export const updateToDo = async (id, text, setToDo, setText, setIsUpdating) => {
  await axios.put(
    `http://localhost:5001/todos/${id}`,
    { text },
    { withCredentials: true }
  );
  getAllToDo(setToDo);
  setText("");
  setIsUpdating(false);
};

export const deleteToDo = async (id, setToDo) => {
  await axios.delete(`http://localhost:5001/todos/${id}`, {
    withCredentials: true,
  });
  getAllToDo(setToDo);
};
