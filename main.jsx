
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

function App() {
  const gallery = ['/1.JPEG','/2.JPEG','/3.JPEG','/4.JPEG']

  return (
    <div className="app">
      <section className="hero">
        <div className="overlay"></div>
        <img src="/1.JPEG" className="hero-bg" />
        <div className="hero-content">
          <h1>RL MEDIA</h1>
          <p>Photography • Videography • Cinematic Storytelling</p>
          <div className="buttons">
            <a href="https://wa.me/917053120268">WhatsApp</a>
            <a href="https://www.instagram.com/rohan_loniwala/">Instagram</a>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>About RL Media</h2>
        <p>
          RL Media is a creative photography and videography group specializing
          in sports events, cinematic pre-wedding shoots and music video production.
        </p>

        <div className="stats">
          <div><h3>100+</h3><span>Song Shoots</span></div>
          <div><h3>50+</h3><span>Events Covered</span></div>
          <div><h3>1000+</h3><span>Creative Reels</span></div>
        </div>
      </section>

      <section className="gallery">
        <h2>Featured Work</h2>
        <div className="grid">
          {gallery.map((img, i) => (
            <div className="card" key={i}>
              <img src={img} />
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <h2>Contact RL Media</h2>
        <p>7053120268 / 80768693705</p>
        <p>seh.rohan@gmail.com</p>
        <p>@rohan_loniwala</p>

        <img
          className="qr"
          src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https://wa.me/917053120268"
        />

        <a className="cta" href="https://wa.me/917053120268">
          Chat on WhatsApp
        </a>
      </section>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
