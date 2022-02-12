import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.Container}>
      <h1>Next CurrencyMoney</h1>
      <button type="button">Reload</button>
    </div>
  );
};

export default Header;