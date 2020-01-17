import React from "react";

export default class ImageList extends React.Component {
  render() {
    const images = this.props.images.map(({ id, urls, description }) => {
      return <img key={id} src={urls.regular} alt={description} />;
    });

    return <div>{images}</div>;
  }
}
