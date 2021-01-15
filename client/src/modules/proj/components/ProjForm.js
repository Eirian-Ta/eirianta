import React, { Component } from 'react';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { withAddProj } from '../providers';

@withAddProj
export default class ProjForm extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    event.preventDefault();

    this.props.addProj({
      title: event.target.title.value,
      type: event.target.type.value, 
      desc: event.target.desc.value, 
      tech: event.target.tech.value, 
      monPic: event.target.monPic.value,
      mobPic: event.target.mobPic.value,
      liveURL: event.target.liveURL.value,
      codeURL: event.target.codeURL.value,
      viewURL: event.target.viewURL.value
    });
  }

  render() {
    return (
      <div className="proj-form">
        <h2>Create new project</h2>
        <Form onSubmit={(event) => this.submitForm(event)}>
          <FormGroup>
            <Label for="projTitle">Proj Title</Label>
            <Input type="text" name="title" id="projTitle" placeholder="Add a title" />
          </FormGroup>
          <FormGroup>
            <Label for="projType">Project Type</Label>
            <Input type="textarea" name="type" id="projType" placeholder="Project Type" />
          </FormGroup>
          <FormGroup>
            <Label for="projDesc">Project Description</Label>
            <Input type="textarea" name="desc" id="projDesc" placeholder="Project Desc" />
          </FormGroup>
          <FormGroup>
            <Label for="projTech">Project Tech</Label>
            <Input type="textarea" name="tech" id="projTech" placeholder="Project Tech" />
          </FormGroup>
          <FormGroup>
            <Label for="projMonPic">Project Monitor Pic URL</Label>
            <Input type="textarea" name="monPic" id="projMonPic" placeholder="Project Monitor Pic URL" />
          </FormGroup>
          <FormGroup>
            <Label for="projMobPic">Project Mobile Pic URL</Label>
            <Input type="textarea" name="mobPic" id="projMobPic" placeholder="Project Mobile Pic URL" />
          </FormGroup>
          <FormGroup>
            <Label for="projLiveURL">Live URL</Label>
            <Input type="textarea" name="liveURL" id="projLiveURL" placeholder="Project Live URL" />
          </FormGroup>
          <FormGroup>
            <Label for="projCodeURL">Code URL</Label>
            <Input type="textarea" name="codeURL" id="projCodeURL" placeholder="Project Code URL" />
          </FormGroup>
          <FormGroup>
            <Label for="projViewURL">View URL</Label>
            <Input type="textarea" name="viewURL" id="projViewURL" placeholder="Project View URL" />
          </FormGroup>
          <Button className="submit-button">Submit new proj</Button>
        </Form>
      </div>
    )
  }
}
