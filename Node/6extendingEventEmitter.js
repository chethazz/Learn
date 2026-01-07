const PizzaShop = require("./4pizzaShop");
const DrinkMachine = require("./5drinkMachine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
	console.log(`Order received! Baking a ${size} pizza with ${topping}`);
	drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "chicken");
pizzaShop.displayOrderNo();
