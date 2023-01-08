import s from './Header.module.css'
import {Nav} from "./Nav";


export const Header = () => {
  return(
      <div>
      <div className={s.header}>
          <Nav />
      </div>
      </div>
  )
}