import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const PostListingItem = ({ post }) => {

  console.log(post);
  const [coverPicture] = post.coverPicture

  return (
    <li>
      <Link to={`/${post.uri}`} className="text-decoration-none text-reset">
        <GatsbyImage
          alt={coverPicture.title}
          image={getImage(coverPicture.listingCover)}
          className="mx-auto d-block mb-2"
        />
        <h5>{post.title}</h5>
      </Link>
      <span>{post.excerpt}</span>
    </li>
  )
}
