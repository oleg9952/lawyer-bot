import React, { useState } from 'react'
import {
    makeStyles,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
    holder: {
        padding: '20px'
    },
    item: {
        margin: '8px 0'
    }
}))

const Options = () => {
    const classes = useStyles()
    const [value, setValue] = useState('female')

    const handleChange = (event) => {
        setValue(event.target.value)
        console.log(event.target.value)
    };

    return (
        <div className={classes.holder}>
            <FormControl component="fieldset">
                <FormLabel component="legend">
                    <p style={{ 
                            color: '#000', 
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, commodi! Suscipit delectus excepturi nobis alias!</p>
                </FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel className={classes.item} value="Опція 1" control={<Radio color="primary" />} label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, commodi! Suscipit delectus excepturi nobis alias!Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, commodi! Suscipit delectus excepturi nobis alias!Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, commodi! Suscipit delectus excepturi nobis alias!" />
                    <FormControlLabel className={classes.item} value="Інше" control={<Radio color="primary" />} label="Інше" />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default Options
