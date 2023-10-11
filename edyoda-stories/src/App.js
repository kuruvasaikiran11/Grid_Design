import logo from "./logo.svg";
import "./App.css";

function App() {
  const blogData = [
    {
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png",
      title: "Introduction to A Machine Learning Online Course",
      author: "EdYoda",
      date: "02 Jul 2023",
      description:
        "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this machine learning...",
    },
    {
      thumbnail: "https://edyoda.s3.amazonaws.com/media/blog-images/6.png",
      title: "LAMP Stack Vs MEAN stack: Choosing the right platfor...",
      author: "EdYoda",
      date: "24 Aug 2023",
      description:
        "In today’s dynamic world, developing a rapid application with a smooth user interface that can adapt to specific features is the main business requirement. Many organizations...",
    },
    {
      thumbnail: "https://edyoda.s3.amazonaws.com/media/blog-images/4.png",
      title: "Impact of Cloud Computing in various industries",
      author: "EdYoda",
      date: "24 Aug 2023",
      description:
        "Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using cloud...",
    },
    {
      thumbnail : "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
      title : "Fresh Graduate or IT professional Looking for a...",
      author : "EdYoda",
      date : "02 Sep 2023",
      description : "If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to assess technology..."
    },
    {
      thumbnail : "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg",
      title : "Introducing you all to EdYoda - www.edyoda.com",
      author : "EdYoda",
      date : "24 Sep 2023",
      description : "Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of..."
    },
    {
      thumbnail : "https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg",
      title : "From identity crisis to the Success Story - The",
      author : "EdYoda",
      date : "24 Nov 2023",
      description : "DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the de-facto component in..."
    },
    {
      thumbnail : "https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg",
      title : "Typical day of Data Scientist - An insider story!",
      author : "EdYoda",
      date : "02 Nov 2023",
      description : "I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right - “ Big Data and Data Science are the foundation of all the trends that are emerging in the world..."
    },
    {
      thumbnail : "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg",
      title : "Amazon Web Services (AWS) Cloud Day -",
      author : "EdYoda",
      date : "24 Dec 2023",
      description : "It was indeed a hectic day with back to back session sandwiched by good food and tea (on a lighter note, need to investigate the tactics behind the 5-star hotels keeping the plates so..."
    },
    {
      thumbnail : "https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg",
      title : "edYoda Meetup #01 : A Date with Cloud",
      author : "EdYoda",
      date : "24 Dec 2023",
      description : "I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, I recount my experience in organizing the very first in the series of meetups planned by..."
    },
  ];
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
              <span>
                <i
                  className="fa fa-chevron-circle-down dropdown-icon"
                  aria-hidden="true"
                ></i>
              </span>
            </div>
          </div>
          <div className="header-item" id="header-text">
            <p>
              EdYoda is a learning and knowledge
              <br />
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
            <h1 id="heading">Latest Posts</h1>
          </div>
          <div id="filter-icon">
            <i className="fa fa-filter" id="filter" aria-hidden="true"></i>
            <span id="filter-text">Filter by Category</span>
          </div>

          <div className="filter-container">
            <span className="filter-category" id="all-categories-filter">
              All
            </span>
            <span className="filter-category">Aritificial Intelligence</span>
            <span className="filter-category">Cloud Computing</span>
            <span className="filter-category">DevOps</span>
            <span className="filter-category">Programming Languages</span>
            <span className="filter-category">
              Mobile Application Development
            </span>
            <span className="filter-category">Technology and Tools</span>
            <span className="filter-category">Get a Job in a Tech Company</span>
            <span className="filter-category">Others</span>
          </div>
        </div>

        <div className="blog-card-section">
          {blogData.map((item, i) => (
            <div className="blog-card" key={i}>
              <div className="image-section">
                <img
                  className="blog-thumbnail"
                  src={item.thumbnail}
                  alt={item.title}
                />
              </div>
              <div className="blog-content">
                <h2 className="blog-title">{item.title}</h2>
                <div className="author-container">
                  <span className="author">{item.author}</span> |{" "}
                  <span className="date">{item.date}</span>
                </div>
                <p className="blog-info">{item.description}</p>
              </div>
            </div>
          ))}

          {/* <div className="blog-card">
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
          <div className="blog-card">
            <div className="image-section">
              <img className="blog-thumbnail" src="https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg" alt="Fresh Graduate or IT professional Looking"></img>
            </div>
            <div className="blog-content">
              <h2 className="blog-title">Fresh Graduate or IT professional Looking for a...</h2>
              <div className="author-container">
                <span className="author">EdYoda</span> | <span className="date">02 Sep 2023</span>
              </div>
              <p className="blog-info">
                  If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to assess technology...
                </p>
            </div>
          </div>
          <div className="blog-card">
            <div className="image-section">
              <img className="blog-thumbnail" src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg" alt="Introducing you all to EdYoda - www.edyoda.com"></img>
            </div>
            <div className="blog-content">
              <h2 className="blog-title">Introducing you all to EdYoda - www.edyoda.com</h2>
              <div className="author-container">
                <span className="author">EdYoda</span> | <span className="date">02 Sep 2023</span>
              </div>
              <p className="blog-info">
                  Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of....
                </p>
            </div>
          </div>
          <div className="blog-card">
            <div className="image-section">
              <img className="blog-thumbnail" src="https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg" alt="From identity crisis to the Success Story"></img>
            </div>
            <div className="blog-content">
              <h2 className="blog-title">From identity crisis to the Success Story - The...</h2>
              <div className="author-container">
                <span className="author">EdYoda</span> | <span className="date">02 Sep 2023</span>
              </div>
              <p className="blog-info">
                  DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the de-facto component in....
                </p>
            </div>
          </div> */}
        </div>
      </main>
    </>
  );
}

export default App;
