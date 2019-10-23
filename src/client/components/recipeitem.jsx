import React from 'react';
import PropTypes from 'prop-types';
import styles from '../style.scss';

class RecipeItem extends React.Component {


  render() {
    return (
      <div className={styles.item_wrapper}>
        <img src={this.props.item.url}/>
        <p className={styles.title}>{this.props.item.title}</p>
        <p className={styles.description}>{this.props.item.description}</p>
      </div>
    );
  }
}

RecipeItem.propTypes = {
  item: PropTypes.object.isRequired
};


export default RecipeItem;
