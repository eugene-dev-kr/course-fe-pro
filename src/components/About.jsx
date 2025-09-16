import myPhoto from '../assets/my_profile_photo.jpg';

function About() {
    return(
        <section id="about" className="min-vh-100 py-5 mt-5">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-md-4 text-center">
                    <img src={myPhoto} className="img-fluid rounded" alt="Profile" />
                </div>
                <div className="col-md-8">
                    <h2>About Me</h2>
                    <p>Hello! I'm a beginner front-end developer learning Bootstrap and web development. I love creating responsive websites and improving my coding skills.</p>
                </div>
                </div>
            </div>
        </section>
    )
}

export default About;