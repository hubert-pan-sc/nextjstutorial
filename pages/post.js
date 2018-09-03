import { withRouter } from "next/router";
import MyLayout from '../components/MyLayout';

const Page = (props) => {
    return (
        <MyLayout>
            <Content />
        </MyLayout>
    );
};

const Content = withRouter(
    (props) => {
        return (
            <div>
                <h1>{props.router.query.title}</h1>
                <p>This is generic blog post content.</p>
            </div>
        );
    }
);

export default Page;