import { Box } from "@mui/material"

const IframeForm = ({height, src}: {height: string, src: string}) => {
  return (
    <Box component={'iframe'} sx={{ width: '100%', height: height, border: 'none' }} src={src}>Carregando…</Box>
  )
}

export default IframeForm