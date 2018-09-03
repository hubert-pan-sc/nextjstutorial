// This is the Link API
import Link from 'next/link';
import Header from "../components/Header";
import MyLayout from "../components/MyLayout";

const Index = () => (
    <div>
        <MyLayout>
            <p>Hello Next JS</p>
            <h1>Blog Entries</h1>
            <ul>
                <PostLink title="Hello Next.js"></PostLink>
                <PostLink title="Blog Entry 2"></PostLink>
            </ul>
        </MyLayout>
    </div>
)

const PostLink = (props) => {
    return (
        <li>
            <Link href={`/post?title=${props.title}`}>
                <a>{props.title}</a>
            </Link>
        </li>
    );
};

export default Index