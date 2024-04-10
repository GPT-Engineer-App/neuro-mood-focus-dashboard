import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

const TopBar = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" bg="blue.500" p={4} boxShadow="sm">
      <Breadcrumb fontWeight="medium" fontSize="sm" color="white">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box>
        <Menu>
          <MenuButton as={IconButton} aria-label="Options" icon={<FaUser />} variant="solid" bg="white" color="blue.500" />
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default TopBar;
