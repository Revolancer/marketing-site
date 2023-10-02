import React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { keyframes, styled } from '@revolancer/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Span } from '@revolancer/ui/text';

const FAQItem = ({ children, label }: { children?: any; label: string }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger asChild>
        <FAQTrigger>
          {label}
          <Span css={{ width: '1em' }}>
            <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
          </Span>
        </FAQTrigger>
      </Collapsible.Trigger>
      <Content>{children}</Content>
    </Collapsible.Root>
  );
};

const FAQTrigger = styled('div', {
  paddingBlock: '$3',
  paddingInline: '$4',
  borderWidth: '$1',
  borderStyle: '$solid',
  borderColor: '$neutral300',
  borderRadius: '$1',
  boxShadow: '$2',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '&:hover': {
    boxShadow: '$1',
  },
});

const open = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-collapsible-content-height)' },
});

const close = keyframes({
  from: { height: 'var(--radix-collapsible-content-height)' },
  to: { height: 0 },
});

const Content = styled(Collapsible.Content, {
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  paddingInline: '$1',
  paddingBlockStart: '$3',
  '&[data-state="open"]': {
    animation: `${open} 200ms ease-in-out forwards`,
  },
  '&[data-state="closed"]:not(:empty)': {
    animation: `${close} 200ms ease-in-out forwards`,
  },
});

export default FAQItem;
