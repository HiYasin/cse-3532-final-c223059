import React from "react";

const VideoCard = ({ videoInfo }) => {
  const { category_id, thumbnail, title, authors, others } = videoInfo;
  return (
    <div className="card bg-base-100 border shadow-xl">
      <figure>
        <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body flex flex-row">
        <div className={`w-10 h-10 rounded-full overflow-hidden`}>
          <img
            src={authors[0].profile_picture}
            className="w-full h-10 object-cover"
          />
        </div>
        <div>
          <h2 className="text-md font-bold">{title}</h2>
          <div className="flex items-center gap-3 justify-between">
            <p>{authors[0].profile_name}</p>
            {authors[0].verified !== "" || authors[0].verified !== false ? (
              <p className="badge badge-success text-white text-xs">Verified</p>
            ) : (
              <></>
            )}
          </div>
          <div>
            <p className="text-sm text-gray-700 font-light">
              {others.views} views
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
