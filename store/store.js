import create from "zustand";
export const useStore = create((set) => ({
	// cart
	cart: {
		pizzas: [],
	},

	// add to pizza
	addPizza: (data) => {
		set((state) => {
			let isMatched = false;
			const pizzas = state.cart.pizzas.map((pizza) => {
				if (pizza.name === data.name && pizza.size === data.size) {
					// The names match, increase the quantity of the matched pizza
					pizza.quantity += 1;
					isMatched = true;
				}
				return pizza;
			});
			if (!isMatched) {
				// If no matches were found, add the new pizza object to the array
				pizzas.push(data);
			}
			return {
				cart: {
					pizzas: pizzas,
				},
			};
		});
	},

	removePizza: (index) => {
		set((state) => ({
			cart: {
				pizzas: state.cart.pizzas.filter((_, i) => i != index),
			},
		}));
	},
	resetCart: () => {
		set(() => ({
			cart: {
				pizzas: [],
			},
		}));
	},
}));
