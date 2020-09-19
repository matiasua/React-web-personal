import React from "react";

export default class Mapa extends React.Component {
  render() {
    return (
      <div className="embed-responsive embed-responsive-4by3">
        <iframe
          className="embed-responsive-item"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.7970264120913!2d-70.60820344869063!3d-33.50665760769181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d06c59550bc7%3A0x25cbbdd9d3831169!2sEstadio%20Monumental%20David%20Arellano!5e0!3m2!1ses-419!2scl!4v1600492951511!5m2!1ses-419!2scl"
        ></iframe>
      </div>
    );
  }
}
