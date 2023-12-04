"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { IconButton, Stack } from "@mui/material";

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from "next/link";

const navLinks = [
    {
        route: "Home",
        pathname: "/"
    },
    {
        route: "Pages",
        pathname: "/pages"
    },
    {
        route: "Category",
        pathname: "/category"
    },
    {
        route: "News",
        pathname: "/news"
    },
    {
        route: "Post",
        pathname: "/post"
    },
    {
        route: "Contact",
        pathname: "/contact"
    },
];

const Navbar = () => {
  return (
    <AppBar className="bg-[#300808]" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} width={100} height={100} alt="logo" />
          <Box className="w-full text-center">
            {navLinks.map((link) => (
              <Link key={link} href={link.pathname}>
               <Button className="text-white">{link.route}</Button>
              </Link>
            ))}
          </Box>
          <Box>
            <Stack sx={{
                "& svg": {
                    color: "white"
                }
            }} direction="row">
            <IconButton  aria-label="facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton  aria-label="instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton  aria-label="twitter">
              <TwitterIcon />
            </IconButton>
            </Stack>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
