import React from "react";
import { withRouter } from "react-router-dom";
import './mobile-menu-item-directory.styles.scss';
import { Box } from "@material-ui/core";

import TreeView from '@material-ui/lab/TreeView';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LabelIcon from '@material-ui/icons/Label';
import CloseIcon from '@material-ui/icons/Close';
import TreeItem from '@material-ui/lab/TreeItem';
import { useDispatch } from "react-redux";
import { setMobileMenuAction } from "../../redux/mobile-menu/mobilde-menu.action";


function MobileMenuItemDirectory ({itemsData, ...props}) {

  const dispatch = useDispatch();

  const handleClick = (event, item) => {
    event.preventDefault();
    dispatch(setMobileMenuAction(false));
    if (item) {
      const val = item.map(item => item.replace(/\s+/g, '-').toLowerCase())
      props.history.push(`/${val[0]}/${val[1]}/${val[2]}`);
    }
  }
      return (
      <div>
        <div className="close-button-content">
          <CloseIcon id="close-button" onClick={handleClick} />
        </div>
        <Box className="content">
          <div className="mobile-menu-header">
            <h5>FABI</h5>
          </div>
        <TreeView
          className='tree-view'
          defaultCollapseIcon={<ArrowDropDownIcon />}
          defaultExpandIcon={<LabelIcon />}
        >
          {itemsData.directory.map((directory) =>{
            return <TreeItem key={directory.name} nodeId={directory.name} label={directory.name} className="tree-item-directory">
              {directory.category.map(option => {
                return <TreeItem key={option.id} nodeId={option.id.toString()} label={option.name} className="tree-item-directory">
                  {option.categoryOption.map(item => {
                    return <TreeItem 
                              key={item.id} 
                              nodeId={item.id.toString()} 
                              label={item.name}
                              value={item.name}
                              className="tree-item-directory"
                              onClick={(e) => handleClick(e, [directory.name, option.name, item.name])}
                            >
                            </TreeItem>
                  })}
                </TreeItem>
              })}
            </TreeItem>
          })}
      </TreeView>
          </Box>
      </div>
    )
}

export default withRouter(MobileMenuItemDirectory);