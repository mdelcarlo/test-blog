import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Typography } from "@material-ui/core";

const LoadingSkeleton = ({ variant }) => (
    <Typography component="div" key={variant} variant={variant}>
      <Skeleton />
    </Typography>
  );

export default LoadingSkeleton;
