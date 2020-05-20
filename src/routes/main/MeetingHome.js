import React, { Component } from "react";
import { Layout, Calendar, Badge } from "antd";
import Navbar from "./Navbar";
import FHeader from "./FHeader";

class MeetingHome extends Component {
  renderMainContent() {
    const getListData = (value) => {
        let listData;
        switch (value.date()) {
          case 8:
            listData = [
              { type: 'warning', content: 'This is warning event.' },
              { type: 'success', content: 'This is usual event.' },
            ];
            break;
          case 10:
            listData = [
              { type: 'warning', content: 'This is warning event.' },
              { type: 'success', content: 'This is usual event.' },
              { type: 'error', content: 'This is error event.' },
            ];
            break;
          case 15:
            listData = [
              { type: 'warning', content: 'This is warning event' },
              { type: 'success', content: 'This is very long usual event。。....' },
              { type: 'error', content: 'This is error event 1.' },
              { type: 'error', content: 'This is error event 2.' },
              { type: 'error', content: 'This is error event 3.' },
              { type: 'error', content: 'This is error event 4.' },
            ];
            break;
          default:
        }
        return listData || [];
      }
      
      const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
          <ul className="events">
            {listData.map(item => (
              <li key={item.content}>
                <Badge status={item.type} text={item.content} />
              </li>
            ))}
          </ul>
        );
      }
      
      const getMonthData = (value) => {
        if (value.month() === 8) {
          return 1394;
        }
      }
      
      const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
          <div className="notes-month">
            <section>{num}</section>
            <span>Backlog number</span>
          </div>
        ) : null;
      }
    return (
      <div className="gx-meeting-home-wrapper gx-w-100-p">
          <div className="meeting-title gx-font-size-25">
              Meetings Calendar
          </div>
          <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
      </div>
    );
  }

  render() {
    const { Content } = Layout;
    return (
      <Layout>
        <FHeader />
        <Navbar current={1} />
        <div className="gx-mx-auto">
          <Content
            style={{
              height: "calc(100vh - 150px)",
              width: "100vw",
              background: "#ffffff",
            }}
          >
            {this.renderMainContent()}
          </Content>
        </div>
      </Layout>
    );
  }
}

export default MeetingHome;
