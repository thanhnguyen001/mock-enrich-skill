import React, { useEffect, useRef } from "react";
import "./News.scss";

export interface INews {
  title?: string;
  tabIndex?: number;
}

const News = (props: INews) => {
  const { title, tabIndex } = props;

  const newsRef = useRef(null);

  useEffect(() => {
    const newsElement = newsRef.current as unknown as HTMLDivElement;
    if (newsElement) {
      const contentElement = newsElement.querySelector(".news-body") as unknown as HTMLDivElement;
      const span = Math.round(contentElement.clientHeight / 38) + 1; // min-height: 22px + gap: 16px
      newsElement.style.gridRowEnd = `span ${span}`
    }
  }, [tabIndex]);

  return (
    <div className="news rounded" ref={newsRef}>
      <div className="news-wrapper px-16px py-16px h-full">
        <div className="news-heading">
          <div className="news-author flex items-center">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <div className="news-author-name ml-8px">
              <p className="font-medium">Nguyen Thanh</p>
              <p className="opacity-70 text-[12px]">14 min</p>
            </div>
          </div>
        </div>
        <div className="news-body mt-16px">
          <p className="news-title font-extrabold">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default News;
