import {
  ContactDetails,
  Department,
  PersonalDetails,
  ThankYou,
  Welcome,
} from "components/FormComponents/Forms"
import React from "react"
import { useAppSelector } from "../src/redux/store"

const Component = () => {
  const { currentFormNumber } = useAppSelector((state) => state.formReducer)

  switch (currentFormNumber) {
    case 0:
      return <Welcome />
    case 1:
      return <Department />
    case 2:
      return <ContactDetails />
    case 3:
      return <PersonalDetails />
    case 4:
      return <ThankYou />
    default:
      return <Welcome />
  }
}

export default Component
