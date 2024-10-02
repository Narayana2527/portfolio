export default function Navbar(){
    return(
        <nav id='navbar' className="bg-transparent p-3" style={{backgroundImage: 'linear-gradient(to right,#494f19, #011210)'}}>
            <div className="flex justify-between">
                <div>
                    <a className="navbar-brand ms-5 text-2xl text-white" href="#logo">Portfolio</a>                    
                </div>
                <ul className="navbar-links flex">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
            </div>           
        </nav>
    )
}

