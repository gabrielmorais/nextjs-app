const QueryResult = ({value, children}) => {
    if (value.error) {
        return <p>ERROR: {value.error.message}</p>;
    }
    if (value.loading) {
        return <p><small>Loading...</small></p>;
    }
    if (!value.data) {
        return <p>Nothing to show...</p>;
    }
    if (value.data) {
        return children;
    }
};

export default QueryResult;
