// productData 
const productData = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/2635315/pexels-photo-2635315.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Black, White Red Stripes',
      desc: 'A classic black, white, and red striped shirt that blends contemporary style with a bold look, ideal for casual outings.',
      price: 8200,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3751397/pexels-photo-3751397.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Dark Green T-Shirt',
      desc: 'A dark green t-shirt featuring minimalistic design for a relaxed and stylish look, perfect for any casual event.',
      price: 11375,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1188748/pexels-photo-1188748.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Regrets T-Shirt',
      desc: 'A thought-provoking t-shirt with an artistic print, symbolizing the concept of regrets, a must-have for creative minds.',
      price: 2400,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/10663488/pexels-photo-10663488.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Colorful Printed Shirt',
      desc: 'A vibrant and colorful shirt adorned with intricate hand-painted patterns, offering a bold yet sophisticated look.',
      price: 13500,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/8638712/pexels-photo-8638712.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Flower Printed Shirt',
      desc: 'A beautiful flower printed shirt in premium cotton, combining comfort with elegance, perfect for a laid-back summer vibe.',
      price: 7000,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/18563162/pexels-photo-18563162/free-photo-of-a-man-in-a-tan-shirt-sitting-on-a-chair.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Misunderstood T-Shirt',
      desc: 'A unique blue shirt with hand-painted designs that make a statement about individuality and the misunderstood concepts of life.',
      price: 2999,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/31826364/pexels-photo-31826364/free-photo-of-fashionable-woman-posing-near-suv-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Puma Black T-Shirt',
      desc: 'A premium black t-shirt from Puma with a hand-painted depiction of Lord Hanuman, combining culture with modern style.',
      price: 3999,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/17243499/pexels-photo-17243499/free-photo-of-a-woman-leaning-against-a-wall-wearing-a-crop-top.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Diamond Half T-Shirt',
      desc: 'A stylish light blue cotton shirt with abstract hand-painted motifs, offering a modern twist on traditional artwork.',
      price: 11700,
      trendingProductName: 'Featured',
      quantity: 1,
    },
];
   

const HomePageProductCard = () => {
    return (
        <div className="mt-10">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </div>

            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {productData.map((item, index) => {
                            const { image, title, price } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                            <img
                                                className="lg:h-80  h-96 w-full object-cover"
                                                src={image}
                                                alt="blog"
                                            />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                Trending
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                            <div className="flex justify-center ">
                                                <button className=" bg-rose-500 hover:bg-rose-400 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;