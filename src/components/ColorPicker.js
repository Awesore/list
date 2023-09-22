import React, {useState} from 'react';
import {SketchPicker} from 'react-color'

const ColorPickerMy = () => {
    const [currentColor, setCurrentColor] = useState("#ff6")
    const handlerChange = (color) =>
        setCurrentColor(color)

    return (
        <div className="pl-10">
            <SketchPicker
                color={currentColor}
                onChangeComplete={handlerChange}
            />
        </div>
    );
};

export default ColorPickerMy;