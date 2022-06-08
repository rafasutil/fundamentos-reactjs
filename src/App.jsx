import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/rafasutil.png',
      name: 'Rafael Sutil',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera'},
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id est quas numquam quasi tenetur neque, explicabo earum velit tempore laboriosam fugit molestias ipsum, natus culpa vel impedit obcaecati pariatur officiis.'},
      { type: 'link', content: 'rafa.sutil/pipefy'}
    ],
    publishedAt: new Date('2022-06-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO'
    },
    content: [
      { type: 'paragraph', content: 'Olá pessoal!!!'},
      { type: 'paragraph', content: 'Nam rutrum volutpat nulla, a convallis metus volutpat ut. Duis id ex risus. Aenean pulvinar iaculis interdum. Curabitur ultrices pretium felis, sit amet blandit lectus dictum vitae. '},
      { type: 'link', content: 'diego.fernandes/rocketseat'}
    ],
    publishedAt: new Date('2022-05-12 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
