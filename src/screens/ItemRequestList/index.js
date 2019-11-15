import React from 'react';

import { Link } from 'react-router-dom';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';

// Material Icon
import AddIcon from '@material-ui/icons/Add';
import PanToolIcon from '@material-ui/icons/PanTool';

// components
import ItemRequestCard from '../../components/ItemRequestCard';

import image1 from '../../images/speaker.jpg';

const useStyles = makeStyles(theme => ({
    fab: {
        height: 80,
        width:  80,
        margin: theme.spacing(1),
        position: "fixed",
        bottom: 50,
    },
    root: {
        color: '#ffffff',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
        // backgroundColor: theme.palette.background.paper,
    },
        gridList: {
        width: "80%",
        // justifyContent: "center"
        // height: 450,
    },
        icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));





export default function ItemRequestList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={200} className={classes.gridList}>
                <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
                    <ListSubheader component="div" style={{color: "#ffffff", fontSize: 24}}>REQUESTS</ListSubheader>
                </GridListTile>
                {tileData.map(tile => (
                    <ItemRequestCard
                    />                        
                ))}
            </GridList>
            <Link to='/items/new/post'>
                <Fab color="primary" aria-label="add" className={classes.fab}>
                    <AddIcon />
                    {/* <PanToolIcon /> */}
                </Fab>
            </Link>
        </div>
    );
};


const tileData = [
    {
        img: image1,
        title: 'Image',
        author: 'author',
    },
    {
        img: image1,
        title: 'Image',
        author: 'author',
    },
    {
        img: image1,
        title: 'Image',
        author: 'author',
    },
    {
        img: image1,
        title: 'Image',
        author: 'author',
    },
    {
        img: image1,
        title: 'Image',
        author: 'author',
    },
    {
        img: image1,
        title: 'Image',
        author: 'author',
    },
    {
        img: image1,
        title: 'Image',
        author: 'author',
    },
    {
        img: image1,
        title: 'Image',
        author: 'author',
    },
    {
        img: image1,
        title: 'Image',
        author: 'author',
    },
    {
        img: image1,
        title: 'Image',
        author: 'author',
    },
    {
        img: image1,
        title: 'Image',
        author: 'author',
    },
    {
        img: image1,
        title: 'Image',
        author: 'author',
    },
    {
        img: image1,
        title: 'Image',
        author: 'author',
    },
    {
        img: image1,
        title: 'Image',
        author: 'author',
    },
];