import { H1 } from '@/components/text/headings';
import { ColumnLayout, FullWidth } from './columns';
import { Div } from './div';

export const PageHeader = ({ title }: { title: string }) => {
  return (
    <Div css={{ backgroundColor: '$neutral100' }}>
      <ColumnLayout>
        <FullWidth css={{ marginBlock: '$12' }}>
          <H1
            css={{
              fontSize: '$h2m',
              lineHeight: '$h2m',
              '@md': { fontSize: '$h2', lineHeight: '$h2' },
            }}
          >
            {title}
          </H1>
        </FullWidth>
      </ColumnLayout>
    </Div>
  );
};
