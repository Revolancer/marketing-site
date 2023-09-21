import { H1 } from '@revolancer/ui/text';
import { ColumnLayout, FullWidth, Div } from '@revolancer/ui/layout';

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
