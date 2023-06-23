import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrementCreator, AsyncIncrementCreator } from "./store/cashReducer";
import { fetchUsers } from "./store/userReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cashReducer.cash);
  const users = useSelector((state) => state.userReducer.users);

  return (
    <div className="App">
      <div>{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => dispatch(AsyncIncrementCreator())}>
          Пополнить счет
        </button>
        <button onClick={() => dispatch(decrementCreator())}>
          Снять со счета
        </button>
        <button onClick={() => dispatch(fetchUsers())}>Получить юзеров</button>
      </div>
      <div>
        {users.map((user) => (
          <div>{user.name}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
