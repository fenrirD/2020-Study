import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyle = makeStyles({
    grid: {
        flexGrow: 1,
    },
    root: {
        minWidth: 345,

        spacing: 3
    },
    media : {
        height: 140,
    }
})

const ReduxStudyLists =  ({lists,onClickTitle}) => {
    const classes = useStyle()
    console.log(onClickTitle)

    return (
        <Grid container className={classes.grid} spacing={3}>

        {lists && lists.map( (lists,idx) =>(
            <Grid item xs={3} key={idx}>
                <Card className={classes.root}  id={`${idx} 1 `}>
                    <CardActionArea onClick={ ()=> onClickTitle(lists.id)} >
                        <CardMedia
                            className={classes.media}
                            image="/logo192.png"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography  component="p">
                                {lists.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {lists.content}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
                </Grid>
        ))}

        </Grid>



    );
}




export default ReduxStudyLists
