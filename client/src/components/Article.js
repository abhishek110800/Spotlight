import { Container, Row, Col } from "react-bootstrap";
import { bookmarks } from "../service/api";

const Article = ({ article, loginUser }) => {
  const bookMarkedNews = {
    name: loginUser.loginUser.name,
    email: loginUser.loginUser.email,
    author: article.author,
    content: article.content,
    date: article.date,
    imageUrl: article.imageUrl,
    readMoreUrl: article.readMoreUrl,
    time: article.time,
    title: article.title,
    url: article.url,
  };

  return (
    <>
      <div className="articleDiv">
        <div className="article">
          <Container>
            <Row>
              <Col md={4} xs={12}>
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="articleImage"
                />
              </Col>
              <Col md={8} xs={12}>
                <h4 className="articleTitle">{article.title}</h4>
                <p className="articleAuthorTime">
                  By {article.author} | {article.date}{" "}
                </p>
                <p className="articleDesc">{article.content}</p>
                <div className="articleBtnDiv">
                  <button
                    className="articleBtn"
                    onClick={() => {
                      if (bookMarkedNews.name) {
                        bookmarks(bookMarkedNews);
                      } else {
                        alert("Please Login First");
                      }
                    }}
                  >
                    <i className="fa fa-star" />
                    &nbsp;Bookmark
                  </button>

                  <button className="articleBtn">
                    <a href={article.readMoreUrl} target="_bla">
                      <i className="fa fa-book" />
                      &nbsp;Read More
                    </a>
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Article;
