import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import persianDate from "persian-date";
import { useStyle } from "../../assets/styles/layout";
import ExitBtn from "../../components/button/ExitBtn";
import SideBar from "../../components/sideBar/SideBar";
import { routesTitle } from "./config";
import exit from "../../assets/images/power off.svg";
const Panel = (props) => {
  const classes = useStyle();
  const { pathname } = useLocation();
  const [date, setDate] = useState(new persianDate());
  const weekDays = persianDate.rangeName().weekdays;
  const months = persianDate.rangeName().months;
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new persianDate());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className={classes.main}>
      <SideBar />
      <main className={classes.content}>
        <div className={classes.header}>
          <div className={classes.headerTitle}>
            <div>{routesTitle[pathname]?.title ?? "صفحه مورد نظر یافت نشد"}</div>
            <div className={classes.subTitle}>{routesTitle[pathname]?.info}</div>
          </div>
          <div className={classes.timeHolder}>
            <div className={classes.timeText}>
              امروز {weekDays[date.day()]} ۲۵ {months[date.toArray()[1] - 1]}{" "}
              ماه سال {date.format('YYYY')} ساعت {date.format("hh:mm")}
            </div>
            {pathname === "/dashboard" ? (
              <ExitBtn title="خروج از پنل" icon={exit} />
            ) : (
              ""
            )}
          </div>
        </div>
        <hr className={classes.hoDivider} />
        <div className={classes.pages}>{props.children}</div>
      </main>
    </div>
  );
};

export default Panel;
