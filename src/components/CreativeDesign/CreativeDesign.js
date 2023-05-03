import React from 'react';
import Box from '@mui/material/Box';
import MuiCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import arrowRight from '../../assets/img/arrow-right.svg';
import strategy_svg from '../../assets/img/strategy.svg';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import styles from './styles';


const Card = () => {
    return (
        <MuiCard sx={styles.card}>
            <CardContent sx={{padding: 0}}>
                <Box component="img" src={strategy_svg}/>
                <Typography variant="h3">strategy</Typography>
                <List>
                    <ListItem sx={styles.listItem}>
                        <Box component="img" src={arrowRight} sx={{marginRight: "3px"}}/>
                        Product Management
                    </ListItem>
                    <ListItem sx={styles.listItem}>
                        <Box component="img" src={arrowRight} sx={{marginRight: "3px"}}/>
                        mpv definition
                    </ListItem>
                    <ListItem sx={styles.listItem}>
                        <Box component="img" src={arrowRight} sx={{marginRight: "3px"}}/>
                        product strategy
                    </ListItem>
                </List>
            </CardContent>
            <CardActions sx={{padding: 0}}>
                <Button sx={styles.btn}>
                    Read More
                    <Box component="img" src={arrowRight}/>
                </Button>
            </CardActions>
        </MuiCard>
    );
};

export default Card;
