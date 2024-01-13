import React from "react";
import "./App.scss";
import AccordionComponent from "./components/AccordionComponent/AccordionComponent";
import SelectComponent from "./components/SelectComponent/SelectComponent";
import TextInputComponent from "./components/TextInputComponent/TextInputComponent";

function App() {
  return (
    <div className="App">
      <TextInputComponent
        id="ejemplo"
        label="nombre"
        customClass="mui-input-text-tertiary"
      ></TextInputComponent>
      <br />
      <SelectComponent
        id="select"
        label={"puntos"}
        age={10}
        list={[
          { text: "ten", value: 10 },
          { text: "twenty", value: 20 },
          { text: "thirty", value: 30 },
        ]}
        customClass="mui-select-input-secondary"
      ></SelectComponent>
      <br />
      <AccordionComponent
        id="accordion"
        list={[
          {
            title: "Accordion 1",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.`,
          },
          {
            title: "Accordion 2",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.`,
          },
          {
            title: "Accordion 3",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.`,
          },
        ]}
        customClass="mui-accordion-quaternary"
      ></AccordionComponent>
    </div>
  );
}

export default App;
