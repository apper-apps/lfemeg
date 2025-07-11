import React from 'react'

function App() {
  return (
    <div className="App">
      <header>
        <nav className="container">
          <a href="#" className="logo">Schema Boost Pro</a>
          <ul className="nav-links">
            <li><a href="#schemas">Schemas</a></li>
            <li><a href="#generator">Generator</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#generator" className="cta-button">Get Started</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Boost Your SEO with JSON-LD Structured Data</h1>
            <p>Generate and validate SEO-optimized JSON-LD structured data for better search engine rankings. Support for Articles, FAQs, Products, Local Businesses, and more.</p>
            <div className="hero-buttons">
              <a href="#generator" className="btn btn-primary">Start Generating</a>
              <a href="#features" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
        </section>

        <section id="generator" className="generator-section">
          <div className="container">
            <h2 className="section-title">JSON-LD Schema Generator</h2>
            <div className="generator-container">
              <div className="generator-form">
                <form>
                  <div className="form-group">
                    <label htmlFor="schema-type">Schema Type</label>
                    <select id="schema-type" name="schema-type">
                      <option value="article">Article</option>
                      <option value="faq">FAQ</option>
                      <option value="product">Product</option>
                      <option value="organization">Organization</option>
                      <option value="person">Person</option>
                      <option value="localbusiness">Local Business</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" placeholder="Enter title" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" placeholder="Enter description"></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="url">URL</label>
                    <input type="url" id="url" name="url" placeholder="https://example.com" />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Generate Schema</button>
                </form>
              </div>
              <div className="generator-output">
                <div className="output-header">
                  <h3>Generated JSON-LD</h3>
                  <button className="copy-button"><i className="fas fa-copy"></i> Copy</button>
                </div>
                <div className="code-output">
{`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Your Article Title",
  "description": "Your article description",
  "url": "https://example.com/article",
  "datePublished": "2024-01-01",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  }
}`}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 Schema Boost Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App