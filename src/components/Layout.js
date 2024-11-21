import { Box, useMediaQuery } from "@mui/material"
import SideBar from "../scenes/global/SideBar"
import Topbar from "../scenes/global/Topbar"
import { Outlet } from "react-router-dom"
import { useState } from "react"



const Layout = (selected,setSelected) => {
    const isNonMobile = useMediaQuery("(min-width: 600px)")
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%" >
      <SideBar 
        isNonMobile={isNonMobile} 
        isSidebarOpen={isSidebarOpen}
        drawerWidth={'250px'} 
        setIsSidebarOpen={setIsSidebarOpen}
        selected={selected}
        setSelected={setSelected}
        
      />
      
        <Box flex={1}>
          <Topbar 
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <Outlet/>
        </Box>
    </Box>
  )
}

export default Layout
