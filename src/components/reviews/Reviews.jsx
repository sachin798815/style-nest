const Reviews = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className='text-center text-3xl font-bold text-black'>Reviews</h1>
                    <h2 className='text-center text-2xl font-semibold mb-10'>
                        What our <span className='text-rose-600'>customers</span> are saying
                    </h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Review 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600"
                                />
                                <p className="leading-relaxed">
                                    Absolutely love the product quality and design! The packaging was neat and the delivery was quick. I’ve already recommended it to my friends.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-rose-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Albert</h2>
                                <p className="text-gray-500">New</p>
                            </div>
                        </div>

                        {/* Review 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600"
                                />
                                <p className="leading-relaxed">
                                    I'm really impressed with the seamless shopping experience and the attention to detail in every product. Will definitely shop again!
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-rose-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Sakshi Mittal</h2>
                                <p className="text-gray-500">Regular</p>
                            </div>
                        </div>

                        {/* Review 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=600"
                                />
                                <p className="leading-relaxed">
                                    The customer support is fantastic! They answered all my queries quickly, and the product exceeded my expectations in every way.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-rose-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Aman Sharma</h2>
                                <p className="text-gray-500">Regular</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews;
