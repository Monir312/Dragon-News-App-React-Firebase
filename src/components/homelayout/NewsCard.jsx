import React from "react";
import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 max-w-lg mx-auto">
      {/* Author Section */}
      <div className="flex items-center justify-between px-4 py-3 bg-base-200">
        <div className="flex items-center space-x-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author.name}</h3>
            <p className="text-gray-500 text-sm">
              {new Date(author.published_date).toISOString().split("T")[0]}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3 text-gray-500">
          <FaBookmark className="cursor-pointer hover:text-gray-700" />
          <FaShareAlt className="cursor-pointer hover:text-gray-700" />
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 text-lg font-bold text-gray-900 leading-snug mb-2">
        {title}
      </h2>

      {/* Image */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-56 object-cover"
      />

      {/* Details */}
      <div className="px-4 py-3 text-gray-600 text-sm">
        <p>
          {details.slice(0, 200)}...
          <Link to={`/news-details/${id}`} className="text-orange-600 font-medium cursor-pointer hover:underline ml-1">
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-gray-100">
        {/* Rating */}
        <div className="flex items-center space-x-1 text-orange-400">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-700 font-medium">
            {rating.number.toFixed(1)}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center text-gray-500 space-x-2">
          <FaEye />
          <span className="font-medium text-gray-700">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
