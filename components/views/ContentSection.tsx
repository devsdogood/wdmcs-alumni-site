import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IContentSection } from "../../@types/generated/contentful";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

// Imported typography for the footer
import { ActionIcon } from "@mantine/core";
import { Image } from "@mantine/core";
import { Text } from "@mantine/core";
import { Divider } from "@mantine/core";
import { ThemeIcon } from "@mantine/core";
import { TextInput } from '@mantine/core';

import { useNotifications } from '@mantine/notifications';

//grid
import { Grid, Center, Container, Button } from '@mantine/core';

const options = {
  renderMark: {
    // @ts-ignore
    [MARKS.BOLD]: (text) => <b style={{ color: "black" }}>{text}</b>,
  },
  renderNode: {
    // @ts-ignore
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 style={{ color: "orange" }}>{children}</h1>
    ),
    // @ts-ignore
    [BLOCKS.HR]: (node, children) => {
      const notifications = useNotifications();

      return (
      <div>
        <br></br>
        <Divider size="sm" />
        <br></br>
        <br></br>

        {/* West Des Moines School Logo for the footer */}
        {/* <img src="https://www.wdmcs.org/cms/lib/IA50000653/Centricity/Template/GlobalAssets/images///logos/wdmcs.png" alt="logo" height="65px" width="auto" margin-left="20px" /> */}

        {/* Icons for the footer */}

        
        <Grid>
          <Grid.Col span={4} >
            <Container>
              <img src="https://www.wdmcs.org/cms/lib/IA50000653/Centricity/Template/GlobalAssets/images///logos/wdmcs.png" alt="logo" height="65px" width="auto" margin-left="20px" />
              <br/ >
            <br/ >
              <a href="mailto:wdmcsfoundation@gmail.com">wdmcsfoundation@gmail.com </a>
            <br/ >
            <strong >WDM Community School Foundation</strong>
            </Container>
          </Grid.Col>

          <Grid.Col span={4}>
            <Container>
            </Container>
          </Grid.Col>

          
            <Grid.Col span={4}>
            
              <Container>
            
                
                <ActionIcon style={{ margin: "10px"}} radius="md" size="xl"> <a href ="https://www.wdmcs.org"><img src="https://www.fouroaks.org/application/files/8616/1289/0745/1519903383841.png" alt = "webpage"height="45px" width="auto" border-radius= "25px" ></img></a></ActionIcon>
                <ActionIcon style={{ margin: "10px"}} radius="md" size="xl"> <a href="https://www.youtube.com/channel/UCVCXbByKTJtVZzYd3-wwLQA"><img src="https://appletoolbox.com/wp-content/uploads/2015/10/youtube-app.png" alt="facebook" height="45px" width="auto"></img></a></ActionIcon>
                <ActionIcon style={{ margin: "10px"}} radius="md" size="xl"> <a href="https://www.instagram.com/wdmcs_district/?hl=en"><img src="https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png" alt="instagram" height="60px" width="auto"></img></a></ActionIcon>
                <ActionIcon style={{ margin: "10px"}} radius="md" size="xl"> <a href="https://twitter.com/WDMCS?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src="https://purepng.com/public/uploads/large/purepng.com-twitter-icon-ios-7symbolsiconsapple-iosiosios-7-iconsios-7-721522596687v78wl.png" alt="twitter" height="46px" width="auto"></img></a></ActionIcon>
                <ActionIcon style={{ margin: "10px"}} radius="md" size="xl"> <a href="https://www.facebook.com/wdmcs/"><img src="https://addisinsight.net/wp-content/uploads/2021/11/app-icons-facebook-1.png" alt="facebook" height="40px" width="auto"></img></a></ActionIcon>
                <br></br>
                
                  <TextInput placeholder="Your email" label="WDMCS Alumni Association Newsletter" description="Sign up for news over the West Des Moines Community School District." radius="md" style={{float: "right"}}/>
                  <Button color="orange" style={{ marginTop: '5px' }} onClick={() => notifications.showNotification({message: "Thanks for signing up!", color: 'green'})}>Submit</Button>

              </Container>
            
            </Grid.Col>
        </Grid>
        

        {/*
        <Grid>
          <Grid.Col  span={4} style={{width: '100%'}}>
            <img src="https://www.wdmcs.org/cms/lib/IA50000653/Centricity/Template/GlobalAssets/images///logos/wdmcs.png" alt="logo" height="65px" width="auto" margin-left="20px" />
            <br></br>
            <strong >WDM Community School Foundation</strong>
            // <a href="mailto:wdmcsfoundation@gmail.com">wdmcsfoundation@gmail.com </a> 

            Contentful Stuff
          </Grid.Col>
          <Grid.Col span={4} style={{width: '100%'}}></Grid.Col>
          <Center>
            <Grid.Col span={3} style={{width: '100%'}}>
              <ActionIcon style={{ margin: "10px"}} radius="md" size="xl"> <a href ="https://www.wdmcs.org"><img src="https://www.fouroaks.org/application/files/8616/1289/0745/1519903383841.png" alt = "webpage"height="45px" width="auto" border-radius= "25px" ></img></a></ActionIcon>
              <ActionIcon style={{ margin: "10px"}} radius="md" size="xl"> <a href="https://www.youtube.com/channel/UCVCXbByKTJtVZzYd3-wwLQA"><img src="https://appletoolbox.com/wp-content/uploads/2015/10/youtube-app.png" alt="facebook" height="45px" width="auto"></img></a></ActionIcon>
              <ActionIcon style={{ margin: "10px"}} radius="md" size="xl"> <a href="https://www.instagram.com/wdmcs_district/?hl=en"><img src="https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png" alt="instagram" height="60px" width="auto"></img></a></ActionIcon>
              <ActionIcon style={{ margin: "10px"}} radius="md" size="xl"> <a href="https://twitter.com/WDMCS?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src="https://purepng.com/public/uploads/large/purepng.com-twitter-icon-ios-7symbolsiconsapple-iosiosios-7-iconsios-7-721522596687v78wl.png" alt="twitter" height="46px" width="auto"></img></a></ActionIcon>
              <ActionIcon style={{ margin: "10px"}} radius="md" size="xl"> <a href="https://www.facebook.com/wdmcs/"><img src="https://addisinsight.net/wp-content/uploads/2021/11/app-icons-facebook-1.png" alt="facebook" height="40px" width="auto"></img></a></ActionIcon>
            </Grid.Col>
          </Center>
          <Grid.Col span={4}>
          <a href="mailto:wdmcsfoundation@gmail.com">wdmcsfoundation@gmail.com </a>
          </Grid.Col>
          <Grid.Col span={4}>
          <p> dab </p>
          </Grid.Col>
          <Center>
            <Grid.Col span={4}>
              <TextInput placeholder="Your email" label="WDMCS Alumni Association Newsletter" description="Sign up for news over the West Des Moines Community School District." radius="md" style={{float: "right"}}/>
            </Grid.Col>
          </Center>
        </Grid>
        */}
        

        {/* <ActionIcon style={{ margin: "10px"}} radius="md" size="xl"> <a href = "wdmcsfoundation@gmail.com"><img src="https://www.fouroaks.org/application/files/8616/1289/0745/1519903383841.png" alt = "webpage"height="45px" width="auto" border-radius= "25px" ></img></a></ActionIcon>
        <ActionIcon style={{ margin: "10px"}} radius="md" size="xl"> <a href="https://www.youtube.com/channel/UCVCXbByKTJtVZzYd3-wwLQA"><img src="https://appletoolbox.com/wp-content/uploads/2015/10/youtube-app.png" alt="facebook" height="45px" width="auto"></img></a></ActionIcon>
        <ActionIcon style={{ margin: "10px"}} radius="md" size="xl"> <a href="https://www.instagram.com/wdmcs_district/?hl=en"><img src="https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png" alt="instagram" height="60px" width="auto"></img></a></ActionIcon>
        <ActionIcon style={{ margin: "10px"}} radius="md" size="xl"> <a href="https://twitter.com/WDMCS?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src="https://purepng.com/public/uploads/large/purepng.com-twitter-icon-ios-7symbolsiconsapple-iosiosios-7-iconsios-7-721522596687v78wl.png" alt="twitter" height="46px" width="auto"></img></a></ActionIcon>
        <ActionIcon style={{ margin: "10px"}} radius="md" size="xl"> <a href="https://www.facebook.com/wdmcs/"><img src="https://addisinsight.net/wp-content/uploads/2021/11/app-icons-facebook-1.png" alt="facebook" height="40px" width="auto"></img></a></ActionIcon>
        
        {/* Email newsletter signup textbox thing */}
        {/* <TextInput placeholder="Your email" label="WDMCS Alumni Association Newsletter" description="Sign up for news over the West Des Moines Community School District." radius="md" style={{float: "right"}}/> */}
        <br></br>
        <br></br>

      </div>
    )},
  },
};
type ContentSectionProps = { entry: IContentSection };

const ContentSection: React.FC<ContentSectionProps> = ({
  entry,
}: ContentSectionProps) => (
  // @ts-ignore
  <div
    className={`${entry.fields.fullWidth ? "container-full" : "container"} mt-4 w-5/6`}
    style={{ textDecoration: "bold"}}
  >
    {documentToReactComponents(entry.fields.content, options)}
  </div>
);

export default ContentSection;