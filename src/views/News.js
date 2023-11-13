import React from "react";

const News = ({isOpen}) => {
  return (
    <div>
      {isOpen &&
        <div>
          <h1>News</h1>
        </div>
      }
    </div>
  )
}

export default News;