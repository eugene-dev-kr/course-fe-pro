function Skills() {
    return(
        <section id="skills" className="bg-light min-vh-100 min-vh-100 py-5 mt-5">
            <div className="container">
                <h2 className="mb-4">Skills</h2>
                <div className="mb-3">
                    <label>HTML</label>
                    <div className="progress">
                        <div className="progress-bar bg-success" style={{width: '90%'}}>90%</div>
                    </div>
                </div>
                <div className="mb-3">
                    <label>CSS</label>
                    <div className="progress">
                        <div className="progress-bar bg-info" style={{width: '80%'}}>80%</div>
                    </div>
                </div>
                    <div className="mb-3">
                    <label>JavaScript</label>
                    <div className="progress">
                        <div className="progress-bar bg-warning" style={{width: '60%'}}>60%</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;