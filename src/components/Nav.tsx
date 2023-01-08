import s from './Nav.module.css'
import logo from './Logo.png'


export const Nav = () => {
  return(
      <div>
      {/*<div className={s.logo}>*/}
      {/*    <a href="">*/}
      {/*        <img src={logo} alt='logo'/>*/}
      {/*    </a>*/}
      {/*</div>*/}
      <div className={s.nav}>
          <a href="">Main</a>
          <a href="">Skills</a>
          <a href="">Project</a>
          <a href="">Contacts</a>
      </div>
          </div>
  )
}