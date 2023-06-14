import { FormControl, MenuItem, Select } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'

const SortTimeItems = ['Expand all', 'Collapse all']

export default function TypeView() {
  const classes = useStyles()
  const [view, setView] = React.useState("View mode")

  const handleChange = (newAlignment: any) => {
    setView(newAlignment.target.value)
  }

  return (
    <FormControl className={classes.formWrapper}>
      <Select
        value={view}
        onChange={handleChange}
        displayEmpty
        size="small"
        className={classes.inputList}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>Placeholder</em>;
          }
          return selected
        }}
      >
        {SortTimeItems.map((item: string) => (
          <MenuItem sx={{ fontSize: 14 }} key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

const useStyles = makeStyles({
  formWrapper: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  inputList: {
    background: 'white',
    fontSize: 14,
    width: 141,
    padding: 0,
    '& .MuiSelect-select' : {
      padding: '4px 8px'
    }
  },
})
