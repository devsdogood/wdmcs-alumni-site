import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IAlumSpotlight } from "../../@types/generated/contentful";
import { Card, Image, Center, Grid, Badge, Title } from "@mantine/core";

type AlumSpotlightPreviewProps = {
  entry: IAlumSpotlight;
};

const AlumSpotlightPreview: React.FC<AlumSpotlightPreviewProps> = ({
  entry,
}) => {
  return (
    <Card
      style={{ padding: "1%", width: "400px", height: "550px", margin: "1%" }}
    >
      {entry.fields.image && (
        <Image
          alt={entry.fields.image?.fields.file.fileName}
          src={entry.fields.image?.fields.file.url}
          style={{ width: "auto" }}
        />
      )}
      <div className="mt-3">
        <Grid className="mb-3">
          <Grid.Col span={10}>
            <Title order={3}>{entry.fields.name}</Title>
          </Grid.Col>
          <Grid.Col span={2}>
            <Badge color="orange" variant="light" style={{ margin: "1%" }}>
              {entry.fields.graduationYear}
            </Badge>
          </Grid.Col>
        </Grid>
        {entry.fields.content &&
          documentToReactComponents(entry.fields.content)}
      </div>
    </Card>
  );
};

export default AlumSpotlightPreview;
