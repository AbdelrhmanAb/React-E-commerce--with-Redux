import React from "react";

// Rating Component (Read Only)
const Rating = ({ value }) => {
    return (
        <div className="rating rating-sm pointer-events-none flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <input

                    key={star}
                    type="radio"
                    className="mask mask-star-2  bg-orange-400"
                    checked={star <= value}
                    readOnly
                />
            ))}
        </div>
    );
};

export default Rating

// const ProductCard = ({ product }) => {
//   return (
//     <div className="border rounded-lg p-4 flex flex-col items-center bg-white shadow hover:shadow-lg transition">
//       <img
//         src={product.img}
//         alt={product.name}
//         className="w-full h-40 object-contain mb-4"
//       />
//       <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
//       <p className="text-gray-500 text-sm mb-2">{product.description}</p>
//       <Rating value={product.rating} />
//       <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductCard;
