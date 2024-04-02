import { Box, Button, Container, Stack, Typography } from "@mui/material"
import Link from "next/link"

const Navbar = () => {
  return (
    <>
      <Container>
        <Stack
          direction="row"
          paddingTop="20px"
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
            <Button color="inherit"><Link href={'/categories'}>Categories</Link></Button >
            <Button color="inherit"><Link href={'/products'}>Products</Link></Button >
            <Button color="inherit"><Link href={'/flashsale'}>Flash Sale</Link></Button >
            <Button color="inherit"><Link href={'/aboutus'}>About Us</Link></Button >
            <Button color="inherit"><Link href={'/contactus'}>Contact Us</Link></Button >
          </Box>
        </Stack>
      </Container>
    </>
  )
}

export default Navbar