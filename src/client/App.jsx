import React from 'react';
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader';
import Header from './components/header';
import RecipeList from './components/recipelist';

import AddRecipe from './components/addrecipe';

import styles from './style.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      recipeitems: [
        {url:'https://img.taste.com.au/020YqTdQ/taste/2018/05/creamy-chicken-piccata-pasta-137359-1.jpg',
        title:'sdsdsdsd',
        description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        ingredients:['1 onion','1 chopped eggplant','6 diced portobello mushrooms','2 cups of soy milk','6 or 7 tablespoons flour','Panko,Powdered garlic','Parsley Salt'],
        instructions:['In a pan, heat the oil and add the onion cook until golden then put in the mushrooms and eggplant and cook for a while.','In a bowl, throw in the milk, flour and salt, stir until it thickens. Spread the dough on a tray and leave it in the fridge for about 1-2h.','In a different bowl mix Panko with parsley, garlic powder, and salt. Take the dough out of the fridge and use hands to shape the croquetas and bread them on the Panko mix. Put them in the freezer for 20-30min.','Fry the croquetas in a pan with vegetable oil and medium-high heat until golden. You can freeze the croquetas if you want to keep them for another day']
        },
        {url:'https://img.taste.com.au/020YqTdQ/taste/2018/05/creamy-chicken-piccata-pasta-137359-1.jpg',
        title:'sdsdsdsd',
        description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        ingredients:['1 onion','1 chopped eggplant','6 diced portobello mushrooms','2 cups of soy milk','6 or 7 tablespoons flour','Panko,Powdered garlic','Parsley Salt'],
        instructions:['In a pan, heat the oil and add the onion cook until golden then put in the mushrooms and eggplant and cook for a while.','In a bowl, throw in the milk, flour and salt, stir until it thickens. Spread the dough on a tray and leave it in the fridge for about 1-2h.','In a different bowl mix Panko with parsley, garlic powder, and salt. Take the dough out of the fridge and use hands to shape the croquetas and bread them on the Panko mix. Put them in the freezer for 20-30min.','Fry the croquetas in a pan with vegetable oil and medium-high heat until golden. You can freeze the croquetas if you want to keep them for another day']
        },
        {url:'https://img.taste.com.au/020YqTdQ/taste/2018/05/creamy-chicken-piccata-pasta-137359-1.jpg',
        title:'sdsdsdsd',
        description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        ingredients:['1 onion','1 chopped eggplant','6 diced portobello mushrooms','2 cups of soy milk','6 or 7 tablespoons flour','Panko,Powdered garlic','Parsley Salt'],
        instructions:['In a pan, heat the oil and add the onion cook until golden then put in the mushrooms and eggplant and cook for a while.','In a bowl, throw in the milk, flour and salt, stir until it thickens. Spread the dough on a tray and leave it in the fridge for about 1-2h.','In a different bowl mix Panko with parsley, garlic powder, and salt. Take the dough out of the fridge and use hands to shape the croquetas and bread them on the Panko mix. Put them in the freezer for 20-30min.','Fry the croquetas in a pan with vegetable oil and medium-high heat until golden. You can freeze the croquetas if you want to keep them for another day']
        },
        {url:'https://img.taste.com.au/020YqTdQ/taste/2018/05/creamy-chicken-piccata-pasta-137359-1.jpg',
        title:'sdsdsdsd',
        description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        ingredients:['1 onion','1 chopped eggplant','6 diced portobello mushrooms','2 cups of soy milk','6 or 7 tablespoons flour','Panko,Powdered garlic','Parsley Salt'],
        instructions:['In a pan, heat the oil and add the onion cook until golden then put in the mushrooms and eggplant and cook for a while.','In a bowl, throw in the milk, flour and salt, stir until it thickens. Spread the dough on a tray and leave it in the fridge for about 1-2h.','In a different bowl mix Panko with parsley, garlic powder, and salt. Take the dough out of the fridge and use hands to shape the croquetas and bread them on the Panko mix. Put them in the freezer for 20-30min.','Fry the croquetas in a pan with vegetable oil and medium-high heat until golden. You can freeze the croquetas if you want to keep them for another day']
        }
      ]
    };
    this.addRecipeHandler = this.addRecipeHandler.bind(this)
    this.closeRecipeHandler = this.closeRecipeHandler.bind(this)
  }

  addRecipeHandler(){
    // console.log('Add A Recipe!!!')
    const node = ReactDOM.findDOMNode(this.addrecipe_wrapper);
    node.style.visibility = 'visible'
  }

  closeRecipeHandler(){
    // console.log('Close A Recipe!!!')
    const node = ReactDOM.findDOMNode(this.addrecipe_wrapper);
    node.style.visibility = 'hidden'
  }



  render() {


    return (
      <div className={styles.main_wrapper}>
        <Header addRecipeHandler={this.addRecipeHandler}/>
        <RecipeList recipeitems={this.state.recipeitems}/>
        <AddRecipe ref={ref => this.addrecipe_wrapper = ref} closeRecipeHandler={this.closeRecipeHandler} />
      </div>
    );
  }
}

export default hot(module)(App);
