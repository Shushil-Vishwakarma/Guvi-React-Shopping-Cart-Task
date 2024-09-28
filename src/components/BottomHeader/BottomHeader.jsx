import style from './BottomHeader.module.css';

const BottomHeader = () => {
     return (
          <div className={style.BottomHeader}>
               <p className={style.welcome_para}>Welcome to Shopping</p>
               <p className={style.buy_para}>Buy your favourite</p>
          </div>
     )
}

export default BottomHeader