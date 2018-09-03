import Header from "./Header";

const LAYOUT_STYLE = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = (props) => {
    return (
        <div style={LAYOUT_STYLE}>
            <Header />
            {props.children}
        </div>
    );
};

export default Layout;