"use client"

import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

interface cardprops {
  data: {
    title: string;
    description: string;
    src: string;
  };
}
const WorkCard: React.FC<cardprops> = ({ data }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Card sx={{ minHeight: "280px", width: 320 }}>
            <CardCover>
              <img
                src={data.src}
                srcSet={data.src}
                loading="lazy"
                alt={data.src}
              />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                
              }}
            />
            <CardContent sx={{ justifyContent: "flex-end" }}>
              <Typography level="title-lg" textColor="#fff">
                {data.title}
              </Typography>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="bg-black">
          <DialogHeader >
            <DialogTitle className="text-yellow-500 text text-center">{data.title}</DialogTitle>
            <DialogDescription className="text-white">{data.description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WorkCard;
