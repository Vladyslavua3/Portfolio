import s from './Main.module.css'



export const Main = () => {
  return(
      <div className={s.main}>
          <div className={s.container}>
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