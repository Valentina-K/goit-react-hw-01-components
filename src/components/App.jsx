import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from '../user.json';
import data from '../data.json';
import transaction from '../transactions.json';
import css from './App.module.css'

export const App = () => {
  return (
    <div className={css.container}      
    >
      <Profile { ...user } />
      <Statistics title="Upload stats" stats={data}/>
      <TransactionHistory items={transaction} />
    </div>
  );
};
