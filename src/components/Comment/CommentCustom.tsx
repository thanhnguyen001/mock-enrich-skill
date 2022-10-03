import { Avatar, Comment, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CommentCustom.scss";

type CmtProps = {
  tabIndex: string;
}

const CommentCustom: React.FC<CmtProps> = ({tabIndex}) => {
  const initial = ["adadad", "asdadd", "gfgetasdasd", "dasdasdasdasdasd", "dadasdad"];
  const [action, setAction] = useState<string | null>(null);
  const [comments, setComments] = useState([initial]);

  useEffect(() => {
    const cmtLinkedParent = document.querySelector(`.cmt-parent.cmt-index-${tabIndex} .cmt-linked`) as HTMLElement;
    const lastChild = document.querySelector(`.cmt-parent.cmt-index-${tabIndex} .cmt-child:last-child`);
    if (cmtLinkedParent && lastChild) {
      cmtLinkedParent.style.bottom = `${lastChild.clientHeight - 20}px`
    }
  }, []);

  return (
    <div className="">
      <div className={`cmt-parent cmt-index-${tabIndex}`}>
        <div className="cmt-linked"></div>
        <Comment
          author={<a>Han Solo</a>}
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
          content={
            <p>
              We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to
              help people create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={
            <Tooltip title="2016-11-22 11:22:33">
              <span>8 hours ago</span>
            </Tooltip>
          }
        />

        <div className="cmt-children">
          <div className="cmt-child pl-40px">
            <div className="cmt-linked"></div>
            <Comment
              author={<a>Han Solo</a>}
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
              content={
                <p>
                  We supply a series of design principles, practical patterns and high quality design resources (Sketch and
                  Axure), to help people create their product prototypes beautifully and efficiently.
                </p>
              }
              datetime={
                <Tooltip title="2016-11-22 11:22:33">
                  <span>8 hours ago</span>
                </Tooltip>
              }
            />
          </div>
          <div className="cmt-child pl-40px">
            <div className="cmt-linked"></div>
            <Comment
              author={<a>Han Solo</a>}
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
              content={
                <p>
                  We supply a series of design principles, practical patterns and high quality design resources (Sketch and
                  Axure), to help people create their product prototypes beautifully and efficiently.
                </p>
              }
              datetime={
                <Tooltip title="2016-11-22 11:22:33">
                  <span>8 hours ago</span>
                </Tooltip>
              }
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CommentCustom;
