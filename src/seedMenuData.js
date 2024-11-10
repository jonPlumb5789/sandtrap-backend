// src/seedMenuData.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const MenuItem = require('./models/menuItem');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

  const menuData = {
    starters: [
      {
        name: "Cuban Quesadilla",
        description: "Swiss, pulled pork, pickles, ham, and honey mustard.",
        price: "$16",
      },
      {
        name: "House Onion Rings",
        description: "Hand breaded and served with trap sauce.",
        price: "$12",
      },
      {
        name: "Sandtrap Sampler",
        description:
          "Pickle fries, Putters, Onion Rings, tomato-artichoke dip and chips.",
        price: "$19",
      },
      {
        name: "NEW Nachos",
        description:
          "House tortilla chips, loaded with white queso sauce, lettuce, tomatoes, red onion, & candied jalapeños. Topped with choice of ground beef or chicken.",
        price: "$15",
      },
      {
        name: "Chips & Dip",
        description:
          "House Made Seasoned potato chips served with house French Onion Dip.",
        price: "$6",
      },
      {
        name: "Tomato-artichoke Dip",
        description:
          "Sun-dried tomatoes, artichoke hearts, goat cheese, corn tortilla chips.",
        price: "$13",
      },
      {
        name: "Pickle Fries",
        description: "Hand breaded and served with ranch.",
        price: "$12",
      },
      {
        name: "NEW Pulled Pork Potato Skins",
        description:
          "House Baked Potato Skins Stuffed with Choice of Pulled Pork and melted cheddar cheese or Bacon. Topped with Chives.",
        price: "$13",
      },
      {
        name: "Coconut Shrimp",
        description:
          "5 Jumbo shrimp, coconut flakes, mango salsa, pineapple chili sauce.",
        price: "$17",
      },
      {
        name: "NEW Breaded Cheese Sticks",
        description: "Served with Marinara.",
        price: "$9",
      },
      {
        name: "Sesame Cauliflower",
        description:
          "Breaded cauliflower florets, mild Asian sauce, wasabi aioli, sesame seeds.",
        price: "$13",
      },
      {
        name: "Veggie-dilla",
        description:
          "Smoked feta cheese, artichokes, spinach, and sundried tomatoes.",
        price: "$15",
      },
      {
        name: "NEW Pretzel Bites",
        description: "Served with white queso sauce.",
        price: "$12",
      },
      {
        name: "Putters",
        description:
          "Wonton-wrapped corned beef, swiss, sauerkraut, with honey mustard.",
        price: "$14",
      },
      {
        name: "Oven Baked Wings",
        description: "Choice of BBQ, Nashville Hot, Pineapple chili.",
        price: "$16",
      },
      {
        name: "NEW Steak Tips",
        description:
          "Sriracha steak bites in mushrooms and onions, served with pita bread.",
        price: "$16",
      },
    ],
  
    "Hole In One": [
      {
        name: "NY Strip",
        description:
          "14 oz, flame-grilled to your preference, served with a side of garlic butter.",
        price: "$25",
      },
      {
        name: "Cedar Plank Salmon",
        description:
          "8 oz, roasted on a cedar plank, drizzled with a maple glaze.",
        price: "$22",
      },
      {
        name: "Steak Frites",
        description:
          "10 oz ribeye, served with crispy seasoned fries and housemade herb butter.",
        price: "$28",
      },
      {
        name: "Short Rib",
        description:
          "Braised for hours until tender, served with a rich red wine reduction.",
        price: "$24",
      },
      {
        name: "Fish N Chips",
        description:
          "Beer-battered cod fillets, served with tartar sauce and coleslaw.",
        price: "$18",
      },
      {
        name: "Pork Ribeye",
        description: "10 oz, marinated and grilled, topped with apple chutney.",
        price: "$21",
      },
      {
        name: "Walleye of the Day",
        description:
          "Chef's special preparation of fresh walleye, ask your server for details.",
        price: "Market Price",
      },
      {
        name: "Grilled Chicken",
        description:
          "Marinated chicken breast, grilled and served with a side of wild rice.",
        price: "$17",
      },
      {
        name: "Coconut Shrimp Dinner",
        description:
          "Coconut-crusted shrimp, served with a tangy sweet chili sauce.",
        price: "$20",
      },
    ],
  
    "Hand Helds": [
      {
        name: "Bunkers Club Sandwich",
        description:
          "Smoked turkey breast, Dearborn ham, provolone, swiss, aioli, tomato, lettuce, and applewood smoked bacon on sourdough.",
        price: "$15",
      },
      {
        name: "Crispy Hot Chicken Sandwich",
        description:
          "Hand breaded fried chicken breast tossed in Nashville hot sauce, lettuce, pickles, garlic aioli, on a brioche bun.",
        price: "$14",
      },
      {
        name: "B.L.A.T.",
        description:
          "Applewood smoked bacon, lettuce, avocado, garlic aioli, and tomato on toasted multi-grain bread.",
        price: "$14",
      },
    ],
    burgers: [
      {
        name: "Salmon Burger",
        description:
          "Grilled housemade salmon patty with arugula, red onion, tomato, and tartar on a brioche bun.",
        price: "$15",
      },
      {
        name: "T-Time Burger",
        description:
          "Sunny side up egg, applewood smoked bacon, cheddar cheese, and trap sauce on a brioche bun.",
        price: "$16",
      },
      {
        name: "Dunes Melt",
        description:
          "Steak blend patty with cheddar cheese, grilled onions, and BBQ sauce on grilled Texas toast.",
        price: "$16",
      },
    ],
  
    "Pizza Oven": [
      {
        name: "Three Cheese Pizza",
        description: "Homemade red sauce with our three cheese blend",
        price: "$12/$16",
      },
      {
        name: "Classic Pepperoni",
        description:
          "Italian style pepperoni, three cheese blend, homemade red sauce",
        price: "$14/$18",
      },
      {
        name: "Meat Lovers",
        description:
          "Our classic homemade red sauce with bacon, sausage, pepperoni and three cheese blend",
        price: "$15/$19",
      },
      {
        name: "Prosciutto Pizza",
        description: "White garlic sauce, arugula, prosciutto and red onion",
        price: "$14/$18",
      },
      {
        name: "Margarita Pizza",
        description:
          "Homemade red sauce, fresh mozzarella slices, oregano, fresh basil and tomato",
        price: "$14/$18",
      },
      {
        name: "Oink-Oink Napolitana",
        description:
          "Homemade red sauce, three cheese blend, ham, artichoke, olives",
        price: "$16/$20",
      },
      {
        name: "White Anchovy",
        description:
          "Homemade white garlic sauce, red onion, oregano, white anchovies, chili flakes, capers, kalamata olives",
        price: "$14/$18",
      },
      {
        name: "BBQ Chicken",
        description:
          "Red sauce with three cheese blend, grilled BBQ chicken, red onion, candied tri-colored jalapenos",
        price: "$15/$19",
      },
      {
        name: "Focaccia",
        description: "Garlic oil, roasted garlic, parmesan cheese, rosemary",
        price: "$12",
      },
      { name: "Calzone", description: "", price: "$16" },
      { name: "Stromboli", description: "", price: "$18" },
      {
        name: "Chef’s Choice Pizza",
        description: "Ask your server for chef’s special pizza of the day!",
        price: "MARKET",
      },
    ],
  
    "Blastshot Bowls": [
      {
        name: "Grilled Shrimp",
        description: "Served with seasonal vegetables and a rice blend",
        price: "$19",
      },
      {
        name: "Chicken Pot Pie",
        description:
          "Tender chicken in a creamy sauce with peas and carrots, topped with a flaky crust",
        price: "$16",
      },
      {
        name: "Pepper Steak",
        description:
          "Grilled steak with peppercorn sauce, served with mashed potatoes",
        price: "$22",
      },
      {
        name: "Ahi Tuna",
        description:
          "Seared ahi tuna with a sesame crust, served with wasabi and soy sauce",
        price: "$20",
      },
      {
        name: "Louisiana Perch",
        description:
          "Fried perch fillets with Cajun seasoning, served with coleslaw",
        price: "$18",
      },
      {
        name: "Shepards Pie",
        description:
          "Ground beef and vegetables in a savory gravy, topped with mashed potatoes",
        price: "$17",
      },
      {
        name: "Walleye Piccata",
        description:
          "Pan-seared walleye with capers and lemon butter sauce, served with pasta",
        price: "$21",
      },
    ],
    "Grandslam Sautees": [
      {
        name: "Pear Pasta Purses",
        description:
          "Pasta filled with pears and cheese, served with a light cream sauce",
        price: "$15",
      },
      {
        name: "Perch Milanese",
        description: "Breaded and fried perch fillets, served with a lemon wedge",
        price: "$18",
      },
      {
        name: "Chicken Cacciatore",
        description:
          "Chicken cooked with tomatoes, onions, peppers, and mushrooms, served with rice",
        price: "$19",
      },
      {
        name: "Mac & Cheese",
        description:
          "Classic macaroni and cheese with a crispy breadcrumb topping",
        price: "$12",
      },
      {
        name: "Cauliflower Linguini",
        description:
          "Linguini pasta with roasted cauliflower, garlic, and parmesan cheese",
        price: "$14",
      },
    ],
    greens: [
      {
        name: "",
        description: "",
        price: "",
        add_ons: [
          { name: "Grilled Chicken", price: "$7" },
          { name: "Grilled Shrimp", price: "$8" },
          { name: "Grilled Salmon", price: "$9" },
          { name: "Steak Tips", price: "$9" },
          { name: "Ahi Tuna", price: "$9" },
        ],
      },
      {
        name: "Arugula Salad",
        description:
          "Arugula, fresh mixed berries, goat cheese crumbles, hot honey, balsamic reduction, pistachios, wild berry vinaigrette",
        price: "$14",
      },
      {
        name: "Chop Salad",
        description:
          "Romaine, arugula, onion, tomatoes, egg, cucumber, bleu cheese crumbles, chickpeas, avocado, with red wine vinaigrette",
        price: "$14",
      },
      {
        name: "Chef's Garden",
        description:
          "Romaine, onion, cucumber, grape tomato, mixed cheddar, croutons",
        price: "$13",
      },
      {
        name: "Beet Salad",
        description:
          "Arugula, golden beets, orange segments, feta crumbles, citrus vinaigrette",
        price: "$14",
      },
    ],
  
    sides: [
      {
        name: "Italian Green Beans",
        description: "Fresh green beans sautéed with garlic and olive oil.",
        price: "$5",
      },
      {
        name: "Rice Pilaf",
        description: "Fluffy rice with herbs and spices.",
        price: "$4",
      },
      {
        name: "Michigan Sweet Corn",
        description: "Sweet corn on the cob, buttered and seasoned.",
        price: "$5",
      },
      {
        name: "Onion Rings",
        description: "Crispy fried onion rings with a side of ranch.",
        price: "$6",
      },
      {
        name: "French Fries",
        description: "Classic, golden fries.",
        price: "$4",
      },
      {
        name: "Truffle Frita Fries",
        description: "Fries topped with truffle oil and parmesan cheese.",
        price: "$8",
      },
      {
        name: "Yukon Gold Mash",
        description: "Creamy mashed Yukon Gold potatoes.",
        price: "$5",
      },
      {
        name: "Baked Potato",
        description: "Baked potato with butter and sour cream.",
        price: "$5",
      },
      {
        name: "Zucchini and Carrots",
        description: "Steamed zucchini and carrot mix.",
        price: "$5",
      },
    ],
  
    soups: [
      {
        name: "Chicken Pastini",
        sizes: [
          { size: "Cup", price: "$4" },
          { size: "Bowl", price: "$6" },
        ],
      },
      {
        name: "Soup Du Jour",
        sizes: [
          { size: "Cup", price: "$4" },
          { size: "Bowl", price: "$6" },
        ],
      },
    ],
  
    Desserts: [
      {
        name: "Rosemary Lemon Bread Pudding",
        description:
          "Warm bread pudding with rosemary and lemon zest, served with a scoop of ice cream",
        price: "$8",
      },
      {
        name: "Pistachio Ice Cream Sandwich",
        description: "Pistachio ice cream between two cookies",
        price: "$7",
      },
      {
        name: "Ava's Orange Chocolate Layered Cake",
        description: "Layers of orange flavored cake and rich chocolate frosting",
        price: "$9",
      },
    ],
    "Kids Menu": [
      { name: "White Cheddar Mac & Cheese", price: "$7" },
      { name: "Chicken Tenders with Fries", price: "$7" },
      { name: "Mini Chicken Pot Pie Bowl", price: "$7" },
      {
        name: "Pepperoni Pizza",
        description: "Personal size- coming soon",
        price: "$7",
      },
      { name: "Slider with Fries", price: "$7" },
      { name: "Cheese Quesadilla", price: "$7" },
    ],
    "SundayBrunch": [
      {
        "name": "Breakfast Tacos",
        "description": "Bacon, egg, avocado, cheese, trap sauce. Served with choice of American Potatoes or side of fruit.",
        "price": "$12"
      },
      {
        "name": "Bacon & Egg Croissant",
        "description": "Bacon, eggs, cheddar, arugula. Served with choice of American Potatoes or side of fruit.",
        "price": "$11"
      },
      {
        "name": "Sausage & Cheese Burrito",
        "description": "Egg, cheddar cheese, spinach, bell peppers, onions, sausage. Served with choice of American Potatoes or side of fruit.",
        "price": "$12"
      },
      {
        "name": "Goat Cheese Frittata",
        "description": "Egg, goat cheese, sundried tomatoes, zucchini, onions. Served with choice of American Potatoes or side of fruit.",
        "price": "$13"
      },
      {
        "name": "SandTrap Special",
        "description": "3 eggs any style, choice of 2 breakfast meats, served with American potatoes or side of fruit.",
        "price": "$12"
      },
      {
        "name": "Chicken & Waffles",
        "description": "Hand battered fried chicken, hot honey, candied jalapeños. Served with sausage gravy.",
        "price": "$14"
      },
      {
        "name": "Berry Blast Waffle",
        "description": "Mix berries, almonds, powder sugar, topped with whipped cream. Add Bacon, Sausage or Ham +$3",
        "price": "$10"
      },
      {
        "name": "Chicken Salad Croissant",
        "description": "Arugula, chicken salad, cherries, cheddar cheese. Served with choice of American Potatoes or side of fruit.",
        "price": "$12"
      },
      {
        "name": "Adult Brunch Buffet",
        "price": "$24"
      },
      {
        "name": "Child Brunch Buffet",
        "description": "(Guests aged 10 and under please)",
        "price": "$14"
      }
    ]
    
  };

// Function to insert menu data
const seedMenuData = async () => {
  try {
    // Clear existing data
    await MenuItem.deleteMany({});
    console.log('Cleared existing menu items');

    // Loop through each category in menuData
    for (const category in menuData) {
      const items = menuData[category];

      // Loop through each item in the category
      for (const item of items) {
        const menuItem = new MenuItem({
          category,
          name: item.name,
          description: item.description,
          price: item.price,
          add_ons: item.add_ons || []
        });
        
        await menuItem.save();
      }
    }

    console.log('Menu data successfully seeded');
    mongoose.connection.close();
  } catch (err) {
    console.log('Error seeding menu data:', err);
  }
};

// Run the seeding function
seedMenuData();
