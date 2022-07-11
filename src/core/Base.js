import Menu from "./Menu";



const Base = ({
    title="My Title",
    decription="My description",
    className="bg-dark text-white p-4",
    children
   
    }) => {
    return(
    <div>
        <Menu />
        <div className="container-fluid ">
            <div className="jumbotron bg-dark text-white text-center jbg">
                <h2 className="display-4">{title}</h2>
                <p className="lead">{decription}</p>
            </div>
            <div className={className}>{children}</div>
        </div>
        <footer className="footer bg-dark mt-auto py-3  ">
            <div className="container-fluid bg-success text-white text-center">
                <h4>If You Got Any Question Feel Free To Reach Out</h4>
                <button className="btn btn-warning btn-lg cbtn" >Contact Us</button>
                </div>
            <div className="container">
                <span className="text-muted">Copyright @ 2020 Mritunjay Virat. All Right Reserved</span>
            </div>
        </footer>
    </div>
)}
 
export default Base;