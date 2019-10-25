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
        addRecipeHandlerVisibility:true,
        addrecipe:{},
      recipeitems: [
        {url:'https://images.immediate.co.uk/production/volatile/sites/2/2019/09/OLI-0919_Everyday-TomatoLemongrassRiceSoup_33265-5aebfd2.jpg?quality=90&resize=940,404',
        title:'Tomato, lemongrass and rice soup',
        description:'Looking for quick and easy vegan recipes for midweek? Try one of these easy vegan recipes, all ready in under 30 minutes. From our simple cauliflower steak to our on-the-go energy balls.',
        ingredients:['vegetable oil 1 tbsp','garlic 1 clove, crushed','ginger 2cm piece, finely grated','red chilli 1','finely chopped lemongrass 2 stalks', 'woody outer leaves discarded, finely chopped','cumin seeds ¼ tsp','ground coriander ¼ tsp','chopped tomatoes 400g tin','tamarind purée 2 tbsp','basmati rice 3 tbsp','coriander a handful, finely chopped'],
        instructions:['Heat the vegetable oil in a pan and cook the garlic, ginger, chilli and lemongrass for 2 minutes.','Add the spices and cook for 1 minute, then tip in the tomatoes, tamarind and 600ml water, and simmer for 5 minutes. Blitz with a stick blender until smooth, then season.','Heat the soup again, add the rice and simmer for 10-12 minutes or until the rice is cooked. Stir through the coriander and serve.']
        },
        {url:'https://images.immediate.co.uk/production/volatile/sites/2/2019/04/OLI-EasterIssue2019-Everyday_AubergineTeriyaki_31527-e35e390.jpg?quality=90&resize=940,404',
        title:'Aubergine teriyaki bowls',
        description:'Our 30-minute vibrant vegan recipe is packed with fresh flavours of crunchy radishes, fiery ginger and zesty lime',
        ingredients:['jasmine rice 120g','aubergine 1, cut into chunky pieces','vegetable oil 1½ tbsp','carrot 1, shredded','spring onions 2, cut into 3cm pieces','garlic 1 clove, crushed','ginger a thumb sized piece, finely grated','soy sauce 2 tbsp','caster sugar 1 tbsp','frozen edamame beans 75g','radishes a handful, thinly sliced','lime 1, ½ juiced, , ½ sliced','sesame seeds 2 tsp, toasted'],
        instructions:['Put the rice into a small pan with 240ml of water and a pinch of salt. Bring to the boil, cook for 1 minute then put on a lid, turn the heat down to low and cook for 10 minutes. Remove from the heat and leave to steam for another 10 minutes.','Toss the aubergine with 1 tbsp of the oil in a bowl. Heat a wok until hot then cook the aubergine for 5 minutes, tossing regularly, until charred and beginning to soften. Tip in the carrot, spring onions, garlic and ginger, and stir-fry for 2-3 minutes or until softened. Whisk together the soy sauce and sugar with 200ml of water, pour in and simmer gently for 10-15 minutes or until the aubergine is really soft and the sauce has reduced.','Meanwhile, blanch the frozen edamame beans in a pan of boiling water, drain well and rinse under running water until cold. Drain again, then tip into a bowl with the radishes and a little seasoning, squeeze over ½ a lime and toss well.','Spoon the rice into bowls, top with the aubergine and sauce, the beans and radishes, sprinkle with sesame seeds and serve with the slices of lime to squeeze over.']
        },
        {url:'https://images.immediate.co.uk/production/volatile/sites/2/2019/01/OLI-0219-Healthy_GreenThaiTofuCurry_31163-357e831.jpg?quality=90&crop=20px,1629px,5444px,2342px&resize=940,404',
        title:'Green thai tofu curry',
        description:'Looking for a quick and easy vegan curry recipe? Try our Thai curry with smoked tofu and plenty of crunchy veg, ready in 25 minutes and low in calories',
        ingredients:['jasmine rice 240g','smoked tofu 225g pack, cubed','vegetable oil 2 tsp','Thai green curry paste 50g','low-fat coconut milk 400g tin','sugar snap peas 150g','baby sweetcorn 175g, halved lengthways','green beans 150g, halved','lime 1, juiced','coriander a small bunch, leaves picked'],
        instructions:['Put the jasmine rice into a pan with 480ml of water and a pinch of salt. Bring to the boil, turn the heat to low, put on a lid and simmer gently for 10 minutes, then leave off the heat to steam for another 10 minutes. Fluff up with a fork just before serving.']
        },
        {url:'https://images.immediate.co.uk/production/volatile/sites/2/2019/01/olive_EggFriedRice-41e3e7b.jpg?quality=90&crop=8px,2793px,3526px,1517px&resize=940,404',
        title:'Tofu fried rice',
        description:'Check out our vegan fried rice with smoked tofu. Make this quick and easy recipe for a low-calorie midweek meal for two',
        ingredients:['1 onion','1 chopped eggplant','6 diced portobello mushrooms','2 cups of soy milk','6 or 7 tablespoons flour','Panko,Powdered garlic','Parsley Salt'],
        instructions:['In a pan, heat the oil and add the onion cook until golden then put in the mushrooms and eggplant and cook for a while.','In a bowl, throw in the milk, flour and salt, stir until it thickens. Spread the dough on a tray and leave it in the fridge for about 1-2h.','In a different bowl mix Panko with parsley, garlic powder, and salt. Take the dough out of the fridge and use hands to shape the croquetas and bread them on the Panko mix. Put them in the freezer for 20-30min.','Fry the croquetas in a pan with vegetable oil and medium-high heat until golden. You can freeze the croquetas if you want to keep them for another day']
        }
      ]
    };
    this.addRecipeHandler = this.addRecipeHandler.bind(this)
    this.closeRecipeHandler = this.closeRecipeHandler.bind(this)
    this.onConfirmation = this.onConfirmation.bind(this)
  }

  addRecipeHandler(){
    // console.log('Add A Recipe!!!')
    const node = ReactDOM.findDOMNode(this.addrecipe_wrapper);
    node.style.visibility = 'visible'
  }

  closeRecipeHandler(){
    console.log('Close A Recipe!!!')
    const node = ReactDOM.findDOMNode(this.addrecipe_wrapper);
    node.style.visibility = 'hidden'

  }


    onConfirmation(event){
        event.preventDefault();

        this.setState({addrecipe:{
            url: event.target.url.value,
            title: event.target.title.value,
            description: event.target.description.value,
            ingredients: event.target.ingredients.value,
            instructions:event.target.instructions.value
            }
        })


        let list = this.state.recipeitems.concat(this.state.addrecipe)
        this.setState({ recipeitems: list })

        console.log(this.state.recipeitems)


        this.closeRecipeHandler();

    }

  render() {



    return (
      <div className={styles.main_wrapper}>
        <Header addRecipeHandler={this.addRecipeHandler}/>
        <RecipeList recipeitems={this.state.recipeitems}/>
        <AddRecipe ref={ref => this.addrecipe_wrapper = ref} closeRecipeHandler={this.closeRecipeHandler} onConfirmation={this.onConfirmation}/>

      </div>
    );
  }
}

export default hot(module)(App);
