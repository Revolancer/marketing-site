import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { keyframes, styled } from "@/stitches.config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const FAQItem = ({ children, label }: { children?: any; label: string }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger asChild>
        <FAQTrigger>
          {label}
          <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
        </FAQTrigger>
      </Collapsible.Trigger>
      <Content>{children}</Content>
    </Collapsible.Root>
  );
};

const FAQTrigger = styled("div", {
  paddingBlock: "$3",
  paddingInline: "$4",
  borderWidth: "$1",
  borderStyle: "$solid",
  borderColor: "$neutral300",
  borderRadius: "$1",
  boxShadow: "$2",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "&:hover": {
    boxShadow: "$1",
  },
});

const slideUp = keyframes({
  from: {
    height: "var(--radix-collapsible-content-height)",
  },
  to: {
    height: 0,
  },
});

const slideDown = keyframes({
  from: {
    height: 0,
  },
  to: {
    height: "var(--radix-collapsible-content-height)",
  },
});

const Content = styled(Collapsible.Content, {
  display: "flex",
  flexDirection: "column",
  gap: "$5",
  padding: "$1",
  overflow: "hidden",

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms ease-out`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms ease-out`,
  },
});

export default FAQItem;
