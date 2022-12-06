import Heading from './components/Heading';
import Section from './components/Section';

export default function Page() {
  return (
    <Section>
      <Heading level={1}></Heading>
      <Section>
        <Heading level={2}>Heading</Heading>
        <Section>
          <Heading level={3}>Sub-heading</Heading>
          <Section>
            <Heading level={4}>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
