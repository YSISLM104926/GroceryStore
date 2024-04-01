import { Box, Button, Container, Stack, Typography } from "@mui/material"
import Link from "next/link"

const Navbar = () => {
  return (
    <>
      <Container>
        <Stack
          direction="row"
          marginTop="20px"
          justifyContent="space-between"
          alignContent="center"
        >
          <Typography
            fontSize="27px"
            fontWeight={550}
          >Grocery<span
            className="text-emerald-500"
          >Store</span></Typography>

          <Box sx={{
            display: "flex",
            gap: "20px"
          }}>
            <Button color="inherit"><Link href={'/'}>Home</Link></Button >
            <Button color="inherit"><Link href={'/'}>Categories</Link></Button >
            <Button color="inherit"><Link href={'/'}>Products</Link></Button >
            <Button color="inherit"><Link href={'/'}>Flash Sale</Link></Button >
            <Button color="inherit"><Link href={'/'}>About Us</Link></Button >
            <Button color="inherit"><Link href={'/'}>Contact Us</Link></Button >
          </Box>
        </Stack>
      </Container>
    </>
  )
}

export default Navbar