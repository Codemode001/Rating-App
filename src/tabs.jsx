import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  useTab,
  useMultiStyleConfig,
  Button,
  Box,
} from "@chakra-ui/react";

export default function Tab() {
  const CustomTab = React.forwardRef((props, ref) => {
    // 1. Reuse the `useTab` hook
    const tabProps = useTab({ ...props, ref });
    const isSelected = !!tabProps["aria-selected"];

    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = useMultiStyleConfig("Tabs", tabProps);

    return (
      <Button __css={styles.tab} {...tabProps}>
        <Box as="span" mr="2">
          {isSelected ? "😎" : "😐"}
        </Box>
        {tabProps.children}
      </Button>
    );
  });
  return (
    <Tabs>
      <TabList>
        <CustomTab>Star reviews</CustomTab>
        <CustomTab>1 - 100</CustomTab>
        <CustomTab>1 - 10</CustomTab>
      </TabList>
      <TabPanels>
        <TabPanel>Star reviews</TabPanel>
        <TabPanel>1 - 100</TabPanel>
        <TabPanel>1 - 10</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
