import React, { useState } from 'react';

import {CircularProgress} from "@heroui/react";

export default function Percentage() {
  return (
    <CircularProgress
      color="success"
      formatOptions={{style: "unit", unit: "kilometer"}}
      label="Speed"
      showValueLabel={true}
      size="lg"
      value={80}
    />
  );
}