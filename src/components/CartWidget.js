import { Badge } from "@mui/material"
import { ShoppingCartOutline} from "@mui/material"


const cartWidget = () => {
  return (

   <Badge badgeContent = {0} color="primary" >
        <ShoppingCartOutline />
    </Badge>
  )
}

export default cartWidget