import React from 'react';
import './parallax.css';

const Parallax = () => {
  const handleScroll = () => {
    const parallaxContainer = document.querySelector('.parallax-container');
    const scrollTop = window.pageYOffset;
    if (parallaxContainer) {
      const top = parallaxContainer.offsetTop;
      const distance = scrollTop - top;
      const parallaxImage = document.querySelector('.parallax-image');
      if (parallaxImage) {
        parallaxImage.style.transform = `translateY(${distance * 0.4}px)`;
      }
    }
  };


  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div className="parallax-image" />
      <div className="parallax-text">
        <p>
          I am not going to be anyone's burden. So they are happy to have me on every trip. And many times, a woman can lead as well.
        </p>
      </div>
    </div>
  );
};

export default Parallax;
