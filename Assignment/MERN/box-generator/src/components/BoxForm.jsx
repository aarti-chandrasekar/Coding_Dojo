import React, {useState} from 'react'

export const BoxForm = ({updateBoxList}) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        updateBoxList(color, size);
        setColor("");
        setSize("");
    }

    return (
        <form onSubmit={handleSubmit} className="row d-flex justify-content-center">
            <div className="bg-dark   w-75" >
                {/* <!-- Color --> */}
                <label htmlFor="color" className="text-white me-2">Color </label>
                <input type="text" name="color" id="color"
                    onChange={e => setColor(e.target.value)}
                    value={color} className="rounded me-4" />

                {/* <!-- Size --> */}
                <label htmlFor="size" className="text-white me-2">Size </label>
                <input type="text" name="size" id="size"
                    onChange={e => setSize(e.target.value)}
                    value={size} className="rounded me-4" /> 

                <input type="submit" value="Add" />
            </div>

        </form>
    )
}
