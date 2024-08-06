import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Box } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, Layers, Business, People, QueryBuilder, Build, Room, Directions, Home, Notifications, HelpOutline } from '@mui/icons-material';
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const icons = [
    { icon: <Layers />, label: 'Layers' },
    { icon: <Business />, label: 'Smart City' },
    { icon: <People />, label: 'Population' },
    { icon: <QueryBuilder />, label: 'Query' },
    { icon: <Build />, label: 'Tools' },
    { icon: <Home />, label: 'Services' },
    { icon: <Room />, label: 'Near Me' },
    { icon: <Directions />, label: 'Direction' },
    { icon: <Notifications />, label: 'Know Your Property' },
    { icon: <HelpOutline />, label: 'Grievance' },
    { icon: <HelpOutline />, label: 'Announcement' },
    { icon: <HelpOutline />, label: 'Help' },
  ];

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <img src="https://res.cloudinary.com/dfaxgzkuc/image/upload/v1717679707/logo_fi8mvl.png" alt="Lgo" style={{ height: '40px', marginRight: '10px' }} />
        <div style={{ position: 'relative', borderRadius: '4px', backgroundColor: '#f1f1f1', marginRight: '20px', flexGrow: 1 }}>
          <div style={{ padding: '0 10px', height: '100%', position: 'absolute', display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search Something..."
            inputProps={{ 'aria-label': 'search' }}
            style={{ color: 'inherit', paddingLeft: '40px', width: '100%' }}
          />
        </div>
        {menuOpen && (
          <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            {icons.map((item, index) => (
              <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginX: '10px' }}>
                <IconButton color="inherit">{item.icon}</IconButton>
                <Typography variant="caption">{item.label}</Typography>
              </Box>
            ))}
          </Box>
        )}
        <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
