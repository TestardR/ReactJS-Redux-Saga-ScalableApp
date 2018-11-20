/**
 *
 * Drawer
 *
 */

import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function Drawer({
  items,
  selectiItem,
  itemLabelAttr,
  itemKeyAttr,
  isDrawerOpen
}) {
  const itemNodes = items.map(item => (
    <div
      className={styles.item}
      key={item[itemKeyAttr]}
      onClick={() => selectiItem(item)}
    >
      {item[itemLabelAttr]}
    </div>
  ));
  return (
    <div
      className={classNames(styles.drawer, {
        [styles.drawerOpen]: isDrawerOpen
      })}
    >
      {itemNodes}
    </div>
  );
}

Drawer.propTypes = {
  items: React.PropTypes.arr.isRequired,
  selectItem: React.PropTypes.func.isRequired,
  itemLabelAttr: React.PropTypes.string.isRequired,
  itemKeyAttr: React.PropTypes.string.isRequired,
  isDrawerOpen: React.PropTypes.bool.isRequired
};

export default Drawer;
