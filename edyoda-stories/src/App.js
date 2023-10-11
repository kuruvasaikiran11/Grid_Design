import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <header>
        <div className="header-bar">
          <div className="header-item logo-item">
            <div className="logo">EDYODA</div>
            <p className="logo-caption">Stories</p>
          </div>
          <div className="header-item">
            <div className="dropdown">
              Explore Categories
              <i
                className="fa fa-chevron-circle-down dropdown-icon"
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div className="header-item" id="header-text">
            <p>
              EdYoda is a learning and knowledge<br />
              sharing platform for techies
            </p>
          </div>
          <div className="header-item" id="header-btn">
            <button className="btn">Go To Main Website</button>
          </div>
        </div>
      </header>
      
      <main>
        <div className="main-container">
          <div className="main-heading">
            <h1 id="heading">Trending Posts</h1>
          </div>
          <div id="filter-icon">
            <i className="fa fa-filter" aria-hidden="true"></i>
            <span id="filter-text">Filter by Category</span>
          </div>
    
          <div className="filter-container">
            <span className="filter-category" id="all-categories-filter">All</span>
            <span className="filter-category">Aritificial Intelligence</span>
            <span className="filter-category">Cloud Computing</span>
            <span className="filter-category">DevOps</span>
            <span className="filter-category">Programming Languages</span>
            <span className="filter-category">Mobile Application Development</span>
            <span className="filter-category">Technology and Tools</span>
            <span className="filter-category">Get a Job in a Tech Company</span>
            <span className="filter-category">Others</span>
          </div>
        </div>
  
        <div className="blog-card-section">
          <div className="blog-card">
            <div className="image-section">
              <img className="blog-thumbnail" src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png" alt="Intro to ML"></img>
            </div>
            <div className="blog-content">
              <h2 className="blog-title">Introduction to A Machine Learning Online Course</h2>
              <div className="author-container">
                <span className="author">EdYoda</span> | <span className="date">02 Jul 2023</span>
              </div>
              <p className="blog-info">
                  We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this machine learning...
                </p>
            </div>
          </div>
          <div className="blog-card">
            <div className="image-section">
              <img className="blog-thumbnail" src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png" alt="Intro to ML"></img>
            </div>
            <div className="blog-content">
              <h2 className="blog-title">LAMP Stack Vs MEAN stack: Choosing the right platfor</h2>
              <div className="author-container">
                <span className="author">EdYoda</span> | <span className="date">24 Aug 2023</span>
              </div>
              <p className="blog-info">
              In today’s dynamic world, developing a rapid application with a smooth user interface that can adapt to specific features is the main business requirement. Many organizations...
                </p>
            </div>
          </div>
          <div className="blog-card">
            <div className="image-section">
              <img className="blog-thumbnail" src="https://edyoda.s3.amazonaws.com/media/blog-images/4.png" alt="Intro to ML"></img>
            </div>
            <div className="blog-content">
              <h2 className="blog-title">Impact of Cloud Computing in various industries</h2>
              <div className="author-container">
                <span className="author">EdYoda</span> | <span className="date">02 Jul 2023</span>
              </div>
              <p className="blog-info">
              Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using cloud...
                </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
