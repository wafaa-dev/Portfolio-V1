import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GitHubIcon from '@material-ui/icons/GitHub';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';


const useStyles = makeStyles((e) => ({
  root: {
    display: "flex",
    width: 800,
    background: 'rgba(0,0,0,0.15)',
    margin: '30px',
  },

  media: {
    height: 250,
    width: 200,
    borderRadius: 10,

  },
  title: {
    fontFamily: 'Pangolin',
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#47cca2',

  },
  desc: {
    fontFamily: 'Pangolin',
    fontSize: '1rem',
    color: '#272928',
  },
  content: {
    padding: (0, 0, 0, 15),
    width: 650,
    textAlign: "center",
  },
  chip: {
    color: "#42c8f5"
  }

})
)
export default function Project({ project, checked }) {

  const classes = useStyles();
  const toolChip =
    React.Children.toArray(project.tools.map((tool) => (
      <Chip
        variant="outlined"
        icon={<DoneIcon />}
        label={tool}
      />
    )))
  return (
    <Card className={classes.root}>
      <Box border={0} >
        <CardMedia
          className={classes.media}
          image={project.imageUrl}
        />
      </Box>

      <CardContent className={classes.content} >
        <Box >
          <Typography
            gutterBottom
            component="h1"
            className={classes.title}
          >
            {project.title}
          </Typography>
        </Box>
        <Box   >
          <Typography
            component="p"
            className={classes.desc}
          >
            {project.description}
          </Typography>
        </Box>
        <Box >
          <h4 style={{ margin: 0, color: "#81918c" }}>
            Github repo
          </h4>
          <IconButton
            aria-haspopup="true"
            target="_blank" href={project.repo}
          >
            <GitHubIcon className={classes.github} style={{ padding: '0' }} />
          </IconButton>
        </Box>
        <Box className="chip container">
          <Box>
            {toolChip}
          </Box>
        </Box>
      </CardContent>
    </Card>

  )
}