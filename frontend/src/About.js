

const About = () => {

    return (
        <div className="about" style={{ background: '#f7f7f7'}}>
            <h1 style={{ fontWeight: 'bold' }}>About Us</h1>
            <p className="about-text" style={{ fontWeight: 'bold' }}>
                <strong>Miracles For Paws Rescue Inc.</strong> is a nonprofit, no-kill rescue dedicated to providing a second chance to dogs in need.
                We believe that every dog deserves a loving home, regardless of their past circumstances.
                Whether they have been abandoned, surrendered, or left homeless due to unforeseen circumstances,
                we are committed to ensuring they receive the care, love, and stability they deserve.
                <br/><br/>
                Our mission is to rescue, rehabilitate, and re-home dogs, primarily from Puerto Rico,
                where many stray and abandoned animals struggle to survive. Through our efforts,
                we provide them with proper medical care, nourishment, and socialization,
                preparing them for a fresh start with families who will cherish them.
                <br/><br/>
                We strive to match each dog with the perfect forever home,
                where they can experience unconditional love and a safe, happy life. At Miracles For Paws Rescue Inc.,
                we believe in second chances—not just for the dogs we save, but for the families who open their hearts to them.
                Together, we can make a difference, one rescue at a time.
            </p>


            <div className='image-grid'>
                <div>
                    <img
                        src={require('./images/pup1.jpg')}
                        alt="pup1"
                        style={{ margin: '16px', width: '300px', borderRadius: '10px' }}
                    />
                </div>
                <div>
                    <img
                        src={require('./images/pup2.jpg')}
                        alt="pup2"
                        style={{ margin: '16px', width: '300px', borderRadius: '10px' }}
                    />
                </div>
                <div>
                    <img
                        src={require('./images/pup3.jpg')}
                        alt="pup3"
                        style={{ margin: '16px', width: '300px', borderRadius: '10px' }}
                    />
                </div>
                <div>
                    <img
                        src={require('./images/pup4.jpg')}
                        alt="pup4"
                        style={{ margin: '16px', width: '300px', borderRadius: '10px' }}
                    />
                </div>
                <div>
                    <img
                        src={require('./images/pup5.jpg')}
                        alt="pup5"
                        style={{ margin: '16px', width: '300px', borderRadius: '10px' }}
                    />
                </div>
                <div>
                    <img
                        src={require('./images/pup6.jpg')}
                        alt="pup6"
                        style={{ margin: '16px', width: '300px', borderRadius: '10px' }}
                    />
                </div>
            </div>


            <div style={{ marginTop: '164px' }}>
                <h2 style={{ fontWeight: 'bold' }}>Our Team</h2>
                <p className="about-text" style={{ fontWeight: 'bold' }}>
                    Our team is comprised of dedicated volunteers who share a passion for animal welfare.
                    We work tirelessly to rescue dogs in need, providing them with the care and support they need to thrive.
                    Our volunteers come from all walks of life, but we are united by our love for animals and our commitment to making a difference.
                    Together, we are changing the lives of dogs in need, one rescue at a time.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <a href="https://form.jotform.com/241268320502143?" style={{ color: 'black', textDecoration: 'none' }}>
                        Join Our Team <br/>
                        <img
                            src={require('./images/help-wanted.jpg')}
                            alt="team"
                            style={{ margin: '16px', width: '300px', borderRadius: '10px' }}
                        />
                    </a>

                </div>
            </div>

        </div>
    )

}

export default About;
