import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50"/>
          <div className={styles.authorInfo}>
            <strong>Mary Beth</strong>
            <span>Software Engineer</span>
          </div>
        </div>

        <time title='11 de Maio às 08:13h' dateTime='2022-06-08 12:35:50'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id est quas numquam quasi tenetur neque, explicabo earum velit tempore laboriosam fugit molestias ipsum, natus culpa vel impedit obcaecati pariatur officiis.</p>
        <p><a href='#'>mary.beth/pipefy</a></p>
        <p>
          <a href='#'>#novoprojeto</a>{' '}
          <a href='#'>#nlw</a>{' '}
          <a href='#'>#rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>
          Deixe seu feedback
        </strong>
          
        <textarea 
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  )
}