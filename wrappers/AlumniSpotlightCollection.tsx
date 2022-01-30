import { Grid, Center } from "@mantine/core";

const AlumniSpotlightCollection: React.FC = ({ children }) => {
  return (
    <Center>
      <Grid className="justify-content-center">{children}</Grid>
    </Center>
  );
};

export default AlumniSpotlightCollection;
