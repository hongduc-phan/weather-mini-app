import React from "react";
import moment from "moment";

//compoent layout
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 80
  },
  temp: {
    textAlign: "center"
  }
});

export default function MediaCard({ item, city, units }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardHeader
          title={city.name || ""}
          subheader={moment(item.dt_txt).format("MMM Do YY")}
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        >
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.temp}
          >
            <span>
              {item.main.temp} {units === "metric" ? "C" : "F"}
            </span>
          </Typography>
        </CardMedia>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Humidity: {item.main.humidity || ""} %
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Wind direction: {item.wind.deg || ""}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Wind speed: {item.wind.speed || ""} mi/h
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
