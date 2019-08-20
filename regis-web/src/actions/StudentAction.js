export const insertStudent = (result) => (
    {
        type: "INSERT",
        payload: result
    }
)

export const getAllStudent = (data) => (
    {
        type: "QUERY",
        payload: data
    }
)

export const deleteAllStudent = (data) => (
    {
        type: "DELETE_ALL",
        payload: data
    }
)

export const deleteStudent = (data) => (
    {
        type: "DELETE",
        payload: data
    }
)