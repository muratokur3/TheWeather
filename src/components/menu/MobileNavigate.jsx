import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuIcon from '@mui/icons-material/Menu';
import RightMenu from './RightMenu';

const MobileNavigate=()=> {
  const [value, setValue] = React.useState('recents');

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <BottomNavigation sx={{ 
        width: "100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: .5,
        backgroundColor: "rgba(4,4,4)",
        color: "white",
     }} value={value} onChange={handleChange}>
    
      <BottomNavigationAction
      sx={{
        color:"white"

      }}
        label="Nearby"
        value="nearby"
        icon={<MenuIcon />}
      />
       <BottomNavigationAction
      sx={{
        color:"white"

      }}
        label="Nearby"
        value="nearby"
        icon={<MenuIcon />}
      />
      <RightMenu/>
    </BottomNavigation>
  );
}
export default MobileNavigate;