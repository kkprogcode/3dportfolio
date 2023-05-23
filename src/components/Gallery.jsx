import React from "react";
import { Link } from "react-router-dom";


const galleryData = [
  { filename: "ChatGPTclone.png", link: "https://aicodex-topaz.vercel.app/" },
  { filename: "reactadmindash.png", link: "https://react-admin-dashboard-project.netlify.app" },
  { filename: "crowdfundingpic.png", link: "https://blockchain-crowdfunding.netlify.app" },
  { filename: "imagegen.png", link: "https://imggenclient.onrender.com/" },
  { filename: "weatherapp.png", link: "https://showweather-app.vercel.app/" },
  { filename: "Xcrypto.png", link: "https://reactcrypto.vercel.app/" },
  { filename: "ai_t-shirt.png", link: "https://ai-t-shirt.netlify.app/" },
  { filename: "astro.png", link: "https://astro-demowebsite.netlify.app/" },
  { filename: "socialmedia.png", link: "https://socialm-app.netlify.app/" },
  // Add more objects for each image
];

const Gallery = () => {
  return (
    <section>
      {galleryData.map((item, index) => (
        <Link to={item.link} key={index}>
          <img src={require(`../assets/${item.filename}`).default} alt={`Image ${index + 1}`} />
        </Link>
      ))}
    </section>
  );
};

export default Gallery;