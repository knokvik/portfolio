import { Link } from 'react-router-dom'
import '../App.css'

function Home() {
  return (
    <main className="main-content">
      <div className="content-wrapper">
        <article className="css-18fqvvy">
          <h1>Niraj Naphade</h1>
          <p><strong>Some things about me:</strong></p>
          <p>I'm an engineer with a strong interest in software systems, machine learning, and security, and I enjoy working at the intersection of theory and real-world applications.</p>
          <p>Over the years, I've explored and built with technologies like React, Flutter, data analysis pipelines, and machine learning workflows, while continuously sharpening my fundamentals in computer science and problem-solving.</p>
          <p>I enjoy building projects that are useful, simple, and durable, especially systems that reduce friction for users and scale naturally over time.</p>
          <p>I see software as both an engineering discipline and a creative practice—a space where constraints shape clarity, and good abstractions create beauty.</p>
          <p>My thinking has evolved steadily through learning, experimentation, and reflection. I value clear reasoning, first principles, and long-term thinking, and I'm especially interested in ideas that compound over time.</p>
          <p><strong>Some things I'm interested in:</strong></p>
          <ul>
            <li>Machine learning and artificial intelligence, particularly how models learn, generalize, and fail—and how we can make systems more robust and interpretable.</li>
            <li>Software security and system design, with a focus on building reliable, trustworthy applications.</li>
            <li>Education and learning, especially learning-by-building and developing strong fundamentals early.</li>
            <li>Health, discipline, and consistency, as foundations for long-term personal and professional growth.</li>
            <li>Learning new things from people who care deeply about their craft, and exploring ideas that have high leverage across domains.</li>
            <li>Well-crafted work in any form—software, writing, design, or tools that quietly do their job well.</li>
          </ul>
          <p>Checkout my <Link to="/reading">reading</Link>, <Link to="/writing">projects</Link>, and <Link to="/deep-dives">deep dives</Link>.</p>
        </article>
      </div>
    </main>
  )
}

export default Home