import React from 'react';
import { Icon } from '@iconify/react';

const Header = () => {
    return (
      <section id="hero">
        <div className="hero-container" data-aos="fade-up" data-aos-delay="150">
          <h1>Plan. Launch. Grow.</h1>
          <h2>We are team of talented designers making websites with Bootstrap</h2>
          <div className="d-flex">
            <a href="#about" class="btn-get-started scrollto">Get Started</a>
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><Icon icon="bi:play-circle" /> <span>Watch Video</span></a>
          </div>
        </div>
      </section>
    )
}

export default Header
