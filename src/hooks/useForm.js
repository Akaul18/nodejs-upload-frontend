// import { useState } from 'react'

// export const useForm = (initialState = {}, callback) => {
//     const [values, setValues] = useState(initialState)
//     const [error, setError] = useState(false)

//     const onChange = (e) => {
//         setValues({
//             ...values,
//             [e.target.name]: e.target.value,
//         })
//     }

//     const onSubmit = (e) => {
//         e.preventDefault()
//         console.log(values.username)
//         if (!values.username || !values.password) {
//             setError(true)
//         } else {
//             setError(false)
//         }
//         callback(error)
//     }

//     return {
//         onChange,
//         onSubmit,
//         values,
//     }
// }
