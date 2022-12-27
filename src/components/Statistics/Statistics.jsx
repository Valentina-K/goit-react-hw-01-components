import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = ({title, stats}) => {
    return <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>
    <ul className={css.statList}>
        {stats.map(stat =>
          <li className=
              {css.item} key={stat.id} style={{
                backgroundColor: `${getRandomHexColor()}`}}>
                  
              <span className=
                {css.label}>{stat.label}</span>
              <span className=
                {css.percentage}>{stat.percentage}%</span>
          </li>)}    
    </ul>
</section>
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.protoTypes = {
  title: PropTypes.string,
  stats:PropTypes.arrayOf(),
}
/* function getCountItems(items) {
  return items.length;
} */
//flex-basis: calc((100% - 54px) / 3);
//grid-template-columns: repeat(3, 1fr);