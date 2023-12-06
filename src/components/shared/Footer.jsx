import { Box, Button, IconButton, Typography } from "@mui/material";

// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

const navLinks = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "Pages",
    pathname: "/pages",
  },
  {
    route: "Category",
    pathname: "/category",
  },
  {
    route: "News",
    pathname: "/news",
  },
  {
    route: "Post",
    pathname: "/post",
  },
  {
    route: "Contact",
    pathname: "/contact",
  },
];
const Footer = () => {
  return (
    <Box className="mt-36 px-4 py-8 bg-[#300808]">
      {/* icons */}
      <Box
        className="w-full text-center"
        sx={{
          "& svg": {
            color: "white",
          },
        }}
      >
        <IconButton aria-label="facebook">
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="instagram">
          <InstagramIcon />
        </IconButton>
        <IconButton aria-label="twitter">
          <TwitterIcon />
        </IconButton>
      </Box>

      {/* navlinks */}
      <Box className="w-full text-center">
        {navLinks.map((link) => (
          <Link key={link} href={link.pathname}>
            <Button className="text-white">{link.route}</Button>
          </Link>
        ))}
      </Box>
      <Typography variant="body2" color="gray" textAlign="center">
        @2023 The News Hub; Design by Jubair Ahmed
      </Typography>
    </Box>
  );
};
export default Footer;
