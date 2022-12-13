const FooterView = ({children}) => {
    return (
        <footer role="footer">
            { children ? <div>{children}</div> : (
                <p>Footer default</p>
            )}
        </footer>
    )
}

export default FooterView;
