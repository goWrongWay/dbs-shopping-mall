import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
    <Layout title="About | Next.js + TypeScript Example">
        <h1 className={'center'}>About</h1>
        <p>This is the about page</p>
        <p>
            <Link href="/">
                <a>Go h2ome </a>
            </Link>
        </p>
    </Layout>
)

export default AboutPage