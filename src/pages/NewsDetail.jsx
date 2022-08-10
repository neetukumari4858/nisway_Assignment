import React from "react";
import { useDetail } from "../context/detailContext";
import "./NewsDetail.css";

function NewsDatail() {
  const { detailData } = useDetail();
  return (
    <div className="detail_div">
      <div className="detail_heading">
        <a href={detailData.logo.url}>
          <img className="logo_img" src={detailData.logo.url} alt="logo_img" />
        </a>
        <p className="heading">Title: {detailData.title}</p>
      </div>
      <div
        className="heading_one"
        dangerouslySetInnerHTML={{ __html: detailData.content }}
      />
    </div>
  );
}
export default NewsDatail;
