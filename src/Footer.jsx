
function Footer(){
    const food1 ='Apple';
    const food2 = 'Banana'
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} Sandaru Wagachchi</p>
            <ul>
                <li>Orange</li>
                <li>{food1.toLowerCase()}</li>
                <li>{food2.toUpperCase()}</li>
            </ul>
        </footer>
    )
}
export default Footer;