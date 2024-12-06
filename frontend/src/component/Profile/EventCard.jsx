import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export const EventCard = () => {
  return (
    <div>
      <Card sx={{ width: 345 }}>
        <CardMedia
          sx={{ height: 345 }}
          image="https://i.pinimg.com/564x/42/34/d5/4234d5ff6b9c6732c3a8ee0d6b32ca58.jpg"
        />
        <CardContent>
          <Typography variant="h5">Apple</Typography>
          <Typography variant="body2">
            Giảm giá 50% cho đơn hàng đầu tiên
          </Typography>
          <div className="py-2 space-y-2">
            <p>{"Quảng Nam"}</p>
            <p className="text-sm text-yellow-500">7:00 AM 18/08/2024</p>
            <p className="text-sm text-yellow-500">9:00 PM 19/08/2024</p>
          </div>
        </CardContent>
        {false && (
          <CardActions>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </div>
  );
};
