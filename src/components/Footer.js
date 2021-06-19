import './Footer.css'

function Footer({ children }) {
    return (
        <div>
            <div className="phantom" />
            <div className="footerstyle">
                { children }
            </div>
        </div>
    )
}

export default Footer