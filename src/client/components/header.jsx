import React from 'react';

import styles from '../style.scss';

class Header extends React.Component {

  render() {
    return (
      <div className={styles.header}>
        <img src="https://www.abillionveg.com/static/logo-full.png"/>
        <button onClick={this.props.addRecipeHandler}>Add a recipe</button>
      </div>
    );
  }
}

export default Header;
