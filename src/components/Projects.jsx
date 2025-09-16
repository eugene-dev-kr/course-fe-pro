import projectImg from '../assets/project.png';

function Projects() {

    return(
        <section id="projects" className="py-5 min-vh-100 py-5 mt-5">
            <div className="container">
                <h2 className="mb-4">Projects</h2>
                <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card">
                    <img src={projectImg} className="card-img-top p-3" alt="Project 1" />
                    <div className="card-body">
                        <h5 className="card-title">Project 1</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, itaque.</p>
                        <a href="#" className="btn btn-primary mt-3">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                    <img src={projectImg} className="card-img-top p-3" alt="Project 2" />
                    <div className="card-body">
                        <h5 className="card-title">Project 2</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, earum.</p>
                        <a href="#" className="btn btn-primary mt-3">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                    <img src={projectImg} className="card-img-top p-3" alt="Project 3" />
                    <div className="card-body">
                        <h5 className="card-title">Project 3</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aliquid.</p>
                        <a href="#" className="btn btn-primary mt-3">Go somewhere</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    </section>
    )
}


export default Projects;