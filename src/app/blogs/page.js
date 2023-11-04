"use client";

import React from "react";
import "./blogs.scss";
import Link from "next/link";
import { blogsData } from "../data";

const page = () => {
  return (
    <div className="blogs">
      <div className="container">
        <h2>blogs</h2>

        <div className="cards">
          {blogsData.map((blog) => (
            <Link
              href={`/blogs/[slug]`}
              as={`/blogs/${blog.title.toLowerCase().replace(/\s+/g, "-")}`}
              key={blog.id}
            >
              <div className={"card"}>
                <h3> {blog.title}</h3>
                <p>
                  {blog.content[0].para.length <= 200
                    ? blog.content[0].para
                    : blog.content[0].para.substring(0, 200) + "..."}
                </p>{" "}
                <span>Read more</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
