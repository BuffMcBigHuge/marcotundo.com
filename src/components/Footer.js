import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a target="_blank" href="https://acadium.com?utm_campaign=marcotundo.com" className="icon fa-globe"><span className="label">Web</span></a></li>
                        <li><a target="_blank" href="https://github.com/buffmcbighuge" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a target="_blank" href="https://instagram.com/buffmcbighuge" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a target="_blank" href="https://linkedin.com/in/bymarco/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a target="_blank" href="mailto:marco@acadium.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>Not actively looking</li>
                        <li>&copy; Marco Tundo</li><li>Built with: <a href="https://www.gatsbyjs.org">GatsbyJS</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

//  <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>

export default Footer
