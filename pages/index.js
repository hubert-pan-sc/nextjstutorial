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
                <PostLink id="hello-next" title="Hello Next.js"></PostLink>
                <PostLink id="blog-entry-2" title="Blog Entry 2"></PostLink>
            </ul>
        </MyLayout>
    </div>
)

const PostLink = (props) => {
    return (
        <li>
            <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
                <a>{props.title}</a>
            </Link>
        </li>
    );
};

export default Index