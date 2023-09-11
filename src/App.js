import logo from './logo.png';
import { Typography, Box, Card } from '@mui/material';
import JSONData from './data.json';

const textBlocks = {
  codeBlock: (codetxt) => {
    return(
      <Box sx={{marginLeft: '100px', marginRight: '100px', marginTop: '10px', marginBottom: '10px'}}>
        <Card sx={{flex: '1', width: {md: 'auto', xs: 'auto'}, bgcolor: '#0a1929', height: 'auto', margin: 'auto'}}>
          <Box sx={{display: 'flex', marginBotton: '10px'}}>
              <Box sx={{marginLeft: '10px', marginTop: '10px', marginRight: '5px', borderRadius: '50px', height: '12px', width: '12px', bgcolor: 'red'}}/>
              <Box sx={{marginTop: '10px', borderRadius: '50px', height: '12px', width: '12px', bgcolor: 'yellow'}}/>
              <Box sx={{marginLeft: '5px', marginTop: '10px', borderRadius: '50px', height: '12px', width: '12px', bgcolor: 'green'}}/>
          </Box>
          <Typography color='cyan' sx={{margin: '10px', marginLeft: '20px', marginTop: '12px'}}>
              <code>
                  {"$ " + codetxt}
              </code>
          </Typography>
        </Card>
      </Box>
    );
  },
  textBlock: (codetxt) => {
    return(
      <Typography sx={{color: 'white'}} fontSize='16pt'>
        {codetxt}
      </Typography>
    );
  },
  subsectionBlock: (codetxt) => {
    return(
      <Typography sx={{color: 'white', marginTop: '13px'}} fontSize='18pt' fontStyle='italic'>
        {codetxt}
      </Typography>
    );   
  },
  linkBlock: (linktxt) => {
    return(
      <a href={linktxt} style={{textAlign: "center", color: 'cyan', fontSize: '18pt'}}>
        {linktxt}
      </a>
    )
  },
  installBlock: (repolink) => {
    return(
      <Box sx={{marginTop: '30px'}}>
        <Typography sx={{color: 'white'}} fontSize='16pt'>
          You must have Git installed. It is essential to your success on this project. Most systems come pre-installed with git (type git in your preferred Terminal). Go here to <a style={{color: 'cyan'}} href="https://git-scm.com/download">install Git.</a> You may also enjoy using <a style={{color: 'cyan'}} href='https://desktop.github.com/'>GitHub Desktop.</a>
        </Typography>
        <Typography sx={{color: 'white', marginTop: '10px'}} fontSize='16pt'>
          Install <a style={{color: 'cyan'}} href="https://nodejs.org/">Node.js</a>
        </Typography>
        <Typography sx={{color: 'white', marginTop: '15px'}} fontSize='16pt'>
          Clone the Repository <a style={{color:"cyan"}} href={repolink}> from the GitHub</a>:
        </Typography>
      </Box>
    );
  }
}


function App() {
  const json = JSON.parse(JSON.stringify(JSONData));
  console.log(json);
  return (
    <Box sx={{backgroundColor: '#282c34', height: '100%'}}>
      <img src={logo} className="App-logo" alt="logo" style={{height: '100px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
      <Typography align='center' fontSize='20pt' color='white' sx={{display: 'flex', flexDirection: 'column'}}>
        HASS PATHWAYS DEVELOPER SETUP
      </Typography>
      {
        (json.map((el) => {
          const header = Object.keys(el)[0];
          return(
            <Box sx={{marginLeft: '20px'}}>
              <Typography sx={{color: 'white', marginTop: '100px'}} fontSize='20pt'>
                {header}
              </Typography>
              {
                el[header].map((innerel) => {
                  return(
                    textBlocks[innerel.type](innerel.content)
                  );
                })
              }
            </Box>
          );
        }))
      }
      <Typography align='center' sx={{color: 'white', marginTop: '50px'}}>
        This site was created by Michael Anderson, this information was last updated on 9/10/2023
      </Typography>
      <Typography align='center' sx={{color: 'white', marginTop: '50px'}}>
        The HASS Pathways Project, 2023
      </Typography>
    </Box>
  );
}

export default App;