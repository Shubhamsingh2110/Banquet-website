export function FeaturedMeals() {
  const meals = [
    {
      image: "https://i.pinimg.com/736x/1a/59/f0/1a59f0e988c227075ce7a6e261f9f362.jpg", // blueberry-spinach-soup
      title: "Blueberry Spinach Soup",
      description: "A refreshing blend of blueberries and fresh spinach, perfect as a light starter.",
    },
    {
      image: "https://i.pinimg.com/736x/aa/a8/37/aaa837e219bbbe82920fb6afbf2777d8.jpg", // grilled-chicken-broccoli
      title: "Grilled Chicken & Broccoli",
      description: "Tender grilled chicken paired with lightly steamed broccoli, a healthy classic.",
    },
    {
      image: "https://i.pinimg.com/736x/6e/6e/e4/6e6ee4553234974bbd1ab0b3d2729afb.jpg", // herb-crusted-fish
      title: "Herb-Crusted Fish",
      description: "Fresh fish fillet baked with aromatic herbs and served with seasonal vegetables.",
    },
    {
      image: "https://i.pinimg.com/736x/fd/80/e1/fd80e1f89225821fd5675bda62a5e603.jpg", // pasta-primavera
      title: "Pasta Primavera",
      description: "Seasonal vegetables tossed with al dente pasta in a light garlic sauce.",
    },
    {
      image: "https://i.pinimg.com/736x/b4/df/3d/b4df3dcee92b650a90157c1f80ed3ea9.jpg", // spicy-beef-stirfry
      title: "Spicy Beef Stir-Fry",
      description: "Slices of tender beef stir-fried with vibrant vegetables and a savory sauce.",
    },
    {
      image: "https://i.pinimg.com/736x/d0/a8/1c/d0a81cfebe822963a98c78ea385b3969.jpg", // chocolate-lava-cake
      title: "Chocolate Lava Cake",
      description: "Rich chocolate cake with a molten center, served with a scoop of vanilla ice cream.",
    },
    {
      image: "https://i.pinimg.com/736x/a0/cb/e2/a0cbe2c73e1185e727a74e22a782bc97.jpg", // mediterranean-salad
      title: "Mediterranean Salad",
      description: "Crisp greens, olives, feta, and cherry tomatoes with a zesty vinaigrette.",
    },
    {
      image: "https://i.pinimg.com/736x/c3/87/7b/c3877bc87ea9e8bc57df9299ba4b1e34.jpg", // gourmet-vegan-burger
      title: "Gourmet Vegan Burger",
      description: "A hearty plant-based patty with fresh toppings on a toasted brioche bun.",
    },
    {
      image: "https://i.pinimg.com/736x/66/72/a1/6672a1c891ec051e083ba231089392ba.jpg", // lemon-herb-salmon
      title: "Lemon Herb Salmon",
      description: "Pan-seared salmon with a delicate lemon-herb sauce, served with asparagus.",
    },
  ]

  return (
    <section className="mx-auto px-4 py-10">
      <style jsx>{`
        @keyframes scroll-x {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-x-inline {
          animation: scroll-x 30s linear infinite;
        }
      `}</style>

      {/* Centered Heading */}
      <h1 className="text-7xl font-black text-center mb-2 text-[#B38B59] font-cormorant">Food</h1>
      {/* Subtitle */}
      <p className="text-center text-2xl font-playfair text-gray-400 mb-10">Discover our delicious and freshly prepared meals</p>

      {/* Meals Grid */}
      <div className="relative w-full overflow-hidden py-12">
        <div className="flex animate-scroll-x-inline whitespace-nowrap">
          {[...meals, ...meals].map((meal, index) => (
            <div key={index} className="flex-shrink-0 w-[250px] flex flex-col items-center text-center p-4">
              <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden mb-4 shadow-lg">
                <img
                  src={meal.image || "/placeholder.svg"}
                  alt={meal.title}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{meal.title}</h2>
              <p className="text-muted-foreground text-sm text-pretty">{meal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedMeals
