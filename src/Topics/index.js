import React, { useState } from "react";
import Img from "../assets/images/frame.svg";
import Clock from "../assets/images/clock.svg";
import User from "../assets/images/avatar.svg";
import StarFilled from "../assets/images/star_filled.svg";
import Star from "../assets/images/star.svg";
import "./Topics.scss";

const Topic = ({ data }) => {
  const [ratingData, setRatingData] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const [submittedRated, setSubmittedRated] = useState({});
  const submitRating = (stopPoint, id) => {
    let newRatings = {};
    for (let i = 0; i < 5; i++) {
      if (i <= stopPoint) newRatings[i] = true;
      else newRatings[i] = false;
    }
    setRatingData({ ...ratingData, ...newRatings });
    if (id?.length) setSubmittedRated({ ...submittedRated, [id]: true });
  };
  const resetRatings = (id) => {
    if (!submittedRated?.hasOwnProperty(id)) {
      setRatingData({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
      });
    }
  };
  return (
    <div className="topic_main_div" onMouseEnter={() => resetRatings(data?.id)}>
      <div className="container_img">
        <img src={Img} alt="img" className="topic_image" />
        <div className="overlay overlayeffect">
          <div className="rating_div">
            {Object.keys(ratingData || {})?.map((item) => {
              return (
                <img
                  onMouseOut={() => resetRatings(data?.id)}
                  onClick={() => submitRating(item, data?.id)}
                  onMouseOver={() => {
                    if (data?.id in submittedRated) return;
                    else submitRating(item, "");
                  }}
                  src={ratingData[item] ? StarFilled : Star}
                  key={item}
                  alt="star"
                  className="star_image"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="subHeading">{data?.subHeading}</div>
      <div className="heading">{data?.heading}</div>
      <div className="time_div">
        <img src={Clock} alt="clock" className="img_time" />
        <p className="time_date">{data?.date_time}</p>
      </div>
      <div className="avatar_div">
        <img src={User} alt="avatar" />
        <div className="user_details">
          <span className="name_details">{data?.name}</span>
          <br />
          <span className="expert_info">{data?.profile}</span>
        </div>
      </div>
      <div className="concept_info">Concepts Learnt</div>
      <div className="concept_description">
        Lorem ipsum is a dummy content for the real tiume con...
        <span className="read_more_button">&nbsp;&nbsp;Read More</span>
      </div>
      <div className="footer">
        <button className="submit_assignment">Assignment</button>
      </div>
    </div>
  );
};
export default Topic;
