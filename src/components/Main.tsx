import s from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'



export const Main = () => {
  return(
      <div className={s.main}>
          <div className={styleContainer.container}>
          <div className={s.mainTitle}>
              <span>Hi there</span>
              <h1>I am Vladyslav Gershman</h1>
              <p>Fronted Developer</p>
          </div>
          <div className={s.mainPhoto}>

          </div>
          </div>
      </div>
  )
}