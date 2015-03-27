define(
[ "./utility/ComponentWithLoadingLifecycle", "./utility/Helpers", "./utility/MathUtilities" ],
function(ComponentWithLoadingLifecycle, Helpers, MathUtilities)
{
	return {
		color: "blue",
		size: "large",
		addToCart: function()
		{
			inventory.decrement(this);
			cart.add(this);
		}
	};
});
