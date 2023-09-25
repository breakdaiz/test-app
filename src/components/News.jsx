import React, { useState, useEffect } from "react";

const News = () => {
  const [feeds, setFeed] = useState("");
  const API_KEY = "RIBXT3XYLI69PC0Q";
  // const API_KEY = "DEMO";

  const getFeeds = async () => {
    const feeds = await fetch(
      `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=${API_KEY}`
    );
    const data = await feeds.json();
    setFeed(data.feed);
  };

  useEffect(() => {
    getFeeds();
    console.log(feeds);
  }, []);

  return (
    <div className='max-w-6xl mx-auto space-y-4 p-4'>
      <h1 className='text-4xl font-bold text-amber-600'> About</h1>
      {}
      <div className='bg-gray-100'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
            <h2 className='text-3xl font-bold text-gray-900'>News Feed</h2>
            <div className='cursor-pointer mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-8'>
              {feeds
                ? feeds.map(feed => {
                    return (
                      <a href={`${feed.url}`} target='_blank' rel='noreferrer'>
                        <div className='group relative'>
                          <div class='relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64'>
                            <img
                              src={
                                feed.banner_image
                                  ? `${feed.banner_image}`
                                  : "https://placehold.co/600x400?text=IMAGE"
                              }
                              alt='News feed'
                              className='h-full w-full object-cover object-center'
                            />
                          </div>
                          <h3 className='mt-6 text-sm text-gray-500'>
                            <span className='font-bold '>
                              Author: {feed.authors[0]}
                            </span>
                          </h3>
                          <p className='text-base font-semibold text-gray-900'>
                            {feed.title}
                          </p>
                        </div>
                      </a>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
