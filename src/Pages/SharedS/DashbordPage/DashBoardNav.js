import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AllInboxIcon from '@mui/icons-material/AllInbox';
const DashBoardNav = ({ url }) => {
    const [value, setValue] = useState(0);
    const history = useHistory()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const tabs = (path) => {
        history.push(`${url}${path}`)
    }
    return (
       
            <Tabs sx={{width:'100%'}} value={value} onChange={handleChange} >
                <Tab sx={{}} onClick={() => tabs('')} icon={<AllInboxIcon />} />
                <Tab sx={{}} onClick={() => tabs('/managecart')} icon={<ProductionQuantityLimitsIcon />}  />
                <Tab sx={{}} onClick={() => tabs('/addproduct')} icon={<AddCircleIcon primary="Add product" />}/>
                <Tab sx={{}} onClick={() => tabs('/addadmin')} icon={<PersonAddIcon primary="Add Admin" />} />
            </Tabs>

    );
};

export default DashBoardNav;











