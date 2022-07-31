import React, { useState } from "react";
import { useStyle } from "../../assets/styles/dashboard";
import InfoCard from "../../components/card/InfoCard";
import InfoCardEdit from "../../components/card/InfoCardEdit";
import Message from "../../assets/images/Message.svg";
import usersIcon from "../../assets/images/3 User.svg";
import EmailSetting from "../../assets/images/Email Setting.svg";

const MenuOne = () => {
    const classes = useStyle();
    const [email,setEmail] = useState("info@peak.com")
  return (
    <div >
      <div className={classes.cardContainer}>
        <InfoCard
          title="تعداد درخواست ها:"
          icon={Message}
          value="5"
          color="BLUE"
        />
      </div>
      <div className={classes.cardContainer}>
        <InfoCard
          title="تعداد بازدید های امروز:"
          icon={usersIcon}
          value="528"
          color="RED"
        />
      </div>
      <div className={classes.cardContainer}>
        <InfoCardEdit
          title="ایمیل شما:"
          icon={EmailSetting}
          value={email}
          onChange={(value)=>setEmail(value)}
          color="RED"
        />
      </div>
    </div>
  );
};

export default MenuOne;
