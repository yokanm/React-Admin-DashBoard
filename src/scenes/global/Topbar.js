import { AppBar, Box, IconButton, InputBase, Toolbar, useTheme} from "@mui/material"
import { ColorModeContext, tokens } from "../../theme"
import { useContext } from "react"
import SearchIcon from '@mui/icons-material/Search'
import DarkModeOutlinedIcon  from "@mui/icons-material/DarkModeOutlined"
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsOutlinedIcon  from "@mui/icons-material/NotificationsOutlined"
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import  MenuIcon from '@mui/icons-material/Menu'



const Topbar = ({isSidebarOpen, setIsSidebarOpen}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none"
      }}
    >
      <Toolbar sx={{justifyContent:"space-between"}}>
        <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        >
        <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <MenuIcon />
              </IconButton>
        </Box>
          <Box 
              display={'flex'} 
              backgroundColor={colors.primary[400]}
              borderRadius={'9px'}
              gap={'3rem'}
              p={'0.1rem 1.5rem'}

          >
            <InputBase sx={{ml:2, flex:1}} placeholder="Search" />
            <IconButton type="button" sx={{p:1}}>
              <SearchIcon/>
            </IconButton>
          </Box>
          {/*Icons */}

          <Box display={'flex'}>
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode ==='dark' ? (
                <DarkModeOutlinedIcon/>
              ) : (
                <LightModeOutlinedIcon/>
              )}
            </IconButton>
            <IconButton>
              <NotificationsOutlinedIcon/>
            </IconButton>
            <IconButton>
            <SettingsOutlinedIcon/>
            </IconButton>
            <IconButton>
            <PersonOutlinedIcon/>
            </IconButton>
            
          </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Topbar
