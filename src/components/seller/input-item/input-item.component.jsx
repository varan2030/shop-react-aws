import React from "react";

import './input-item.styles.scss';
import { useFormFields } from "../../../libs/hooksLibs";
import { FormControl, InputLabel, Select, MenuItem, Grid } from "@material-ui/core";
import ITEM_DATA from "../../../assets/shop-data/item-data";

function InputItem(props) {

    const data = ITEM_DATA;
    const [fields, handleFieldChange] = useFormFields({
		directory: '',
		category: '',
		categoryOption: '',
		modelNumber: '',
        seasonType: '',
        itemSizeAndCount: [
            {
                size: '',
                count: ''
            }
        ],
        madeBy: '',
        supplier: '',
        purchasePrice:'',
        sellingPrice:'',
        material: '',
        description: '',
        notes: ''
	});

    return (
        <div>
            <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            className="form-field"
            >
                <Grid>Directory:</Grid>
                <Grid>
                    <FormControl className="form-control__directory">
                        <InputLabel id="label">Directory</InputLabel>
                        <Select 
                            value={fields.directory}
                            type="text"
                            id="directory"
                            onChange={handleFieldChange}>
                        {data.directory.map(item => (
                            <MenuItem value={`{${item}}`} key={item}>{item}</MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            {/* <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            className="form-field"
            >
                <Grid>Category:</Grid>
                <Grid>
                    <FormControl className="form-control__directory">
                    <InputLabel id="label">Category</InputLabel>
                        <Select value={data.category[0]}>
                        {data.category.map(item => (
                            <MenuItem value={item} key={item}>{item}</MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            className="form-field"
            >
                <Grid>Category Option:</Grid>
                <Grid>
                    <FormControl className="form-control__directory">
                    <InputLabel id="label">Category Option</InputLabel>
                        <Select id="select" value={fields.categoryOption} onChange={handleFieldChange}>
                        {data.categoryOption.map(item => (
                            <MenuItem value={item} key={item}>{item}</MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid> */}
        </div>
    )
}

export default InputItem;