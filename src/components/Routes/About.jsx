import '../css.components/About.css'

function About() {
    return (
        <div className="about">
            <h1 className='titleAbout'>✨ About Our App</h1>
            <h2>Welcome to BookVerse!</h2>
            <p>BookVerse is a simple and intuitive React-based application created to explore and enjoy a wide selection of books across various genres — from fantasy to science fiction, romance, horror, history, and more.
                This app was developed as part of a hands-on learning project to apply modern React concepts such as:
                <li>useState and useEffect hooks</li>
                <li>Component-based architecture</li>
                <li>JSON data handling</li>
                <li>Filtering and dynamic rendering</li>
                <li>Context API for theming</li>

                Whether you're a developer exploring new tech or a user who loves books, BookVerse is a playground for learning and browsing.
            </p>
            <hr />
            <h3>🚀 Features</h3>
            <li>Browse books by category</li>
            <li>Live filtering by title</li>
            <li>Custom themes using Context API</li>
            <li>Modular components for scalable design</li>
            <hr />
            <h3>👨‍💻 Developed By</h3>
            <h5>Enrico Busatto</h5>
            <p>Frontend Developer & Web Enthusiast</p>
        </div>
    )
}
export default About