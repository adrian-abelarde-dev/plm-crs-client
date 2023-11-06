import { AppShell } from "@mantine/core";

import React from "react";

// ? HeaderNavbar is a prop that will be passed to Shell to defined the header
const Shell = ({ HeaderNavbar }) => {
  return (
    // ! Passed to an AppShell component to handle responsive layout in the future
    <AppShell>
      <AppShell.Header zIndex={100}>{HeaderNavbar}</AppShell.Header>
    </AppShell>
  );
};

export default Shell;
