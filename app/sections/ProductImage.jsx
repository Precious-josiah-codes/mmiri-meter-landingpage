"use client";
import { content } from "../data/content";
import ProductImageComp from "../components/ProductImageComp";
import { motion } from "framer-motion";
import { animationOne, animationTwo } from "../animation";

const ProductImage = () => {
  const { productImage } = content;
  return (
    <section className="flex">
      <div className="mx-auto flex sm:flex-row flex-col sm:space-x-6 space-y-6 sm:space-y-0 w-fit">
        {/* first image */}
        <motion.div
          variants={animationOne}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProductImageComp imagePath={productImage.imageOne} />
        </motion.div>
        {/* second image */}
        <motion.div
          variants={animationTwo}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProductImageComp imagePath={productImage.imageTwo} />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductImage;
