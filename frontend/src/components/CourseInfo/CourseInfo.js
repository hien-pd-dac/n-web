import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import "./CourseInfo.css";

import { Overview } from "./Overview";

const CourseInfo = () => {
  return (
    <div id="course-info">
      <Tabs defaultActiveKey="overview">
        <Tab eventKey="overview" className="overview-tab" title="Overview">
          <Overview />
        </Tab>
        <Tab eventKey="question" className="question-tab" title="Q&A">
          Q&A content
        </Tab>
        <Tab
          eventKey="announcement"
          className="announcement-tab"
          title="Announcements"
        >
          Announcements content
        </Tab>
      </Tabs>
    </div>
  );
};

export default CourseInfo;
