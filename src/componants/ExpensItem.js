import Date from "./Date";
import "./style.css";
function ExpensItem(props) {
  console.log(props);
  return (
    <div className="expense-item ">
      <Date date={props.date}></Date>
      <div className="expense-item__description ">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
export default ExpensItem;
