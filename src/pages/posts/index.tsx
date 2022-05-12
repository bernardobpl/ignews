import styles from './styles.module.scss'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getPrismicClient } from '../../services/prismic'
import Prismic from '@prismicio/client'
import Link from 'next/link'

type Post = {
  slug: string
  title: string
  synopsis: string
  updatedAt: string
}

interface PostsProps {
  posts: Post[]
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()
  
  const response  = await prismic.getByType('post', {
    fetch: ['title', 'content'],
    pageSize: 100
  })

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: post.data.title[0].text,
      synopsis: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default function Posts({ posts }: PostsProps){
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {
            posts.map(post => (
              <Link key={post.slug} href={`/posts/${post.slug}`}>
                <a>
                  <time>{post.updatedAt}</time>
                  <strong>{post.title}</strong>
                  <p>{post.synopsis}</p>
                </a>
              </Link>
            ))
          }
        </div>
      </main>
    </>
  )
}