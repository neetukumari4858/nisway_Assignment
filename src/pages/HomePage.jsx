import { useEffect, useState } from "react";
import "./../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDetail } from "../context/detailContext";

function HomePage() {
  const [data, setData] = useState([]);
  const { detailData, setDetailData } = useDetail();

  useEffect(
    () => async () => {
      const response = await axios.get(
        "https://techcrunch.com/wp-json/wp/v2/posts?per_page=10"
      );
      setData(response.data);
    },
    []
  );
  return (
    <div className="inner_container">
      <p className="heading">List of News Articles</p>
      {data.map((item) => {
        const splitedDate = item.date.split("T");
        const excerpt = item.excerpt.rendered
          .replace("<p>", "")
          .replace("</p>", "");

        return (
          <div className="article_list_container" key={item.id}>
            <div className="article_list_item"  >
              <div className="content_div">
                <p className="headline">
                  <span>Headline</span>:
                  <Link
                    className="headline_link"
                    to={"/item/" + item.id}
                    onClick={() =>
                      setDetailData({
                        ...detailData,
                        content: item.content.rendered,
                        title: item.title.rendered,
                        logo: item.parsely.meta.publisher.logo,
                        name: item.parsely.meta.publisher.name,
                      })
                    }
                  >
                    {item.parsely.meta.headline}
                  </Link>
                </p>
                <p className="title">
                  <span>Title</span>: {item.title.rendered}
                </p>
                <div className="author_date_div">
                  <p className="author">
                    <span> Author</span>:
                    {item.parsely.meta.author.map((Item) => Item.name)}
                  </p>
                  <h1 className="date">
                    <span>Date</span>: {splitedDate[0]} Time:
                    <span> {splitedDate[1]}</span>
                  </h1>
                </div>

                <p className="experpt">
                  <span>Excerpt</span>: {excerpt}
                </p>
              </div>

              <img
                className="image_size"
                src={item.jetpack_featured_media_url}
                alt="featured_image"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
