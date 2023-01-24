import React, {useState} from 'react'

export const AddTodoForm = ({addToList}) => {
    const [action, setAction] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addToList(action);
        setAction("");
    }

    return (
        <form onSubmit={handleSubmit} className="row d-flex justify-content-center">
            <div className="bg-dark   w-50" >
                {/* <!-- Action --> */}
                <input type="text" name="action" id="action"
                    onChange={e => setAction(e.target.value)}
                    value={action} className="rounded me-4" />

                <input type="submit" value="Add" />
            </div>

        </form>
    )
}
