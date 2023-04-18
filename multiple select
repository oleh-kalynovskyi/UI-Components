const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const formikName = 'locations'

const LocationSelectComponent = () => {
  return (
    <Select
      size="small"
      multiple
      displayEmpty
      id={formikName}
      name={formikName}
      onBlur={handleBlur}
      open={false}
      value={values.locations} // array of items for display
      renderValue={(selected) => {
        if (selected.length === 0) {
          return <Typography sx={{color: color.greyText}}>All selected</Typography>;
        }
        return(<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {selected.map((value: string) => (
            <Chip key={value} label={value} sx={{ borderRadius: '8px' }}/>
          ))}
        </Box>)
      }}
      MenuProps={MenuProps} // style
      sx={{ width: '100%' }}
    >
    </Select>
  )
}
