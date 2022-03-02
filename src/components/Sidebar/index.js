import React from 'react'
import{SidebarContainer, Icon, CloseIcon, SidebarMenu, SiderbarLink, SidebarRoute, SideBtnWrap} from './SidebaElement';
const Sidebar = ({isOpen, toggle}) => {
  return (
   <SidebarContainer isOpen={isOpen} onClick={toggle}>
       <Icon>
           <CloseIcon>

           </CloseIcon>
       </Icon>
       <SidebarMenu>
           <SiderbarLink to="/">Pizzas</SiderbarLink>
           <SiderbarLink to="/">Desserts</SiderbarLink>
           <SiderbarLink to="/">Full Menu</SiderbarLink>
       </SidebarMenu>
       <SideBtnWrap>
           <SidebarRoute to="/">Order Now</SidebarRoute>
       </SideBtnWrap>
   </SidebarContainer>
  )
}

export default Sidebar;