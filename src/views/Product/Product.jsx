import React from 'react'
import BlogCard from '../../components/BlogCard/BlogCard';
import { Link } from 'react-router';

function Product() {
  return (
    <div>
      
      <h1 className="text-4xl py-4 text-center font-bold">Top Categories</h1>
      <div className="flex flex-wrap justify-center">
        <Link to={"staplesc"}><BlogCard
          image="https://cdn.shopify.com/s/files/1/0865/4005/8946/files/1.png?v=1724301727"
          title="Staples"
        /></Link>

        <Link to={"oilsc"}>
          <BlogCard className="bg-amber-500"
            image="https://cdn.shopify.com/s/files/1/0865/4005/8946/files/2_29d5505b-daa9-4f09-aa36-35b30477a53d.png?v=1724301727"
            title="Oils"
          /></Link>

        <Link to={"dryfruits"}>
          <BlogCard
            image="https://cdn.shopify.com/s/files/1/0865/4005/8946/files/3.png?v=1724301727"
            title="Dry Fruits"
          /></Link>


        <Link to={"dairyc"}>
        <BlogCard
          image="https://cdn.shopify.com/s/files/1/0865/4005/8946/files/4.png?v=1724301727"
          title="A2 Dairy Products"
        /></Link>
        <Link to={"fruitsc"}>
        <BlogCard
          image="https://cdn.shopify.com/s/files/1/0865/4005/8946/files/5.png?v=1724301727"
          title="Fruits & Vegetables"
        /></Link>

        <Link to={"beveragesc"}>
        <BlogCard
          image="https://cdn.shopify.com/s/files/1/0865/4005/8946/files/6.png?v=1724301727"
          title="Beverages"
        /></Link>

        <Link to={"snacksc"} >
        <BlogCard
          image="https://cdn.shopify.com/s/files/1/0865/4005/8946/files/7.png?v=1724301727"
          title="Snacks"
        /></Link>


        <Link to={"personal"}>
        <BlogCard
          image="https://cdn.shopify.com/s/files/1/0865/4005/8946/files/8.png?v=1724301727"
          title="Personal Care"
        /></Link>

        <Link to={"home"}>
        <BlogCard
          image="https://cdn.shopify.com/s/files/1/0865/4005/8946/files/9.png?v=1724301727"
          title="Home Essential"
        /></Link>
      </div>

    </div>
  )
}

export default Product