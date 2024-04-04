import { Box, Typography,CircularProgress } from '@mui/material'


const Loading = () => {
  return (
    <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
            background: " rgba(0, 0, 0, 0.372)",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
          }}
        >
          <Typography color="primary" fontSize={"3rem"}>
            konum alınıyor {" "}
          </Typography>
          <CircularProgress />
        </Box>
  )
}

export default Loading