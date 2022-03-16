import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Date from '../../components/Date'
import { getAllPostIds, getPostData } from '../../lib/posts'

interface PostData {
    postData: {
        title: string
        date: string
        contentHtml: string
    }
}

export default function Post({ postData }: PostData) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className='headingXl'>{postData.title}</h1>
                <div className='lightText'>
                    <Date dateString={postData.date} />
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </article>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params?.id as string)
    return {
        props: {
            postData,
        },
    }
}
