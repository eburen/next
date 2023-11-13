"use client";

const Category = () => {
    const categories = [
        { name: "Shoes" },
        { name: "Shirts" },
        { name: "Pants" },
        { name: "Hats" },
        { name: "Socks" },
        { name: "Accessories" },

    ]

    return (
        <div className="flex items-center justify-center px:3 md:px-10 gap-3  md:gap-10 py-5 md:py-7 overflow-x-auto">
            {
                categories.map((category, index) => (
                    <div className="border text-slate-500 rounded-full min-w-[120px] flex flex-1 items-center justify-center cursor-pointer px-4 py-2 text-center" key={index}>
                        <h3>{category.name}</h3>
                    </div>

                ))
            }
        </div>
    );
}

export default Category;