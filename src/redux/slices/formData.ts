import { createSlice } from "@reduxjs/toolkit"

type FormType = {
  currentFormNumber: number
  welcomePageData: {
    product: string
  }
  departmentPageData: {
    department: string
  }
  contactDetails: {
    email: string
    phone: string
  }
  personalDetails: {
    firstName: string
    lastName: string
  }
  componyDetails: {
    componyName: string
    jobTitle: string
  }
}

const initialFormState: FormType = {
  currentFormNumber: 0,
  welcomePageData: {
    product: "",
  },
  departmentPageData: {
    department: "",
  },
  contactDetails: {
    email: "",
    phone: "",
  },
  personalDetails: {
    firstName: "",
    lastName: "",
  },
  componyDetails: {
    componyName: "",
    jobTitle: "",
  },
}

const formSlice = createSlice({
  name: "form",
  initialState: initialFormState,
  reducers: {
    incrementCurrentFormNumber: (state) => {
      state.currentFormNumber++
    },
    decrementCurrentFormNumber: (state) => {
      state.currentFormNumber--
    },
    updateWelcomePageData: (state, { payload }) => {
      state.welcomePageData.product = payload
    },
    updateDepartment: (state, { payload }) => {
      state.departmentPageData.department = payload
    },
    updateContactDetails: (state, { payload: { email, phone } }) => {
      console.log(email, phone)
      state.contactDetails.email = email
      state.contactDetails.phone = phone
    },
    updatePersonalDetails: (state, { payload: { firstName, lastName } }) => {
      console.log(firstName, lastName)
      state.personalDetails.firstName = firstName
      state.personalDetails.lastName = lastName
    },
    updateComponyDetails: (state, { payload: { componyName, jobTitle } }) => {
      state.componyDetails.componyName = componyName
      state.componyDetails.jobTitle = jobTitle
    },
    resetForm: (state) => {
      Object.assign(state, initialFormState)
    },
  },
})

export const {
  incrementCurrentFormNumber,
  decrementCurrentFormNumber,
  updateWelcomePageData,
  updateDepartment,
  updateContactDetails,
  updatePersonalDetails,
  resetForm,
  updateComponyDetails,
} = formSlice.actions

export default formSlice.reducer
