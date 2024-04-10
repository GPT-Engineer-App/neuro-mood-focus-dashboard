import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Image, HStack, Button, Text } from "@chakra-ui/react";
import { FaUser, FaBars, FaCrown } from "react-icons/fa";

const TopBar = ({ onToggleSidebar }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" bg="blue.500" p={4} boxShadow="sm">
      <IconButton icon={<FaBars />} variant="ghost" color="white" onClick={onToggleSidebar} mr={4} />
      <Image src="path/to/logo.png" alt="Logo" mr={8} />
      <Breadcrumb fontWeight="medium" fontSize="sm" color="white" flex={1}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <HStack spacing={4}>
        <Menu>
          <MenuButton as={Button} rightIcon={<FaCrown />} variant="solid" bg="white" color="blue.500">
            Devices
          </MenuButton>
          <MenuList>
            <MenuItem icon={<FaCrown />}>
              Neurosity Crown{" "}
              <Text as="span" color="green.500" ml={2}>
                Connected
              </Text>
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={IconButton} aria-label="Options" icon={<FaUser />} variant="solid" bg="white" color="blue.500" />
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default TopBar;
