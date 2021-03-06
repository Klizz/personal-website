import React from 'react';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      minWidth: 180,
      minHeight: 300,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    content: {
      height: 245,
    }
  });

const PortfolioCard = (props) => {
    const classes = useStyles();
    return (
        <div className="col-3 margin-bottom">
          <Card className={classes.root} variant="outlined">
            <CardContent className={classes.content}>
                <span className="highlight-text">{props.title}</span>
              <p>{props.text}</p>
            </CardContent>
            <CardActions>
              <a href={props.link}>
              <Button>GitHub</Button>
              </a>
              <a href={props.demo}>
              <Button variant={props.variant}>Demo</Button>
              </a>
            </CardActions>
          </Card>
        </div>
    )
}

export default PortfolioCard;
