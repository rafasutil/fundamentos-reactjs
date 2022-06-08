import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <h2>MAIN</h2>
        </main>
      </div>
    </div>
  )
}
