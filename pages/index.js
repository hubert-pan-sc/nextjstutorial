// This is the Link API
import Link from 'next/link';
import fetch from "isomorphic-unfetch";
import MyLayout from "../components/MyLayout";

const Index = (props) => (
    <MyLayout>
        <h1>Batman TV shows</h1>
        {(!!props.shows) && (
            <ul>
                {props.shows.map((show) => {
                    <li key={show.id}>
                        <PostLink id={show.id} title={show.name}></PostLink>
                    </li>
                })}
            </ul>
        )}

        <p>Hello World!</p>

    </MyLayout>
)

Index.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    return { shows: data }
}

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