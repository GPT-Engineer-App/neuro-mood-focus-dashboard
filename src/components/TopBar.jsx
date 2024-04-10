import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Image } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

const TopBar = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" bg="blue.500" p={4} boxShadow="sm">
      <Image src="path/to/logo.png" alt="Logo" mr={8} />
      <Breadcrumb fontWeight="medium" fontSize="sm" color="white" flex={1}>
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
