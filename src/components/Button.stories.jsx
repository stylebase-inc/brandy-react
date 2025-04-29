import React from "react";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    iconPosition: {
      control: "select",
      options: ["before", "after"],
    },
    icon: {
      control: "text",
      description: "Icon URL for the button",
    },
  },
};

const Template = (args) => <Button {...args} />;

export const WithIconBefore = Template.bind({});
WithIconBefore.args = {
  label: "Upload",
  icon: "/assets/link-m.svg",
  iconPosition: "before",
  primary: false,
};

export const WithIconAfter = Template.bind({});
WithIconAfter.args = {
  label: "Download",
  icon: "/assets/uploadLine.svg",
  iconPosition: "after",
  primary: true,
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  label: "Submit",
  icon: null,
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  label: "Primary Button",
  icon: "/assets/edit.png",
  primary: true,
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  label: "Secondary Button",
  icon: "/assets/edit.png",
  primary: false,
};

export const ButtonGroup = Template.bind({});
ButtonGroup.args = {
  buttons: [
    {
      label: "Cancel",
      icon: "/assets/edit.png",
      primary: false,
    },
    {
      label: "Save",
      icon: "/assets/uploadLine.svg",
      iconPosition: "after",
      primary: true,
    },
  ],
};
