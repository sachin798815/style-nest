import { useNavigate } from "react-router";

//catrgories list
const category = [
  {
    image: "https://cdn-icons-png.flaticon.com/128/7378/7378841.png",
    name: "shirts",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/18642/18642104.png",
    name: "jackets",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/3531/3531788.png",
    name: "pants",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/2123/2123029.png",
    name: "shoes",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/9338/9338581.png",
    name: "accessories",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/5802/5802227.png",
    name: "homewear",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/2390/2390065.png",
    name: "dresses",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/2390/2390061.png",
    name: "coats",
  },
];

const Category = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col mt-5">
        {/* main 1 */}
        <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
          {/* main 2  */}
          <div className="flex ">
            {/* category  */}
            {category.map((item, index) => {
              return (
                <div key={index} className="px-3 lg:px-10">
                  {/* Image  */}
                  <div
                    onClick={() => navigate(`/category/${item.name}`)}
                    className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-violet-500 transition-all hover:bg-violet-300 cursor-pointer mb-1 "
                  >
                    <div className="flex justify-center mb-12">
                      {/* Image tag  */}
                      <img src={item.image} alt="img" />
                    </div>
                  </div>

                  {/* Name Text  */}
                  <h1 className=" text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase ">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* style  */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}",
        }}
      />
    </div>
  );
};

export default Category;
