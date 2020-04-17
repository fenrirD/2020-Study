import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {CssBaseline, Typography, Grid, TextField, Button} from "@material-ui/core"
import AccountCircle from '@material-ui/icons/AccountCircle';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
}));

const Login = ({match, history, param, handleChange, handleSubmit}) => {
    const classes = useStyles();




    return (

        <div className={classes.root}>

            <CssBaseline />
            <main style={{width:'80%'}}>
                <Paper elevation={3} >
                    <Typography variant='h4'> login </Typography>
                    <form>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField id="id" label="ID" value={param.id} onChange={handleChange}/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField id="password" label="PASSWORD"
                                           type="password" value={param.password}
                                           onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            startIcon={<SaveIcon />}
                            onClick={handleSubmit}
                        >
                            Save
                        </Button>
                    </form>
                </Paper>
            </main>


        </div>
    )
}

export default Login
