// import { useEffect } from "react"

// import { FieldValues } from "react-hook-form"

// const useLocalStorage = (
//   key: string,
//   setValue: FieldValues,
//   watch: FieldValues
// ) => {
//   const getValue = () => {
//     const value = localStorage.getItem(key)
//     if (value) {
//       setValue(JSON.parse(value))
//     }
//   }

//   useEffect(() => {
//     localStorage.setItem(key, watch)
//   }, [watch])
// }

// export default useLocalStorage
