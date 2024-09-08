import React from "react";
import "./Footer.css";
import footerData from "../../Data/Footer.json";

const imagePath = (imageName) => {
  try {
    return require(`../../assets/${imageName}`);
  } catch (err) {
    return null;
  }
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="box-container">
        <div className="logo">
          <img src={imagePath(footerData.logo)} alt="" />
        </div>

        {footerData.boxes.map((box, index) => (
        <div className="box" key={index}>
          <h4>{box.title}</h4>
          <ul>
            {box.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        ))}

      </div>

      <div className="sub-footer">
        <div className="box">
          <ul>
            {footerData.socailMedia.map((socail, index) => (
              <li key={index}>
                <a href={socail.url}>
                  <i className={socail.iconClass}></i>
                </a>
              </li>
            ))}
          </ul>
          
          <div className="box">
            <p dangerouslySetInnerHTML={{__html: footerData.copyright}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
