"use client";
import { Box, Container, Typography } from "@mui/material";
import headerLogo from "@/assets/header-logo.png";
import Image from "next/image";
import { getDate } from "@/utils/getDate";

const Header = () => {
    const currentDate = getDate()
  return (
    <Box className="w-full my-6">
      <Container>
        <Image
          className="mx-auto"
          src={headerLogo}
          width={300}
          height={300}
          alt="header-logo"
        />
        <Typography
          fontWeight="bold"
          marginTop="10px"
          variant="body1"
          color="gray"
          textAlign="center"
        >
          Journalism Without Fear or Favour
        </Typography>
        <Typography
          marginBottom="15px"
          variant="body2"
          color="gray"
          textAlign="center"
        >
         {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};
export default Header;
