import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelection } from '../../Redux/actions/botOneActions'
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
    const dispatch = useDispatch()
    const { selection } = useSelector(state => state.botOneReducer)

    const classes = useStyles()
    // const [value, setValue] = useState('female')

    const handleChange = (event) => {
        // setValue(event.target.value)
        dispatch(setSelection(event.target.value))
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
                <RadioGroup aria-label="gender" name="gender1" value={selection} onChange={handleChange}>
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
