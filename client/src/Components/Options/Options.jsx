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

const Options = ({ currentOptions }) => {
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
                    {
                        currentOptions.options.map((item, index) => (
                            <FormControlLabel 
                                key={index}
                                className={classes.item} 
                                value={`${item.id}`} 
                                control={<Radio color="primary" />} label={`${item.type}`} 
                            />
                        ))
                    }
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default Options
