const Header = () => (
    <header className="header">
        <div className="header-container">
            <div className="logo-container">
                <div className="logo-icon">
                    <div className="eye-shape">
                        <div className="eye-pupil"></div>
                    </div>
                </div>
                <span className="logo-text">Meltwater</span>
            </div>

            <nav className="main-nav">
                <a href="#">Our Suite</a>
                <a href="#">By Need</a>
                <a href="#">Resources</a>
                <a href="#">Customers</a>
                <a href="#" className="active">About</a>
            </nav>

            <div className="header-actions">
                <a href="#" className="login-link">Log in</a>
                <a href="#" className="pricing-link">Pricing</a>
                <a href="#" className="btn btn-primary">REQUEST DEMO <span className="arrow">↗</span></a>
            </div>
        </div>
    </header>
);

const Hero = () => (
    <section className="hero-section">
        <div className="container hero-container">
            <div className="hero-left">
                <div className="large-logo">
                    <div className="large-logo-icon">
                        <div className="eye-shape large">
                            <div className="eye-pupil large"></div>
                        </div>
                    </div>
                    <h1 className="large-logo-text">Meltwater</h1>
                </div>
            </div>
            <div className="hero-right">
                <h4 className="section-subtitle">About us</h4>
                <h2 className="hero-title">We're Meltwater</h2>
                <p className="hero-description">
                    Since 2001 our suite of solutions across media, social, consumer and sales intelligence have made us the industry partner of choice for global brands making an impact.
                </p>
            </div>
        </div>
    </section>
);

const Guides = () => (
    <section className="guides-section">
        <div className="container text-center">
            <h2 className="section-title text-center">What guides us.</h2>
        </div>
        <div className="container guides-container">
            <div className="guides-visuals">
                <div className="shape purple-shape"></div>
                <div className="shape yellow-shape">
                    <svg className="rocket-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C12 2 5 6 5 14C5 17 4 19 4 19H20C20 19 19 17 19 14C19 6 12 2 12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M9 19V22M15 19V22M12 19V23" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="12" cy="10" r="2" fill="white"/>
                    </svg>
                </div>
                <div className="shape teal-shape"></div>
            </div>
            <div className="guides-content">
                <div className="guide-item">
                    <h3 className="guide-title teal-text">Our Vision</h3>
                    <p>We harness the world's data in real time to unlock our customer's competitive edge.</p>
                </div>
                <div className="guide-item">
                    <h3 className="guide-title teal-text">Our Mission</h3>
                    <p>We promise to always innovate, provide best-in-class service, and deliver sustainable growth through our technology and our people.</p>
                </div>
            </div>
        </div>
    </section>
);

const KnownFor = () => (
    <section className="known-for-section">
        <div className="container">
            <h2 className="section-title text-center">What we're known for</h2>
            <div className="awards-container">
                <div className="award-badge green"><span>Best Company</span><strong>CAREER GROWTH</strong><em>2024</em></div>
                <div className="award-badge blue"><span>Best Teams</span><strong>SALES</strong><em>2024</em></div>
                <div className="award-badge blue"><span>Best Teams</span><strong>HR</strong><em>2024</em></div>
                <div className="award-badge blue"><span>Best Teams</span><strong>ENGINEERING</strong><em>2024</em></div>
                <div className="award-badge blue"><span>Best Teams</span><strong>PRODUCT &amp; DESIGN</strong><em>2024</em></div>
            </div>
        </div>
    </section>
);

const History = () => (
    <section className="history-section">
        <div className="container">
            <h2 className="section-title text-center">Where we started.</h2>
            <div className="history-container">
                <div className="history-map">
                    <svg viewBox="0 0 1000 500" className="world-map">
                        <path d="M 200 150 Q 250 100 300 120 T 400 130 T 450 180 T 500 150 T 600 100 T 700 120 T 750 160 T 800 180 T 850 140 T 900 180 T 850 250 T 800 280 T 750 350 T 700 300 T 600 320 T 550 400 T 500 350 T 400 450 T 350 400 T 300 420 T 250 350 T 200 300 T 150 250 T 100 180 Z" fill="#cceeee" opacity="0.8"/>
                        <circle cx="500" cy="150" r="6" fill="#f26d21"/>
                    </svg>
                </div>
                <div className="history-content">
                    <div className="timeline">
                        <span className="year active">2001</span>
                        <div className="timeline-line"></div>
                        <span className="year">Today</span>
                    </div>
                    <p>In 2001, we were two people, a coffee machine and $15,000. Our address was Shack15, an office space that sat in a shipyard in Oslo, Norway.</p>
                    <p>As the first online media monitoring company, we realized the value of monitoring and analyzing online data. We believed that shaping the world's data into insights would open the door to endless opportunity for impact. We were right.</p>
                    <p>And just like that, our footprint grew across Scandinavia, the UK, Europe, the US and Asia-Pacific. By 2008, we had feet on the ground—and a growing customer list—on every continent.</p>
                    <div className="history-nav">
                        <button className="nav-btn prev">&larr;</button>
                        <button className="nav-btn next">&rarr;</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="stats-container container">
            <div className="stat-box teal">
                <h3 className="stat-number">27,000</h3>
                <p className="stat-desc">Customers in over 120 countries.</p>
            </div>
            <div className="stat-box orange">
                <h3 className="stat-number">2,200</h3>
                <p className="stat-desc">Employees around the world.</p>
            </div>
            <div className="stat-box purple">
                <h3 className="stat-number">50</h3>
                <p className="stat-desc">Offices across six continents.</p>
            </div>
        </div>
    </section>
);

const Values = () => (
    <section className="values-section">
        <div className="container text-center">
            <h2 className="section-title text-center">What we stand for.</h2>
        </div>
        <div className="container values-container">
            <div className="value-card cyan-card">
                <div className="value-image">
                    <img src="C:/Users/acer/.gemini/antigravity/brain/ea3ecfbd-8bcc-49f6-80fb-1bdba58c0bcc/fun_team_costumes_1773927042200.png" alt="Moro team" />
                </div>
                <div className="value-content">
                    <h3 className="value-title cyan-text">Moro ['mo(·)ro]</h3>
                    <p>The Norwegian word for "fun." We believe that in order to become truly successful, we should all enjoy what we do on a daily basis. That's why we promote a fun, collaborative working environment, for our team to feel comfortable and inspired. We strive to partner with our customers to deliver an enjoyable experience throughout their entire journey with Meltwater.</p>
                </div>
            </div>

            <div className="value-card purple-card reverse">
                <div className="value-image">
                    <img src="C:/Users/acer/.gemini/antigravity/brain/ea3ecfbd-8bcc-49f6-80fb-1bdba58c0bcc/professional_team_standing_1773927074518.png" alt="Enere team" />
                </div>
                <div className="value-content">
                    <h3 className="value-title purple-text">Enere ['e n∂r'e]</h3>
                    <p>In Norwegian, this means "number one." At Meltwater, 'average' isn't good enough. Our goal is to build a groundbreaking company, where team members push themselves to their fullest potential, to develop as professionals, and as people. Our customers should expect that we will go above and beyond to provide a world-class product and service, and that we will always put them number one.</p>
                </div>
            </div>

            <div className="value-card orange-card">
                <div className="value-image">
                    <img src="C:/Users/acer/.gemini/antigravity/brain/ea3ecfbd-8bcc-49f6-80fb-1bdba58c0bcc/diverse_women_team_1773927193213.png" alt="Respekt team" />
                </div>
                <div className="value-content">
                    <h3 className="value-title orange-text">Respekt [re'spekt]</h3>
                    <p>The Norwegian word for "respect." We believe that it matters how a company or an individual becomes successful. We actively embrace the diverse backgrounds, experiences and perspectives of our employees around the world and work to create an inclusive environment where everyone is treated with respect and humility. We ensure that our customers feel respected, valued, and appreciated during every interaction with Meltwater.</p>
                </div>
            </div>
            
            <div className="value-card yellow-card reverse">
                <div className="value-image" style={{background: '#eee', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <span style={{color: '#aaa'}}>Team Photo</span>
                </div>
                <div className="value-content">
                    <h3 className="value-title yellow-text" style={{color: '#d4b200'}}>MER [me:r]</h3>
                    <p>An acronym for Moro, Enere and Respekt, which creates the Norwegian word "more." This represents our commitment to continuous improvement and creating an environment where all employees can contribute to the success of the company and their own growth.</p>
                </div>
            </div>
        </div>
    </section>
);

const CTA = () => (
    <section className="cta-section">
        <div className="container text-center cta-container">
            <div className="floating-shape shape-blue"></div>
            <div className="floating-shape shape-pink"></div>
            <div className="floating-shape shape-yellow"></div>
            <div className="floating-shape shape-cyan"></div>
            
            <h2 className="cta-title">Want to learn more?</h2>
            <a href="#" className="btn btn-black">GET IN TOUCH</a>
        </div>
    </section>
);

const ChatWidget = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="chat-widget">
            <div className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
                <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                    {isOpen ? (
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    ) : (
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                    )}
                </svg>
            </div>
            <div className={`chat-box ${isOpen ? '' : 'hidden'}`}>
                <div className="chat-header">
                    <img src="https://i.pravatar.cc/150?img=47" alt="Nora" className="agent-avatar" />
                    <div className="agent-info">
                        <strong>Nora</strong>
                        <span>AI SDR Agent</span>
                    </div>
                </div>
                <div className="chat-body">
                    <p>Hi there! I'm Nora, an AI SDR Agent from Meltwater. What questions do you have about our services or how we can support your needs?</p>
                </div>
            </div>
        </div>
    );
};

const App = () => (
    <div>
        <Header />
        <main>
            <Hero />
            <Guides />
            <KnownFor />
            <History />
            <Values />
            <CTA />
        </main>
        <ChatWidget />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
