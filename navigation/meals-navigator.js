import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import CategoriesScreen from '../screens/categories'
import CategoryMealsScreen from '../screens/category-meals'
import MealDetailScreen from '../screens/meal-detail'

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen
})

export default createAppContainer(MealsNavigator)
