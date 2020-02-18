import React from "react";

import './input-item.styles.scss';
import { useSelectFields } from "../../libs/hooksLibs";
import { FormControl, Select, MenuItem, Grid, TextField } from "@material-ui/core";
import ITEM_DATA from "../../assets/shop-data/item-data";

function InputItem(props) {
    const data = ITEM_DATA;
    const [fields, handleFieldChange] = useSelectFields({
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
                        <Select 
                            value={fields.directory}
                            name="directory"
                            onChange={handleFieldChange}>
                        {data.directory.map(item => (
                            <MenuItem value={`${item}`} key={item}>{item}</MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid>Supplier:</Grid>
                <Grid>
                <FormControl>
                        <TextField value={fields.supplier}
                            name="supplier"
                            onChange={handleFieldChange} />
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}

export default InputItem;