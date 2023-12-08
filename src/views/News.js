import React from "react";
import CustomTabs from "../components/CustomTabs";

const News = ({isOpen}) => {
  return (
    <div>
      {isOpen &&
        <div>
          <CustomTabs labels={['Podcast', 'Gadget']}>
            <div>Podcast</div>
            <div>Gadget</div>
            <div>Programming</div>
          </CustomTabs>
        </div>
      }
    </div>
  )
}

export default News;