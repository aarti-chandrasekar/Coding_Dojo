import React from 'react'

export const TodoItem = ({ id, action, isDone, markDoneTodo, deleteTodo }) => {

    const handleDelete = (e) => {
        e.preventDefault();
        deleteTodo(id);
    }

    const handleDone = (e) => {
        markDoneTodo(id, e.target.checked);
    }

    return (
        <form onSubmit={handleDelete} className="row d-flex justify-content-center mt-4">
            <div className="d-flex bg-dark justify-content-between  w-50" >
                <span className={isDone ? "me-4 text-decoration-line-through" : "me-4"}>{action}</span>
                <div>
                    <input type="checkbox" checked={isDone}
                        onChange={handleDone} className="me-4" />
                    <input type="submit" value="Delete" />
                </div>
            </div>

        </form>
    )
}
