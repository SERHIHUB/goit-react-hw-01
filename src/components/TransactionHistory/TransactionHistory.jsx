import css from "./TransactionHistory.module.css";
import clsx from "clsx";

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={css.table}>
        <thead>
          <tr className={css.tableHead}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => {
            return (
              <tr className={css.tableRow} key={item.id}>
                <td className={css.tableItem}>{item.type}</td>
                <td className={css.tableItem}>{item.amount}</td>
                <td className={css.tableItem}>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
