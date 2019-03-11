import React from "react";
// import React, { Component } from "react";
import { Form } from "semantic-ui-react";
// eslint-disable-next-line
import { List, Label, Button } from "semantic-ui-react";

import "./participant.css";

class Participant extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron my-5">
          <h1 className="display-4">Nike Survey</h1>
          <p className="lead">
            Nike, Inc. is an American multinational corporation that is engaged
            in the design, development, manufacturing, and worldwide marketing
            and sales of footwear, apparel, equipment, accessories, and
            services. The company is headquartered near Beaverton, Oregon, in
            the Portland metropolitan area.
          </p>
        </div>
        <Form className="form-style">
          <div className="question">
            <Form.Group grouped>
              <label className="lead my-4">
                What are your favorite Nike products?{" "}
              </label>
              <Form.Field
                label="Air Force Ones"
                control="input"
                type="radio"
                name="htmlRadios"
              />
              <Form.Field
                label="Hyperglide Jackets"
                control="input"
                type="radio"
                name="htmlRadios"
              />
              <Form.Field
                label="Baseball hat"
                control="input"
                type="radio"
                name="htmlRadios"
              />
              <Form.Field
                label="Hyperglide Jackets"
                control="input"
                type="radio"
                name="htmlRadios"
              />
            </Form.Group>
          </div>

          <div className="question">
            <Form.Group grouped>
              <label className="lead my-4">
                Where do you buy your Nike products from?{" "}
              </label>
              <Form.Field
                label="Footlocker"
                control="input"
                type="radio"
                name="htmlRadios"
              />
              <Form.Field
                label="Champs"
                control="input"
                type="radio"
                name="htmlRadios"
              />
              <Form.Field
                label="Baseball hat"
                control="input"
                type="radio"
                name="htmlRadios"
              />
              <Form.Field
                label="Hyperglide Jackets"
                control="input"
                type="radio"
                name="htmlRadios"
              />
            </Form.Group>
          </div>

          <div className="question">
            <Form.Group grouped>
              <label className="lead my-4">
                What Nike products do you plan to buy this year?
              </label>
              <Form.Field label="Shoes" control="input" type="checkbox" />
              <Form.Field
                label="Compression & Nike Pro"
                control="input"
                type="checkbox"
              />
              <Form.Field
                label="Tops & Tshirts"
                control="input"
                type="checkbox"
              />
              <Form.Field
                label="Hoodies & Pullovers"
                control="input"
                type="checkbox"
              />
              <Form.Field
                label="Jackets & Vests"
                control="input"
                type="checkbox"
              />
              <Form.Field
                label="Pants & Vests"
                control="input"
                type="checkbox"
              />
              <Form.Field label="Tracksuits" control="input" type="checkbox" />
              <Form.Field
                label="Surf & Swimwear"
                control="input"
                type="checkbox"
              />
              <Form.Field
                label="Accessories & Equipment"
                control="input"
                type="checkbox"
              />
            </Form.Group>
          </div>
          <div className="d-flex justify-content-center submit-btn">
            <Form.Field className="btn btn-danger px-5">Submit</Form.Field>
          </div>
        </Form>{" "}
      </div>
    );
  }
}

export default Participant;
