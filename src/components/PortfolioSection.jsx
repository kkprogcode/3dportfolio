import React from 'react';

const PortfolioSection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-1/2 md:w-1/4">
            <a href="https://aicodex-topaz.vercel.app/">
              <img
                className="rounded-lg object-cover w-full h-auto"
                src="../../images/ChatGPTclone.png"
                alt="Image 1"
              />
            </a>
          </div>
          <div className="w-1/2 md:w-1/4">
            <a href="https://ai-t-shirt.netlify.app/">
              <img
                className="rounded-lg object-cover w-full h-auto"
                src="../../images/ai_t-shirt.png"
                alt="Image 2"
              />
            </a>
          </div>
          <div className="w-1/2 md:w-1/4">
            <a href="https://blockchain-crowdfunding.netlify.app">
              <img
                className="rounded-lg object-cover w-full h-auto"
                src="../../images/crowdfundingpic.png"
                alt="Image 2"
              />
            </a>
          </div>
          <div className="w-1/2 md:w-1/4">
            <a href="https://imggenclient.onrender.com/">
              <img
                className="rounded-lg object-cover w-full h-auto"
                src="../../images/imagegen.png"
                alt="Image 2"
              />
            </a>
          </div>
          <div className="w-1/2 md:w-1/4">
            <a href="https://react-admin-dashboard-project.netlify.app">
              <img
                className="rounded-lg object-cover w-full h-auto"
                src="../../images/reactadmindash.png"
                alt="Image 2"
              />
            </a>
          </div>
          <div className="w-1/2 md:w-1/4">
            <a href="https://showweather-app.vercel.app/">
              <img
                className="rounded-lg object-cover w-full h-auto"
                src="../../images/weatherapp.png"
                alt="Image 2"
              />
            </a>
          </div>
          <div className="w-1/2 md:w-1/4">
            <a href="https://reactcrypto.vercel.app/">
              <img
                className="rounded-lg object-cover w-full h-auto"
                src="../../images/Xcrypto1.png"
                alt="Image 2"
              />
            </a>
          </div>
          <div className="w-1/2 md:w-1/4">
            <a href="https://socialm-app.netlify.app/">
              <img
                className="rounded-lg object-cover w-full h-auto"
                src="../../images/socialmedia.png"
                alt="Image 2"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
