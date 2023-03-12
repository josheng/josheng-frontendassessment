import React from "react";
import HeaderText from "../headertext/headertext";
import data from "./data.json"
import Avatar from "../avatar/avatar";
import avatarlogo from "../images/avatar.png"

const Content = () => {
  const paragraphs1 = data.text1.split(". ")
  const paragraphs2 = data.text2.split(". ")
  const paragraphs3 = data.text3.split(". ")
  const paragraphs4 = data.text4.split(". ")
  return (
    <div>
      <HeaderText header={data.header1} paragraphs={paragraphs1} />
      <Avatar
        image={avatarlogo}
        name="Avatar"
        quote="I have always dreamed that if I could afford a nice motorcycle one day, it would be a Harley-Davidson" />
      <HeaderText header={data.header2} paragraphs={paragraphs2} />
      <HeaderText header={data.header3} paragraphs={paragraphs3} />
      <HeaderText header={data.header4} paragraphs={paragraphs4} />
    </div>
  );
}

export default Content;
