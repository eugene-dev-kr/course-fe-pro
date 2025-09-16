function Contact() {
    return(
        <section id="contact" className="py-5 bg-light min-vh-100 py-5 mt-5">
            <div className="container">
                <h2 className="mb-4">Contact</h2>
                <form>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Your Email" />
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" rows="4" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>

    )
}

export default Contact;