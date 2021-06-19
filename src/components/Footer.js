import './Footer.css'

function Footer({ children }) {
    return (
        <div>
            <div className="footer" />
            <div className="footer_contents">
                { children }
            </div>
        </div>
    )
}

export default Footer