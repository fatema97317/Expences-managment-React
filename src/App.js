import './App.css';
import Expenses from './Expenses';
const expenses = [
  {
    id: 889,
    amount: "454$",
    date: new Date(2028, 4, 9),
    title: "car"
  },
  {
    id: 289,
    amount: "214$",
    date: new Date(2024, 8, 13),
    title: "TV"
  }, {
    id: 88,
    amount: "54$",
    date: new Date(2022, 4, 3),
    title: "van"
  }, {
    id: 909,
    amount: "458$",
    date: new Date(2021, 1, 3),
    title: "PC"
  },
]
function App() {
  return (
    <div className="App">
    <Expenses expense={expenses}/>
    </div>
  );
}

export default App;
