import { SketchPicker, BlockPicker } from "react-color";
import { useState } from "react";

function ColorPick() {
  //creating state to store our color and also set color using onChange event for sketch picker
  const [sketchPickerColor, setSketchPickerColor] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });
  // destructuring rgba from state
  const { r, g, b, a } = sketchPickerColor;

  //creating state to store our color and also set color using onChange event for block picker
  const [blockPickerColor, setBlockPickerColor] = useState("#37d67a");

  return (
    <div className="p-3 max-w-lg mx-auto">
      <div className="text-3xl font-semibold text-center my-7">
        <div className="App flex justify-between">
          <div className="sketchpicker">
            <h6>Sketch Picker</h6>
            {/* Div to display the color  */}
            <div
              style={{
                backgroundColor: `rgba(${r},${g},${b},${a})`,
                width: 100,
                height: 50,
                border: "2px solid white",
              }}
            ></div>
            {/* Sketch Picker from react-color and handling color on onChange event */}
            <SketchPicker
              onChange={(color) => {
                setSketchPickerColor(color.rgb);
              }}
              color={sketchPickerColor}
            />
          </div>
          <div className="blockpicker">
            <h6>Color Picker</h6>
            {/* Div to display the color  */}
            <div
              style={{
                backgroundColor: `${blockPickerColor}`,
                width: 100,
                height: 50,
                border: "2px solid white",
              }}
            ></div>
            {/* Block Picker from react-color and handling color on onChange event */}
            <BlockPicker
              color={blockPickerColor}
              onChange={(color) => {
                setBlockPickerColor(color.hex);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorPick;
