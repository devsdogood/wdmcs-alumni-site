import Link from 'next/link'
import { IEvent } from "../../@types/generated/contentful";
import { Button } from '@mantine/core';

import { Card, Image, Text, Badge, Group, useMantineTheme, Grid } from '@mantine/core';

function Demo() {
  
}



type EventPreviewProps = {
  entry: IEvent;
};

const EventPreview: React.FC<EventPreviewProps> = ({ entry }) => {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <div style={{ width: 340, margin: 'auto'}}>
      <Card shadow="sm" padding="lg">
        <Card.Section>
          <Image width={340} src={entry.fields.image.fields.file.url} alt=" " />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>{entry.fields.title}{" "}</Text>
          <Badge color="orange" variant="light">
            Event
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>{entry.fields.description}
          
        </Text>

        <a href={entry.fields.rsvpLink} target="_blank" rel="noreferrer">
        <Button variant="light" color="orange" fullWidth style={{ marginTop: 14 }}>
            <a style={{ textDecoration: 'none' }}>Details</a>
        </Button>
        </a>
      </Card>
    </div>
  );

  return (
    <div className="card" style={{ marginTop:'50px'}}>
      <h3>
        {entry.fields.title}{" "}
      </h3>
      <h4>
        We&apos;d love to see you there! {" "} 
        <Button color="dark" variant="outline" style={{ marginLeft:'50%' }} uppercase>
          {entry.fields.rsvpLink && <Link passHref href={entry.fields.rsvpLink!}>
            <div style={{ textDecoration: 'none' }}>RSVP</div></Link>}
        </Button>
      </h4>
      
      <p>
        {entry.fields.description}
      </p>
      <p>
        <strong>
          Event Start: 
        </strong>
        {entry.fields.start} 
      </p>
      <p>
        <strong>
          Event End: 
        </strong>
        {entry.fields.end}
      </p>
    </div>
  );
};

export default EventPreview;  
